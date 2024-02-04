import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { SubscriberModel } from "../../models/subscriber";
import "./subscriber-card.css";

const SubscriberCard = ({ Name, Email, SubscriberId }: SubscriberModel) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{Name}</h2>
        <span className="email">{Email}</span>
        <div className="subscriberId">
          <FontAwesomeIcon icon={faAddressCard} />
          <span>{SubscriberId}</span>
        </div>
      </div>
    </div>
  );
};

export default SubscriberCard;
