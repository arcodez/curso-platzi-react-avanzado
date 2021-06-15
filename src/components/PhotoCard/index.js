import React from 'react'

export const PhotoCard = ({ id, likes = 0, src }) => {
  return (
    <article>
      <a href={`detail/${id}`}>
        <div>
          <img src={src} />
        </div>
      </a>
      <button>{likes} likes!</button>
    </article>
  )
}
