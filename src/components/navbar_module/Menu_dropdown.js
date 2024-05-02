import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Menu_dropdown = () => {
  // states
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");

  //refs
  const dropdownRef = useRef(null);
  const toggleDorpdownMenu = () => {
    setIsOpen(!isOpen);
  };
  // useEffect(() => {
  //   let handler = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setOpen(false);
  //     } else {
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // }, []);
  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="select">
        <div className="selected">Home</div>
        <div className="caret" onClick={toggleDorpdownMenu}>
          <FontAwesomeIcon icon={faAngleDown} className="caret btn" />
        </div>
      </div>
      {isOpen && (
        <section className="dropdown-menu">
          <a className="active">Home</a>
          <a>Popular</a>
        </section>
      )}
    </div>
  );
};

export default Menu_dropdown;
