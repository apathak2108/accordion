import { useEffect, useState } from "react";

const Accordion = ({ title, content, isChecked }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isChecked);
  }, [isChecked]);

  const handleAccordionOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-container">
      <div className="accordion-upper-part">
        <h3>{title}</h3>
        <button onClick={handleAccordionOpen}>
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
      {isOpen && (
        <>
          <hr />
          <div
            className="accordion-inner-part"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </>
      )}
    </div>
  );
};

export default Accordion;
