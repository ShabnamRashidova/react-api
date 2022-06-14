import React from 'react'

const YorumListesi = ({yaziYorumlari}) => {
  return (
    <>
    <h3>Yorumlar</h3>
      {yaziYorumlari.map((comment) => {
        return (
          <div className="ui relaxed list" key={comment.id}>
            <div className="item">
              <div className="content">
                <div className="header">{comment.display_name}</div>
                <div className="description">{comment.body}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  )
}

export default YorumListesi