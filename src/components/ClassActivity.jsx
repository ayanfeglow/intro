import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const ClassActivity = () => {
  const catFacts = async () => {
    const response = await axios.get("https://catfact.ninja/facts?limit=5");
    return response.data.data;
  };
  const {
    data: facts,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["facts"],
    queryFn: catFacts
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error occured while loading page...</p>;
  }
  return (
    <>
      <div>
        <button onClick={refetch}>click</button>
        {
          facts.map((fact, index) => (
            <p key={index}>{fact.fact}</p>
          ))
        }
      </div>
    </>
  );
};

export default ClassActivity;