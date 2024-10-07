import { useState } from "react";
import "./App.css";
import Accordion from "./component/accordion";
import data from "./data";

const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleAllAccordions = () => {
    setIsChecked(!isChecked);
  };
  
  return (
    <div className="App">
      <span>
        <label>
          <input type="checkbox" onChange={handleAllAccordions} />
          {isChecked ? "Close All" : "Open All"}
        </label>
      </span>
      {data.map((card, index) => (
        <Accordion
          key={index}
          title={card.title}
          content={card.content}
          isChecked={isChecked}
        />
      ))}
    </div>
  );
};

export default App;
