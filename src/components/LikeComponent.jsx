import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const LikeComponent = ({ onClick }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onClick();
  };

  return (
    <>
      {isLiked ? (
        <AiFillHeart onClick={handleLike} color="blue" />
      ) : (
        <AiOutlineHeart onClick={handleLike} color="blue" />
      )}
    </>
  );
};

export default LikeComponent;
