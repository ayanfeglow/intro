import React, { useState } from "react";

const StateTwo = () => {
  const [brand, setBrand] = useState("Iphone");
  const [color, setColor] = useState("red");
  const [model, setModel] = useState("12 Pro");

  const [phone, setPhone] = useState({
    color: "green",
    brand: "Iphone",
    model: 13
  });

  const [isVisible, setIsVisible] = useState(true);

  const [visibleColor, setVisibleColor] = useState("red");

  return (
    <>
      <div>
        <h1 style={{ color: "black" }}>
          My {brand} is a {color} {brand} {model}
        </h1>
        <h1 style={{ color: "black" }}>
          My {phone.brand} is a {phone.color} {phone.brand} {phone.model}
        </h1>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "tomato",
        }}
      >
        <button
          style={{
            border: "2px solid #000",
            borderRadius: "5px",
            padding: "7px",
            backgroundColor: "transparent",
            margin: "7px",
          }}
          onClick={() => setIsVisible(true)}
        >
          Show Text
        </button>
        <button
          style={{
            border: "2px solid #000",
            borderRadius: "5px",
            padding: "7px",
            backgroundColor: "transparent",
          }}
          onClick={() => setIsVisible(false)}
        >
          Hide Text
        </button>

        {isVisible && <div>This is the text you can show or hide.</div>}
      </div>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {visibleColor === "red" && (
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "20px",
              flex: 1,
            }}
          >
            <h3>Red</h3>
            <p>
              Red is a strong, attention-grabbing color that symbolizes energy,
              passion, and excitement. It is often associated with intense
              emotions such as love and anger. In design, red can be used to
              draw attention to important elements and create a sense of
              urgency.
            </p>
          </div>
        )}

        {visibleColor === "green" && (
          <div
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "20px",
              flex: 1,
            }}
          >
            <h3>Green</h3>
            <p>
              Green is the color of life, nature, and renewal. It brings
              feelings of freshness and tranquility, making it a calming choice
              for many designs. Associated with growth and harmony, green is
              often used to symbolize health, environment, and balance. From the
              lush leaves of a forest to the fresh grass in spring, green
              represents a new beginning.
            </p>
          </div>
        )}

        {visibleColor === "blue" && (
          <div
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "20px",
              flex: 1,
            }}
          >
            <h3>Blue</h3>
            <p>
              Blue is a peaceful and trustworthy color, often linked to calm
              skies and serene oceans. It conveys stability, reliability, and
              confidence, making it popular in both business branding and
              personal spaces. Blue has a soothing effect on the mind, helping
              people feel relaxed and secure, while also inspiring creativity
              and deep thought.
            </p>
          </div>
        )}
      </div>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button style={{backgroundColor: "red", color: "white", padding: "10px"}} onClick={() => setVisibleColor("red")}
        >
          Show Red
        </button>
        <button style={{backgroundColor: "green", color: "white", padding: "10px"}} onClick={() => setVisibleColor("green")}>         
        Show Green
        </button>
        <button style={{backgroundColor: "blue", color: "white", padding: "10px"}} onClick={() => setVisibleColor("blue")}>
          Show Blue
        </button>
      </div>
    </>
  );
};

export default StateTwo;
