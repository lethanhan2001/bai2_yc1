import { Profess } from "../../types";
import Facebook from "../../images/Facebook.png";
import Twitter from "../../images/Twitter (1).png";
import Instagram from "../../images/Instagram.png";
interface ProfessItems {
  item: Profess;
}
const ProfessItem: React.FC<ProfessItems> = ({ item }) => {
  return (
    <>
      <div className="box1">
        <div className="images">
          <img src={item.image} alt="" />
        </div>
        <p>{item.name}</p>
        <h3>{item.username}</h3>
        <span>
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit ut aliquam.
        </span>
        <div className="box_icons">
          <img src={Twitter} alt="" />
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
    </>
  );
};

export default ProfessItem;
