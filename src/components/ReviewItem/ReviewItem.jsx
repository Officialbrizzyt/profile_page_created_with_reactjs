import React from 'react'
import './ReviewItem.css'

const ReviewItem = ({name, avatar, reviews}) => {
  return (
    <li>
    <article className="reviews">
      <div className="review__avatar">
        <img src={avatar} alt={name +"'s avatar"} />
      </div>
      <div className="review__content">
        <h4>{name}</h4>
        <p>{reviews}</p>
      </div>
    </article>
  </li>
  )
}

export default ReviewItem