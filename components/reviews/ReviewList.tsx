import React from "react";
import reviews from "../../data/reviews.json";
import { Comment, Icon } from "semantic-ui-react";

const Review = ({ name, comment, stars, image }) => {
  return (
    <div className="flex bg-gray-100 p-4 rounded-md mb-4">
      <Comment size="massive" className="flex mr-4">
        <img
          src={image}
          className="flex rounded"
          style={{ width: "60px", height: "60px" }}
        />
        <Comment.Content className="ml-10">
          <Comment.Author as="a" className="font-bold text-black">
            <button>{name}</button>
          </Comment.Author>
          <Comment.Text>{comment}</Comment.Text>
          {Array.from({ length: stars }).map((_, index) => (
            <Icon key={index} name="star" className="link" color="yellow" />
          ))}
        </Comment.Content>
      </Comment>
    </div>
  );
};

const ReviewList = () => {
  return (
    <div>
      <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
            SUS COMENTARIOS
          </p>
        </div>
      </div>
      {reviews.map((review, index) => (
        <Review
          key={index}
          name={review.name}
          comment={review.comment}
          stars={review.stars}
          image={review.image}
        />
      ))}
    </div>
  );
};

export default ReviewList;
