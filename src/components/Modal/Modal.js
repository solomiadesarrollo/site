import { React, Component } from "react";
import Portal from "./Portal";
import "./Modal.css";

class Modal extends Component {
  render() {
    const { children, toggle, active } = this.props;
    return (
      <Portal>
        {active && (
          <div className="modal__wrapper">
            <div className="window">
              <button className="close__modal" onClick={toggle}>
                X
              </button>
              <div>{children}</div>
            </div>
          </div>
        )}
      </Portal>
    );
  }
}

export default Modal;
