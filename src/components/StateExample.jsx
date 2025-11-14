import { useState } from "react";

const StateExample = () => {
  const [content, setContent] = useState("red");
  const displayedContent = [
    {
      color: "yellow",
      text: "Yellow is a peaceful and trustworthy color",
    },
    {
      color: "red",
      text: "Red is a strong, attention-grabbing color that symbolizes energy,",
    },
    {
      color: "green",
      text: "Green is the color of life, nature, and renewal.",
    },
  ];
  const handleYellow = () =>  setContent("yellow");
  const handleRed = () =>  setContent("red");
  const handleGreen = () => setContent("green");
  

  const selected = displayedContent.find((item) => item.color === content);
  return (
    <>
      <button onClick={handleYellow}>yellow</button>
      <button onClick={handleRed}>red</button>
      <button onClick={handleGreen}>Green</button>
      <h2 style={{ color: content }}>{content.toUpperCase()}</h2>
      {selected ? <p style={{color:content}}>{selected?.text}</p> : <p>You have not selected any text</p>}
    </>
  );
};

export default StateExample;
