import React, { useState } from "react";
import YaziFormu from "./YaziFormu";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../api";
const YaziDuzenle = () => {
  const { id } = useParams();
  const [yazi, setYazi] = useState({});
  useEffect(() => {
    api()
      .get(`/posts/${id}`)
      .then((response) => setYazi({content:response.data.content,title:response.data.title}));
  }, [id]);
  return (
    <>
      <h1>Yazi duzenleme formu</h1>
      <YaziFormu yazi={yazi} />
    </>
  );
};

export default YaziDuzenle;
