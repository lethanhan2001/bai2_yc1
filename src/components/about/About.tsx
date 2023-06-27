import "./about.css";
import PlayBtn from "../../images/Play_button.png";
import HomeBg from "../../images/home.png";
import useSize from "../../hooks/useSize";
const About = () => {
  const width: number = useSize();
  return (
    <>
      <div className={width <= 700 ? `about active` : `about`}>
        <div className="about_content">
          <h6>About Us</h6>
          <h1>We are the best beauty clinic</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat. Id dui erat sed quam tellus in purus.
            Pellentesque congue fringilla cras tellus enim.
          </p>

          <div className="watch">
            <button>Learn More</button>
            <div className="watchbtn">
              <img src={PlayBtn} alt="" />
              <p>Watch Video</p>
            </div>
          </div>
        </div>

        <div className="about_image">
          <img src={HomeBg} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
