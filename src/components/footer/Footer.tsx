import "./footer.css";
import Chrev from "../../images/chrev.png";
import TotopBtn from "../../images/ToTop Button.png";
import Facebook from "../../images/facebook-f.png";
import Likedin from "../../images/linkedin-in.png";
import Twitter from "../../images/twitterlogo.png";
import Instagram from "../../images/instagramlogo.png";
import Youtube from "../../images/youtube.png";
import useSize from "../../hooks/useSize";

const Footer = () => {
  const width: number = useSize();
  return (
    <>
      <footer className="footer">
        <div className="footer2">
          <div className={width < 650 ? "footer1_smalltablet" : "footer1"}>
            <div className="main_footer">
              <div
                className={width < 650 ? "leftfooter active" : "leftfooter "}
              >
                <div className="headers">
                  <div className="logo">
                    <div className="mainlogo">
                      <div className="one"></div>
                      <div className="two"></div>
                      <div className="three"></div>
                      <div className="four"></div>
                    </div>
                    <p className="title">Beautice</p>
                  </div>
                  <div className="left_content">
                    <p>
                      <span>Beautice</span> is a Beauty Clinic WordPress Theme.
                    </p>
                    <p>Baker Steet 101, NY, United States</p>.
                    <div className="info">
                      <p className="phone">+521 569 8966.</p>
                      <p>mail@company.com.</p>
                    </div>
                  </div>
                </div>

                <div className="navigation">
                  <div className="box_listnav">
                    <div className="nav1">
                      <p className="pages">Pages</p>
                      <div className="box">
                        <div className="box_item">
                          <img src={Chrev} alt="" />
                          <p>Home</p>
                        </div>
                        <div className="box_item">
                          <img src={Chrev} alt="" />
                          <p>About</p>
                        </div>
                        <div className="box_item">
                          <img src={Chrev} alt="" />
                          <p>Services</p>
                        </div>
                        <div className="box_item">
                          <img src={Chrev} alt="" />
                          <p>Gallery</p>
                        </div>
                        <div className="box_item">
                          <img src={Chrev} alt="" />
                          <p>Team</p>
                        </div>
                      </div>
                    </div>
                    <div className="nav2">
                      <p className="pages">Informations</p>
                      <div className="box">
                        <div className="box_item">
                          <img src={Chrev} alt="" />
                          <p>Terms & conditions</p>
                        </div>
                        <div className="box_item">
                          <img src={Chrev} alt="" />
                          <p>Privacy policy</p>
                        </div>
                        <div className="box_item">
                          <img src={Chrev} alt="" />
                          <p>Blog</p>
                        </div>
                        <div className="box_item">
                          <img src={Chrev} alt="" />
                          <p>Contact</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={width < 600 ? "end_mobile" : "end"}>
                <div className="end_box">
                  <div className="box_icons">
                    <img src={Facebook} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={Likedin} alt="" />
                    <img src={Youtube} alt="" />
                    <img src={Instagram} alt="" />
                  </div>
                  <div className="end_title">
                    <p>© AltDesain Studio 2021 - All right reserved.</p>
                  </div>
                </div>

                <div className="topbtn">
                  <img src={TotopBtn} alt="" />
                </div>
              </div>
            </div>

            <div className="footer3"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
