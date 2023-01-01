import {
  faClock,
  faMicrophone,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./components/Card";
import "./OverView.css";

function OverView() {
  return (
    <div className="over-view">
      <div className="container">
        <div className="row text-center">
          <Card
            icon={faUserGroup}
            title="650 Participants"
            desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"
          />
          <Card
            icon={faClock}
            title="24 Porgrams"
            desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"
          />
          <Card
            icon={faMicrophone}
            title="11 Speakers"
            desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"
          />
        </div>
      </div>
    </div>
  );
}
export default OverView;
