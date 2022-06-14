import React, { useState } from "react";
const YORUM_BASLANGIC = {
  display_name: "",
  body: "",
};
const YorumFormu = ({ handleCommentSubmit }) => {
  const [yorum, setYorum] = useState(YORUM_BASLANGIC);
  const handleOnChange = (e) => {
    setYorum({ ...yorum, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h3>Yorum yaz</h3>
      <form
        onSubmit={(event) => { 
          handleCommentSubmit(event, yorum);
          setYorum(YORUM_BASLANGIC);
        }}
        className="ui form"
      >
        <div className="ui mini icon input">
          <input
            name="display_name"
            type="text"
            placeholder="adiniz"
            onChange={handleOnChange}
            value={yorum.display_name}
          />
        </div>
        <textarea
          name="body"
          placeholder="comment"
          rows="3"
          onChange={handleOnChange}
          value={yorum.body}
        ></textarea>
        <button className="ui blue button" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default YorumFormu;
