import { useState } from "react";
import whatsapp from "../../assets/icons/whatsapp_icon.svg";
import "./WaButton.css";

const WaButton = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    console.log(open);
    setOpen(!open);
  };

  return (
    <>
      {open ? (
        <button className="wabutton-container" onClick={handleOpen}>
          <img src={whatsapp} />
        </button>
      ) : (
        <button className="wabutton-container-open">
          <img src={whatsapp} />
          <p>Whatsapp 11 5389-9043</p>
          <button onClick={handleOpen}> X </button>
        </button>
      )}
    </>
  );
};

export default WaButton;
