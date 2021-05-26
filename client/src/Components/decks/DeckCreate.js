import React, { useState, useRef, useEffect, Fragment } from "react";
import CardsList from "../cards/CardsList";
import SaveIcon from "@material-ui/icons/Save";
import ClearIcon from "@material-ui/icons/Clear";
import { useAlert } from "react-alert";
import API from "../../utils/API";
// import DeckAttributes from './DeckAttributes'
import { useHistory } from "react-router-dom";
// import DeckAttributes from './DeckAttributes'
import { Form, Row, Col, Button } from "react-bootstrap";
import Dropzone from "react-dropzone";
// import "../../styles/DeckCreate.css";

const initialState = {
  name: "",
  desc: "",
  file_path: "/assets/img/decksample1.png",
  cards: [],
};

function DeckCreate(props) {
  const alert = useAlert();
  // Setting our component's initial state
  const [deckInfo, setDeckInfo] = useState(initialState);
  const [cardsSelection, setCardsSelection] = useState([])

  const [file, setFile] = useState(null);
  const [previewSrc, setPreviewSrc] = useState("/assets/img/decksample2.png");
  const [errorMsg, setErrorMsg] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const dropRef = useRef();

  const handleChange = (evt) => {
    setDeckInfo({
      ...deckInfo,
      [evt.target.name]: evt.target.value,
    });
  };
  
    
  // const handleAttributeChange = (index, event) => {
  //   const values = [...deckAttributes];
  //   if (event.target.name === "attrInput") {
  //     values[index].name = event.target.value;
  //   } else {
  //     values[index].value = event.target.value;
  //   }

  //   setDeckAttributes(values);
  // };

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

  // const handleAddAttributes = () => {
  //   const values = [...deckAttributes];
  //   values.push({ name: "", value: "" });
  //   setDeckAttributes(values);
  // };

  let id;
  let history = useHistory();

  const saveDeck = async (e) => {
    e.preventDefault();

    const newDeckInfo = deckInfo;
    newDeckInfo.cards = cardsSelection;

    setDeckInfo(newDeckInfo);

    console.log("deckInfo in saveDeck: ", newDeckInfo);
    // API.createDeck(deckInfo)
    //     .then(alert.success('Saved card')
    // )
    // .catch(err => console.log(err));
    // history.push('/cardedit')

    try {
      const { name, desc, cards } = newDeckInfo;
      console.log("cards: ", cards);
      if (name.trim() !== "" && desc.trim() !== "") {
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("name", name);
          formData.append("desc", desc);
          formData.append("cards", JSON.stringify(cards));
          setErrorMsg("");
          console.log("formData: ", formData);
          await API.createDeck(formData);
          alert.success("Saved deck");
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

  const clearDeck = (e) => {
    e.preventDefault();
    setDeckInfo({
      name: "",
      desc: "",
      properties: [],
    });
    setFile("");
    setCardsSelection([]);
    //   setDeckInfo(...initialState)
    // console.log('deckAttributes: ', deckAttributes)
    alert.success("Cleared deck");
  };

  return (
    <>
      <div className="deckCreate">
        <h1>Create Deck</h1>

        {/* <div className="cardEdit__image">
                <img src="/assets/img/cardsample1.jpg" className="cardEdit__img__top" alt="card" />
            </div>
            <div className="cardEdit__body"> */}

        <div className="col-sm-11" id="deckForm">
          <Form className="search-form" onSubmit={saveDeck}>
            <Row>
              <Col>
                <Form.Group controlId="name">
                  <Form.Label>
                    <h5>Name of deck</h5>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={deckInfo.name || ""}
                    placeholder="Sample Deck Name"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="desc">
                  <Form.Label>
                    <h5>Description of Deck</h5>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    cols={100}
                    type="text"
                    name="desc"
                    id="desc"
                    value={deckInfo.desc || ""}
                    placeholder="Some quick example text to build on the Deck title and make up the bulk of the deck's content."
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    <h5>Cards (Deck Assembly)</h5>
                  </Form.Label>
                  <CardsList context={"selection"} />
                  <CardsList context={"addFromPool"} />
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
                <div className="deckCreate__buttons">
                  <Button
                    onClick={saveDeck}
                    className="deckCreate__btn"
                    type="submit"
                  >
                    <SaveIcon />
                  </Button>
                  <Button
                    onClick={clearDeck}
                    className="deckCreate__btn"
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
                <div className="container-fluid deckPreviewBlock">
                  <div className="card" id="deckPreview">
                    <h5 className="card-title card-body" id="deckNamePreview">
                      {deckInfo.name ? deckInfo.name : "Sample Deck Name"}
                    </h5>
                    {/* <img src={`/assets/img/${deckInfo.imgId}`} className="card-img-top img-fluid" id='cardImgPreview'
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
                            id="deckImgPreview"
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
                    <p className="card-text card-body" id="deckDescPreview">
                      {deckInfo.desc
                        ? deckInfo.desc
                        : "Some quick example text to build on the deck title and make up the bulk of the deck's content."}
                    </p>
                    {/* <ul className="list-group list-group-flush" id='cardAttrListPreview'>{`${deckAttributes[0]} : ${deckAttributes[1]}`}</ul> */}
                    <ul
                      className="list-group list-group-flush"
                      id="deckAttrListPreview"
                    >
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
            <Row></Row>
          </Form>
        </div>
      </div>
    </>
  );
}

export default DeckCreate;
