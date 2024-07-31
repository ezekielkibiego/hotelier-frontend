

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Review = ({ hotelId }) => {
//   const [reviews, setReviews] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/api/reviews/?hotel=${hotelId}`);
//         setReviews(response.data);
//       } catch (error) {
//         if (error.response) {
//           setError(error.response.data.detail || 'An error occurred while fetching reviews.');
//         } else {
//           setError('Network error. Please try again.');
//         }
//       }
//     };

//     fetchReviews();
//   }, [hotelId]);

//   if (error) {
//     return <div className="alert alert-danger">{error}</div>;
//   }

//   if (reviews.length === 0) {
//     return <div>No reviews available for this hotel.</div>;
//   }

//   return (
//     <div>
//       <h5>Reviews</h5>
//       {reviews.map(review => (
//         <div key={review.id} className="mb-3">
//           <h6>User: {review.user}</h6>
//           <div className="rating">
//             {[...Array(5)].map((_, i) => (
//               <i
//                 key={i}
//                 className={`fa ${i < review.rating ? 'fa-star' : 'fa-star-o'} text-warning`}
//                 aria-hidden="true"
//               ></i>
//             ))}
//           </div>
//           <p>{review.comment}</p>
//           <p><small>Created at: {new Date(review.created_at).toLocaleDateString()}</small></p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Review;

// Review.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from './config';


const Review = ({ hotelId }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ user: '', rating: '', comment: '' });
  const [formError, setFormError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/reviews/?hotel=${hotelId}`);
        setReviews(response.data);
      } catch (error) {
        if (error.response) {
          setError(error.response.data.detail || 'An error occurred while fetching reviews.');
        } else {
          setError('Network error. Please try again.');
        }
      }
    };

    fetchReviews();
  }, [hotelId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    setSuccessMessage(null);

    const newReview = {
      ...formData,
      hotel: hotelId,
    };

    try {
      const response = await axios.post(`${BASE_URL}/api/reviews/`, newReview);
      setReviews([...reviews, response.data]);
      setSuccessMessage('Review added successfully!');
      setFormData({ user: '', rating: '', comment: '' });
    } catch (error) {
      if (error.response) {
        setFormError(error.response.data.detail || 'An error occurred while submitting the review.');
      } else {
        setFormError('Network error. Please try again.');
      }
    }
  };

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div>
      <h5>Reviews</h5>
      {reviews.length === 0 ? (
        <div>No reviews available for this hotel.</div>
      ) : (
        reviews.map(review => (
          <div key={review.id} className="mb-3">
            <h6>User: {review.user}</h6>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fa ${i < review.rating ? 'fa-star' : 'fa-star-o'} text-warning`}
                  aria-hidden="true"
                ></i>
              ))}
            </div>
            <p>{review.comment}</p>
            <p><small>Created at: {new Date(review.created_at).toLocaleDateString()}</small></p>
          </div>
        ))
      )}

      <h5>Add a Review</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="user" className="form-label">User</label>
          <input
            type="text"
            className="form-control"
            id="user"
            name="user"
            value={formData.user}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating</label>
          <input
            type="number"
            className="form-control"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">Comment</label>
          <textarea
            className="form-control"
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {formError && <div className="alert alert-danger">{formError}</div>}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        <button type="submit" className="btn btn-primary">Submit Review</button>
      </form>
    </div>
  );
};

export default Review;
