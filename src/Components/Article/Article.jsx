import React from 'react'

function Article({id,title,desc,img }) {
  return (
    <article className="new_article" key={id}>
    <img src={img} alt="Retro computing" />
    <div className="content">
      <h2>{id}</h2>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </article>
  )
}

export default Article