import { api } from "../api";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const YaziFormu = (props) => {
  const { id } = useParams();
  const [hata, setHata] = useState("");
  const navigate = useNavigate();
  const [yazi, setYazi] = useState({ title: "", content: "" });
  const onChangeInput = (e) => {
    setYazi({ ...yazi, [e.target.name]: e.target.value });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (props.yazi) {
      api()
        .put(`/posts/${id}`, yazi)
        .then((response) => navigate("/"));
    } else {
      api()
        .post("/posts", yazi)
        .then((response) => navigate("/"))
        .catch((error) => setHata("all fields are required"));
    }
  };
  useEffect(() => {
    if (props.yazi?.title && props.yazi?.content) {
      setYazi(props.yazi);
    }
  }, [props.yazi]);
  return (
    <>
      {hata && (
        <div className="ui error message">
          <div className="header">Error</div>
          <p>{hata}</p>
        </div>
      )}
      <div className="ui  form">
        <div className="field">
          <label htmlFor="">Yazi basligi</label>
          <input
            type="text"
            value={yazi.title}
            name="title"
            onChange={onChangeInput}
          />
        </div>
        <div className="field">
          <label htmlFor="">Yazi icerigi</label>
          <textarea
            rows="3"
            value={yazi.content}
            name="content"
            onChange={onChangeInput}
          ></textarea>
        </div>
        <button className="ui primary button" onClick={onFormSubmit}>
          Gonder
        </button>
        <button className="ui red button">Iptal et</button>
      </div>
    </>
  );
};

export default YaziFormu;
