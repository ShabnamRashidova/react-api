import React from "react";
import YorumListesi from "./YorumListesi";
import YorumFormu from "./YorumFormu";
const YaziYorumlari = ({ yaziYorumlari,handleCommentSubmit }) => {
  return (
    <>
      <YorumListesi yaziYorumlari={yaziYorumlari} />
      <YorumFormu handleCommentSubmit={handleCommentSubmit}/>
    </>
  );
};
export default YaziYorumlari;
