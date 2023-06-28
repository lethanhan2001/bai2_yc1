import { Services } from "../../types";
import "./services.css";
interface ServicesItem {
  item: Services;
}

const ServiceItem: React.FC<ServicesItem> = ({ item }) => {
  return (
    <>
      <div className="box1">
        <div className="image">
          <img src={item.image} alt="" />
        </div>
        <h3>{item.name}</h3>
        <span>{item.title}</span>
      </div>
    </>
  );
};

export default ServiceItem;
