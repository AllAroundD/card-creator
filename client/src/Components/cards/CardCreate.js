import React, { useState, useRef, useEffect, Fragment } from "react";
import SaveIcon from "@material-ui/icons/Save";
import ClearIcon from "@material-ui/icons/Clear";
import { useAlert } from "react-alert";
import API from "../../utils/API";
// import CardAttributes from './CardAttributes'
import { useHistory } from "react-router-dom";
// import CardAttributes from './CardAttributes'
import { Form, Row, Col, Button } from "react-bootstrap";
import Dropzone from "react-dropzone";
import "../../styles/CardCreate.css";

const initialState = {
  name: "",
  desc: "",
  file_path: "/assets/img/cardsample2.jpg",
  properties: [],
};

function CardCreate(props) {
  const alert = useAlert();
  // Setting our component's initial state
  const [cardInfo, setCardInfo] = useState(initialState);
  const [cardAttributes, setCardAttributes] = useState([]);

  const [file, setFile] = useState(null);
  const [previewSrc, setPreviewSrc] = useState("/assets/img/cardsample2.jpg");
  const [errorMsg, setErrorMsg] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const dropRef = useRef();

  const handleChange = (evt) => {
    setCardInfo({
      ...cardInfo,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleAttributeChange = (index, event) => {
    const values = [...cardAttributes];
    if (event.target.name === "attrInput") {
      values[index].name = event.target.value;
    } else {
      values[index].value = event.target.value;
    }

    setCardAttributes(values);
  };

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
  };

  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "2px solid #000";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "2px dashed #e9ebeb";
    }
  };

  const handleAddAttributes = () => {
    const values = [...cardAttributes];
    values.push({ name: "", value: "" });
    setCardAttributes(values);
  };

  let id;
  let history = useHistory();

  const saveCard = async (e) => {
    e.preventDefault();

    const newCardInfo = cardInfo;
    newCardInfo.properties = cardAttributes;

    setCardInfo(newCardInfo);

    console.log("cardInfo in saveCard: ", newCardInfo);
    // API.createCard(cardInfo)
    //     .then(alert.success('Saved card')
    // )
    // .catch(err => console.log(err));
    // history.push('/cardedit')

    try {
      const { name, desc, properties } = newCardInfo;
      console.log("properties: ", properties);
      if (name.trim() !== "" && desc.trim() !== "") {
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("name", name);
          formData.append("desc", desc);
          formData.append("properties", JSON.stringify(properties));
          setErrorMsg("");
          console.log("formData: ", formData);
          await API.createCard(formData);
          alert.success("Saved card");
        } else {
          setErrorMsg("Please select a file to add.");
        }
      } else {
        setErrorMsg("Please enter all the field values.");
      }
    } catch (error) {
      alert.error("Invalid file format.");
      error.response && setErrorMsg("Invalid file format.");
    }
  };

  const clearCard = (e) => {
    e.preventDefault();
    setCardInfo({
      name: "",
      desc: "",
      properties: [],
    });
    setFile("");
    setCardAttributes([]);
    //   setCardInfo(...initialState)
    // console.log('cardAttributes: ', cardAttributes)
    alert.success("Cleared card");
  };

  return (
    <div className="cardCreate">
      <h1>Create Card</h1>

      {/* <div className="cardEdit__image">
                <img src="/assets/img/cardsample1.jpg" className="cardEdit__img__top" alt="card" />
            </div>
            <div className="cardEdit__body"> */}

      <div className="col-sm-11" id="cardForm">
        <Form className="search-form" onSubmit={saveCard}>
          <Row>
            <Col>
              <Form.Group controlId="name">
                <Form.Label>
                  <h5>Name of card</h5>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={cardInfo.name || ""}
                  placeholder="Sample Card Name"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="desc">
                <Form.Label>
                  <h5>Description of card</h5>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  cols={100}
                  type="text"
                  name="desc"
                  id="desc"
                  value={cardInfo.desc || ""}
                  placeholder="Some quick example text to build on the card title and make up the bulk of the card's content."
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="cardAttrInputList">
                  <h5>Attributes</h5>
                </label>
                <div id="cardAttrInputList">
                  {cardAttributes.map((cardAttribute, index) => (
                    <Fragment key={`${cardAttribute}~${index}`}>
                      <Form.Label htmlFor="attrInput">
                        Attribute name
                      </Form.Label>
                      <input
                        type="text"
                        name="attrInput"
                        id="attrInput"
                        className="form-control"
                        value={cardAttribute.name}
                        placeholder="attribute1"
                        onChange={(event) =>
                          handleAttributeChange(index, event)
                        }
                      />
                      <Form.Label htmlFor="valInput">Value</Form.Label>
                      <textarea
                        name="valInput"
                        id="valInput"
                        className="form-control"
                        value={cardAttribute.value}
                        placeholder="value1"
                        onChange={(event) =>
                          handleAttributeChange(index, event)
                        }
                      ></textarea>
                    </Fragment>
                  ))}
                </div>
                <Button
                  type="button"
                  className="btn btn-primary mt-3"
                  onClick={handleAddAttributes}
                >
                  Add attribute
                </Button>

                {/* <CardAttributes /> */}
              </Form.Group>

              <div className="upload-section">
                <Dropzone
                  onDrop={onDrop}
                  onDragEnter={() => updateBorder("over")}
                  onDragLeave={() => updateBorder("leave")}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div
                      {...getRootProps({ className: "drop-zone" })}
                      ref={dropRef}
                    >
                      <input {...getInputProps()} />
                      <Button className="btn btn-secondary mt-3">
                        Drag and drop a file OR click here to select a file
                      </Button>
                      {file && (
                        <div>
                          <strong>Selected file:</strong> {file.name}
                        </div>
                      )}
                    </div>
                  )}
                </Dropzone>
              </div>
              <div className="cardCreate__buttons">
                <Button
                  onClick={saveCard}
                  className="cardCreate__btn"
                  type="submit"
                >
                  <SaveIcon />
                </Button>
                <Button
                  onClick={clearCard}
                  className="cardCreate__btn"
                  type="submit"
                >
                  <ClearIcon />
                </Button>
              </div>
              {errorMsg && (
                <p className="errorMsg">
                  <strong>{errorMsg}</strong>
                </p>
              )}
            </Col>

            <Col>
              <div className="container-fluid cardPreviewBlock">
                <div className="card" id="cardPreview">
                  <h5 className="card-title card-body" id="cardNamePreview">
                    {cardInfo.name ? cardInfo.name : "Sample Card Name"}
                  </h5>
                  {/* <img src={`/assets/img/${cardInfo.imgId}`} className="card-img-top img-fluid" id='cardImgPreview'
                            alt="example" /> */}
                  {
                    /* {JSON.stringify(previewSrc)} */
                    console.log("previewSrc", previewSrc)
                  }
                  {
                    /* {JSON.stringify(isPreviewAvailable)} */
                    console.log("isPreviewAvailable", isPreviewAvailable)
                  }
                  {previewSrc ? (
                    isPreviewAvailable ? (
                      <div className="image-preview">
                        <img
                          className="preview-image card-img-top img-fluid img-thumbnail"
                          src={previewSrc}
                          alt="Preview"
                          id="cardImgPreview"
                        />
                      </div>
                    ) : (
                      <div className="preview-message">
                        <p>No preview available for this file</p>
                      </div>
                    )
                  ) : (
                    <div className="preview-message">
                      <p>Image preview will be shown here after selection</p>
                    </div>
                  )}
                  <p className="card-text card-body" id="cardDescPreview">
                    {cardInfo.desc
                      ? cardInfo.desc
                      : "Some quick example text to build on the card title and make up the bulk of the card's content."}
                  </p>
                  {/* <ul className="list-group list-group-flush" id='cardAttrListPreview'>{`${cardAttributes[0]} : ${cardAttributes[1]}`}</ul> */}
                  <ul
                    className="list-group list-group-flush"
                    id="cardAttrListPreview"
                  >
                    {/* {JSON.stringify(cardAttributes)} */}
                    {cardAttributes &&
                      cardAttributes.map((attribute) => {
                        return (
                          <>
                            <p>Name: {attribute.name}</p>
                            <p>Value: {attribute.value}</p>
                          </>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default CardCreate;
