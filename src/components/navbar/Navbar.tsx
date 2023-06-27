import "./navbar.css";
import Image from "../../images/animationheader.png";
import useSize from "../../hooks/useSize";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const width: number = useSize();
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div className="menuheader">
        <div className={width <= 1250 ? `headers active` : `headers`}>
          <div className="logo">
            <div className="mainlogo">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
              <div className="four"></div>
            </div>
            <p className="title">Beautice</p>
          </div>

          {width > 1250 ? (
            <nav>
              <ul>
                <li>Home+</li>
                <li>About</li>
                <li>Service</li>
                <li>Gallery</li>
                <li>Blog</li>
                <li>
                  <button>Contact</button>
                </li>
              </ul>
            </nav>
          ) : (
            <div onClick={() => setShow(!show)} className="bars">
              <FaBars />
            </div>
          )}

          {width <= 1250 && (
            <div
              className={show ? `dropdown` : `dropdown active`}
              id="menutablet"
            >
              <div className="menutablet">
                <ul>
                  <li>Home+</li>
                  <li>About</li>
                  <li>Service</li>
                  <li>Gallery</li>
                  <li>Blog</li>
                  <li>
                    <button>Contact</button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div
          className={
            width <= 1250 && width > 651
              ? `content active`
              : width < 650
              ? `content_smalltablet`
              : `content`
          }
        >
          <div className="content_header">
            <h1>Clinic & beauty consultant</h1>
            <p>
              It is a long established fact that a reader will be <br />
              by the readable content of a page.
            </p>
            <button>More Details</button>
          </div>

          <div className="content_image">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
