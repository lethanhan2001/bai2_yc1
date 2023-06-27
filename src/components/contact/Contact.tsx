import "./contact.css";
import ContactBg from "../../images/Contact Animations.png";
import useSize from "../../hooks/useSize";
const Contact = () => {
  const width: number = useSize();
  return (
    <>
      <div className="contact">
        <div className={width < 880 ? `contact_box_mobile` : `contact_box`}>
          <div className="contact_images">
            <img src={ContactBg} alt="" />
          </div>
          <div className="contact_content">
            <h6>Contact Us</h6>
            <h1>Send your inquiry to our expert team</h1>
            <p>Lorem ipsum dolor sit amet nulla turapis tellus.</p>
            <div className="box_input">
              <div className="row_input">
                <input type="text" placeholder="First name" />
                <input className="last" type="text" placeholder="Last name" />
              </div>
              <div className="item_input">
                <input type="email" placeholder="Email address" />
                <input type="text" placeholder="Subject message" />
                <textarea
                  className="message"
                  typeof="text"
                  placeholder="Your inquiry here"
                ></textarea>
              </div>
            </div>

            <button>Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
