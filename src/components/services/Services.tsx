import "./services.css";
import { servicesData } from "../../data/services";
import { Services } from "../../types";
import ServiceItem from "./ServiceItem";
import useSize from "../../hooks/useSize";
const Services = () => {
  const width: number = useSize();

  return (
    <>
      <div className="text">
        <div className="text1"></div>
        <div className="text2"></div>
        <div className="text3"></div>
      </div>

      <div className="services">
        <h6>Main Services</h6>
        <h1>
          Learn services to focus <br /> on your beauty
        </h1>
        <p>
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient <br />
          amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
        </p>

        <div className={width < 1250 ? `box_list active` : `box_list`}>
          {servicesData.map((item: Services) => (
            <ServiceItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
