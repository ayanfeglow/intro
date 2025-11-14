import data from "../consumable/birthday";
import { useState } from "react";
const Birthday = () => {
  const [people, setPeople] = useState(data);
  console.log(data);
  const clearAll = () => {
    setPeople([]);
  };
  const fetchAll = () => {
    setPeople(data);
  };
  const removePerson = (id) => {
    const response = people.filter((person) => person.id !== id);
    setPeople(response);
  };
  return (
    <>
      <div>
        {people.map((person, index) => {
          return (
            <div key={index}>
              <img
                src={person.imageUrl}
                alt={`${person.name}'s image`}
                width={300}
              />
              <h1>{person.name}</h1>
              <p>{person.age} years old</p>
              <button
                onClick={() => removePerson(person.id)}
                style={{
                  border: "1px #000 solid",
                  padding: "5px",
                  fontSize: "12px",
                  borderRadius: "5px",
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
        <div className="birthday-list">
          <button
            onClick={clearAll}
            style={{
              border: "none",
              padding: "8px",
              fontSize: "17px",
              color: "white",
              backgroundColor: "green",
              borderRadius: "3px",
            }}
          >
            clear all
          </button>
          <button
            onClick={fetchAll}
            style={{
              border: "none",
              padding: "8px",
              fontSize: "17px",
              color: "white",
              backgroundColor: "red",
              borderRadius: "3px",
            }}
          >
        fetch all
          </button>
        </div>
      </div>
    </>
  );
};

export default Birthday;