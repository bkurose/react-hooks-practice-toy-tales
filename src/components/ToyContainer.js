import React, { useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyList, setToyList }) {
  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(toys => setToyList(toys))
  }, [setToyList])

  return (
    <div id="toy-collection">{toyList.map((toy) => <ToyCard toyList={toyList} setToyList={setToyList} key={toy.id} toy={toy} image={toy.image} name={toy.name} likes={toy.likes} />)}</div>
  );
}

export default ToyContainer;
