import "./StreamerLink.scss";
import photo from "../../../../images/streamer-photo.jpg";

import { useNavigate } from "react-router-dom";

import { StreamerLinkProps } from "../../../../types";

const StreamerLink = ({
  name,
  platform,
  upVotes,
  downVotes,
  id,
}: StreamerLinkProps) => {
  const navigate = useNavigate();

  const handleNavigateToDetails = () => {
    navigate(`details/${id}`);
  };

  return (
    <div className="streamerlink-container" onClick={handleNavigateToDetails}>
      <img className="image" src={photo} alt={name} />
      <div className="details">
        <div className="name">{name}</div>
        <div className="platform">{platform}</div>
        <div className="votes">
          <div className="upvotes">{`Up: ${upVotes}`}</div>
          <div className="downvotes">{`Down: ${downVotes}`}</div>
        </div>
      </div>
    </div>
  );
};

export default StreamerLink;
