import axios from "axios";
import React, { useState, useEffect } from "react";

const LoadingState = () => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCatfacts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://catfact.ninja/facts");
      setFacts(res.data.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  console.log(facts);
  useEffect(() => {
    fetchCatfacts();
  }, []);
  return (
    <>
      <div>
        {error && <p style={{color : "red"}}>Error loading from endpoint...</p>}
        {loading ? (
          <p>loading...</p>
        ) : (
          <div className="">
            {facts.map((fact, idx) => {
              return (
                <div key={idx}>
                  <p>{fact.fact}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default LoadingState;
