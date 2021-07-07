import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { useAlert } from "react-alert";
import API from "../../utils/API";
import { useHistory, useParams } from "react-router-dom";
import { getCurrentDeck } from "../../actions/deck";
import { Form, Row, Col, Button } from "react-bootstrap";
import Dropzone from "react-dropzone";
// import "../../styles/DeckEdit.css";

function DeckEdit({ getCurrentDeck, deck: { deck, loading } }) {
  const initialState = {
    name: "",
    desc: "",
    file_path: "/assets/img/cardsample2.jpg",
    properties: [],
  };
  const alert = useAlert();
  // Setting our component's initial state
  const [deckInfo, setDeckInfo] = useState(deck ? deck : initialState);
  const [previewSrc, setPreviewSrc] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [file, setFile] = useState(null);
  const dropRef = useRef();

  const handleChange = (evt) => {
    const value = evt.target.value;
    setDeckInfo({
      ...deckInfo,
      [evt.target.name]: value,
    });
  };

  let history = useHistory();

  let { id } = useParams();

  // Load all deck info and store them with setDeck
  useEffect(() => {
    loadDeckInfo();

    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   loadDeckInfo();
  //   // eslint-disable-next-line
  // }, [deck]);

  // Loads all deck info and sets them to Deck
  const loadDeckInfo = async () => {
    getCurrentDeck(id);
    API.getDeck(id)
      .then((res) => {
        // console.log("data", res.data);
        setDeckInfo(res.data);
        let file_path = res.data.file_path.startsWith("assets")
          ? `/${res.data.file_path}`
          : //eslint-disable-next-line
            `/uploads/${res.data.file_path.split(/[\\\/]/).slice(-1)[0]}`;
        setPreviewSrc(file_path);
        setIsPreviewAvailable(file_path);
      })

      .catch((err) => console.log(err));
  };

  const saveDeck = async (e) => {
    e.preventDefault();
    // console.log("deckInfo in saveDeck: ", deckInfo);

    // API.editDeck(deck._id, deckInfo)
    //   .then(alert.success("Saved deck"))
    //   .catch((err) => console.log(err));

    try {
      const { name, desc, cards } = deckInfo;
      if (name.trim() !== "" && desc.trim() !== "") {
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("name", name);
          formData.append("desc", desc);
          formData.append("cards", JSON.stringify(cards));
          setErrorMsg("");
          await API.editDeck(id, formData);
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

  const deleteDeck = (e) => {
    e.preventDefault();
    API.deleteDeck(deck._id)
      .then(alert.success("Deleted deck"))
      .catch((err) => console.log(err));
    // console.log(`Deleted deck ${deckInfo._id} . Redirecting`);
    history.push("/");
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

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="deckEdit">
      <h1>Edit Deck</h1>
      <div className="col-md-6 col-lg-8" id="deckForm">
        {/* <form id="mediaForm" encType="multipart/form-data" method="POST"> */}
        <Form className="search-form" onSubmit={saveDeck}>
          {/* <input
            className="d-none"
            type="text"
            name="deckId"
            id="deckId"
            value="defaultDeckId"
          />
          <input
            className="d-none"
            type="text"
            name="deckImgUrl"
            id="deckImgUrl"
            value="defaultImgUrl"
          /> */}
          <div className="form-group">
            <label htmlFor="deckNameInput">
              <h5>Name of Deck</h5>
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              id="deckNameInput"
              className="form-control"
              placeholder="Sample Deck Name"
              // onInput={previewMatch(cardNameInputId)}
              value={deckInfo?.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="deckNameInputDesc">
              <h5>Description</h5>
            </label>
            <textarea
              onChange={handleChange}
              name="desc"
              id="deckNameInputDesc"
              className="form-control"
              placeholder="Some quick example text to build on the deck title and make up the bulk of the card's content."
              // onInput={previewMatch(deckNameInputDesc)}
              value={deckInfo?.desc}
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageFile">
              <h5>Deck art</h5>
            </label>
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
          </div>
          <div id="apiMessage" className="alert alert-success d-none"></div>
          <div className="deckEdit__buttons">
            <button onClick={saveDeck} className="deckEdit__btn">
              <SaveIcon />
            </button>
            <button onClick={deleteDeck} className="deckEdit__btn">
              <DeleteIcon />
            </button>
          </div>

          {/* </form> */}
        </Form>
        {errorMsg && (
          <p className="errorMsg">
            <strong>{errorMsg}</strong>
          </p>
        )}
      </div>
      <div className="deckPreviewBlock">
        <div className="card" id="deckPreview">
          <h5 className="card-title card-body" id="deckNamePreview">
            {deckInfo?.name}
          </h5>
          <img
            src={previewSrc}
            // src="/assets/img/decksample1.jpg"
            className="card-img-top img-fluid"
            id="deckImgPreview"
            alt="example"
          />
          <p className="card-text card-body" id="deckDescPreview">
            {deckInfo?.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

DeckEdit.propTypes = {
  getCurrentDeck: PropTypes.func.isRequired,
  deck: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  deck: state.deck,
});

export default connect(mapStateToProps, { getCurrentDeck })(DeckEdit);
