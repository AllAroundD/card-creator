import React from "react";
// import '../styles/InfoChunk.css'

export default function InfoChunk(props) {
  return (
    <div className="card mb-3 infochunk">
      <div className="row g-0">
        <div className="col-md-4">
          {/* <img className='infochunk__img' src={props.src} alt="..." /> */}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title infochunk__title">{props.title}</h5>
            <p className="card-text infochunk__text">{props.children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
