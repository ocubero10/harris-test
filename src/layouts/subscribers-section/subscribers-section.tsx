import { SubscriberData, SubscriberModel } from "../../models/subscriber";
import SubscriberCard from "../../components/subscriber-card/subscriber-card";
import "./subscribers-section.css";

interface SubscribersSectionProps {
  data: SubscriberData;
  loading: boolean;
}

const SubscribersSection = ({ data, loading }: SubscribersSectionProps) => {
  if (loading)
    return (
      <div className="loading">
        <span>Loading...</span>
      </div>
    );
  if (!data.totalResults || !data.subscribers.length)
    return (
      <div className="no-results">
        <span>No results. Try a different search.</span>
      </div>
    );

  return (
    <div className="subscriber-wrapper">
      {data?.subscribers?.map((subscriber: SubscriberModel) => {
        return <SubscriberCard key={subscriber.SubscriberId} {...subscriber} />;
      })}
    </div>
  );
};

export default SubscribersSection;
