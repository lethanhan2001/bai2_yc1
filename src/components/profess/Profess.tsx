import "./profess.css";

import { professData } from "../../data/profess";
import { Profess } from "../../types";
import ProfessItem from "./ProfessItem";
const Profess: React.FC = () => {
  return (
    <>
      <div className="profess">
        <h6>Professional Teams</h6>
        <h1>The Professional expert</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </p>

        <div className="box_list">
          {professData.map((item: Profess) => (
            <ProfessItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Profess;
