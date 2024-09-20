import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

interface StarRatingProps {
  ratings: number; 
  totalStars?: number; 
}

const Rating: React.FC<StarRatingProps> = ({ ratings, totalStars = 5 }) => {

  const stars = Array.from({ length: totalStars }, (_, index) => {
    const starValue = index + 1;

    if (starValue <= ratings) {
      return <FaStar key={index} className="text-yellow-500" />;
    } else if (starValue - ratings < 1 && starValue - ratings > 0) {
      return <FaStarHalf key={index} className="text-yellow-500" />;
    } else {
      return <AiOutlineStar key={index} className="text-gray-400  " />;
    }
  });

  return <div className="flex text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ">{stars}</div>;
};

export default Rating;
