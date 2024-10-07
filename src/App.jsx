import { useState } from "react";
import "./App.css";
import Accordion from "./component/accordion";
import data from "./data";

const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleAllAccordions = () => {
    setIsChecked(!isChecked);
  };

  const htmlContent1 = `
    <p>This is <strong>HTML</strong> content with a <a href="#">link</a>.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  `;

  const htmlContent2 = `
    <p>Another block of HTML content with <em>emphasized</em> text.</p>
    <div><img src="https://via.placeholder.com/150" alt="Placeholder Image" /></div>
  `;

  return (
    <div className="App">
      <span>
        <label>
          <input type="checkbox" onChange={handleAllAccordions} />
          {isChecked ? "Close All" : "Open All"}
        </label>
      </span>
      {[data[0], data[1]].map((card, index) => (
        <Accordion
          key={index}
          title={card.title}
          content={htmlContent2}
          isChecked={isChecked}
        />
      ))}
    </div>
  );
};

export default App;
