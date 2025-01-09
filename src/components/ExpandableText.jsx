import { useState } from "react";

const ExpandableText = ({ children, maxChars }) => {
  const [showFullText, setShowFullText] = useState(false);

  const display = showFullText ? children : children.substring(0, maxChars);

  return (
    <>
      {display}....
      <button onClick={() => setShowFullText(!showFullText)}>
        {showFullText ? "Less" : "More"}
      </button>
    </>
  );
};

export default ExpandableText;
