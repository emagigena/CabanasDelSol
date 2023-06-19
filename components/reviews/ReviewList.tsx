import React from "react";
import reviews from "../../data/reviews.json";
import { Card, Icon } from "semantic-ui-react";
import logoGoogle from "../../public/google.png";
import Image from "next/image";

const Review = ({ name, comment, stars, image }) => {
  return (
    <div className="p-4 rounded-md mb-4">
      <Card style={{width: "320px", height: "270px" }}>
        <Card.Content>
          <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
            <img
              src={image}
              width={50}
              height={50}
              className="rounded"
              alt={""}
            />
            <Card.Header className="font-bold text-black flex items-center ml-4">
              <button>{name}</button>
              <Icon style={{ marginLeft: "20px" }}>
                <Image src={logoGoogle} width={24} height={24} alt={""} />
              </Icon>
            </Card.Header>
          </div>
          <Card.Description style={{ maxHeight: "100px", overflow: "auto" }}>
            {comment}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {Array.from({ length: stars }).map((_, index) => (
            <Icon key={index} name="star" className="link" color="yellow" />
          ))}
        </Card.Content>
      </Card>
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
      <div className="flex flex-wrap justify-center">
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
    </div>
  );
};

export default ReviewList;
