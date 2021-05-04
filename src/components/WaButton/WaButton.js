import { useState } from "react";
import whatsapp from "../../assets/icons/whatsapp_icon.svg";
import close from "../../assets/icons/close.png";
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
        <div className="wabutton-container-open">
          <a
            href="https://web.whatsapp.com/send?phone=5491153862223"
            target="_blank"
            className="wplink"
          >
            <img src={whatsapp} />
            <p>WHATSAPP +54 9 1153899043</p>
          </a>
          <button onClick={handleOpen} className="close-button-wap">
            <img src={close} className="close-img" />
          </button>
        </div>
      )}
    </>
  );
};

export default WaButton;
