import axios from "axios";
import { useState, useEffect } from "react";
import { TennisIndex } from "./TennisIndex";

export function Content() {

  const [rackets, setRackets] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const handleIndexRackets = () => {
    console.log("handleIndexRackets");
    axios.get("http://localhost:3000/rackets.json").then(response => {
      console.log(response.data);
      setRackets(response.data);
    });
  };
  useEffect(handleIndexRackets, []);
  const handleHideRacket = () => {
    setIsPostsShowVisible(false);
  };

  return (
    <div>
      <TennisIndex rackets = {rackets} onSelectRacket={handleHideRacket}/>
      <modal>

      </modal>
    </div>
  );
}