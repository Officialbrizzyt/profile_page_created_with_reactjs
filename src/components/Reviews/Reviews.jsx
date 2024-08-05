import React from 'react'
import ReviewItem from '../ReviewItem/ReviewItem'

const Reviews = () => {
  return (
    <div className="tab-content tab-content--active">
    <p>Here are some of the reviews <br /> from my students 📚</p>
    <ul className="reviews">
      <ReviewItem 
        name="Queen Doe"
        avatar="/"
        reviews="Immanuel is a great mentor. He helped me to prepare for the interview and provided me with valuable feedback on my projects. I would highly recommend her to anyone who is looking for a mentor."
      />
      <ReviewItem 
        name="King Doe"
        avatar="/"
        reviews="Immanuel is awesome at explaining complex topics in a simple way. I have learned a lot from her and would recommend her to anyone who is looking for a mentor."
      />
    </ul>
  </div>
  )
}

export default Reviews