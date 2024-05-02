import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle, faEye } from "@fortawesome/free-regular-svg-icons";
import CustomizedSwitches from "../buttons/SwitchButton";
import { useAuth } from "../../context/AuthProvider";

const Profile_dropdown = () => {
  // context
  const { logOut } = useAuth();

  // toggle
  const [open, setOpen] = useState(false);

  // ref
  let menuRef = useRef(null);

  useEffect(() => {
    let handler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      } else {
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <div className="dropdown" ref={menuRef}>
      <div className="avatar-container">
        <FontAwesomeIcon icon={faUserCircle} />
      </div>
      <FontAwesomeIcon
        icon={faAngleDown}
        className="caret btn"
        onClick={() => {
          setOpen(!open);
        }}
      />

      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        {/* <div className="start-div">
          <p>
            <FontAwesomeIcon icon={faUserCircle} />
            <p>My Stuff</p>
          </p>
          <ul>
            <li>
              <span>Online Status</span>
              <CustomizedSwitches />
            </li>
            <li>Profile</li>
            <li>Style Avatar</li>
            <li>User Setting</li>
          </ul>
        </div>
        <div className="mid-div">
          <p>
            <FontAwesomeIcon icon={faEye} />
            <p>View Options</p>
          </p>
          <ul>
            <li>
              <span>Dark Mode</span>
              <CustomizedSwitches />
            </li>
          </ul>
        </div>
        <div className="end-div">
          <ol>
            <li>
              <FontAwesomeIcon icon={faUserGroup} className="icon"/>
              <span>Create a Community</span>
            </li>
            <li onClick={()=>{
              logOut();
            }}>Sign Out</li>
          </ol>
        </div> */}
        <section className="section section1">
          <div className="header-div">
            <span>
              {" "}
              <FontAwesomeIcon icon={faUserCircle} className="icon"/>
            </span>
            <p>My Stuff</p>
          </div>
          <div className="item-div">
            <span></span>
            <p className="toggle-p">
              <span>Online Status</span>
              <CustomizedSwitches />
            </p>
          </div>
          <div className="item-div">
            <span></span>
            <p>Profile</p>
          </div>
          <div className="item-div">
            <span></span>
            <p>Style Avatar</p>
          </div>
          <div className="item-div">
            <span></span>
            <p>User Settings</p>
          </div>
        </section>
        <hr></hr>
        <section className="section section2">
          <div className="header-div">
            <span>
              {" "}
              <FontAwesomeIcon icon={faEye} className="icon"/>
            </span>
            <p>View Options</p>
          </div>
          <div className="item-div">
            <span></span>
            <p>
              <span>Online Status</span>
              <CustomizedSwitches />
            </p>
          </div>
        </section>
        <hr></hr>
        <section className="section section3">
          <div className="item-div">
            <span>
              <FontAwesomeIcon icon={faUserGroup} className="icon" />
            </span>

            <p>Create a Community</p>
          </div>{" "}
          <div className="item-div">
            <span></span>
            <p onClick={()=>{logOut()}}>Sign Out</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile_dropdown;
