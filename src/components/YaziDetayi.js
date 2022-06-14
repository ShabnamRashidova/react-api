import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { api } from "../api";
import SilModal from "./SilModal";
import YaziYorumlari from "./YaziYorumlari";

const YaziDetayi = () => {
  const { id } = useParams();
  const [yaziDetayi, setYaziDetayi] = useState({});
  const [yaziYorumlari, setYaziYorumlari] = useState([]);

  const handleCommentSubmit = (event,yorum) => {
    event.preventDefault();
    api()
      .post(
        `/posts/${id}/comments`,
        yorum
      )
      .then((res) => {
        setYaziYorumlari([...yaziYorumlari, res.data]);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
   axios
      .all([
        api().get(`/posts/${id}`),
        api().get(
          `/posts/${id}/comments`
        ),
      ])
      .then((responses) => {
        setYaziDetayi(responses[0].data);
        setYaziYorumlari(responses[1].data);
      })
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <>
      <h2 className="ui header">{yaziDetayi.title}</h2>
      <p>{yaziDetayi.content}</p>
      <div className="ui buttons">
        <Link to ={`/posts/${yaziDetayi.id}/edit`} className="ui button green">duzenle</Link>
        <SilModal yazi={yaziDetayi}/>
      </div>
      <p>{yaziDetayi.created_at}</p>
      <YaziYorumlari yaziYorumlari={yaziYorumlari} handleCommentSubmit={handleCommentSubmit}/>
   
    </>
  );
};
export default YaziDetayi;
