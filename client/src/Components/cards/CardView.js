import React, { useState, useRef, useEffect, Fragment } from "react";
import API from "../../utils/API";
// import CardProperties from './CardProperties'
import { useHistory } from "react-router-dom";
// import CardProperties from './CardProperties'
import { Form, Row, Col } from "react-bootstrap";
import "../../styles/CardView.css";

const initialState = {
  name: "",
  desc: "",
  file_path: "/assets/img/cardsample2.jpg",
  properties: [],
};

function CardView(props) {
  // Setting our component's initial state
  const [cardInfo, setCardInfo] = useState(initialState);
  const [cardProperties, setCardProperties] = useState([]);

  const [previewSrc, setPreviewSrc] = useState("/assets/img/cardsample2.jpg");
  const [errorMsg, setErrorMsg] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const dropRef = useRef();

  let id = window.location.pathname.substr(6);
  // Load all card info and store with setCard
  useEffect(() => {
    loadCardInfo(id);
  }, []);

  const loadCardInfo = (id) => {
    API.getCard(id)
      .then((res) => {
        // console.log("res.data", res.data);
        setCardInfo(res.data);
        let file_path = res.data.file_path.startsWith("assets")
          ? `/${res.data.file_path}`
          : `/uploads/${res.data.file_path.split(/[\\\/]/).slice(-1)[0]}`;
        setPreviewSrc(file_path);
        setIsPreviewAvailable(file_path);
        setCardProperties(res.data.properties);
      })

      .catch((err) => console.log(err));
    // setPreviewSrc(cardInfo.file_path);
  };

  let history = useHistory();

  return (
    <div className="cardView">
      <h1>View Card</h1>
      <div className="col-sm-11" id="cardForm">
        <Form className="search-form">
          <Row>
            <Col>
              <div className="container-fluid cardPreviewBlock">
                <div className="card" id="cardPreview">
                  <h5 className="card-title card-body" id="cardNamePreview">
                    {cardInfo.name ? cardInfo.name : "Sample Card Name"}
                  </h5>
                  {previewSrc ? (
                    isPreviewAvailable ? (
                      <div className="image-preview">
                        <img
                          className="preview-image cardView__img__top img-fluid img-thumbnail"
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

                  <ul
                    className="list-group list-group-flush"
                    id="cardAttrListPreview"
                  >
                    {cardProperties &&
                      cardProperties.map((property, i) => {
                        return (
                          <Fragment key={i}>
                            <p>Name: {property.name}</p>
                            <p>Value: {property.value}</p>
                          </Fragment>
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

export default CardView;
