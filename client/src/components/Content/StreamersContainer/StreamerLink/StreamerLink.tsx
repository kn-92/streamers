import "./StreamerLink.scss";
import photo from "../../../../images/streamer-photo.jpg";

import { useNavigate } from "react-router-dom";

const StreamerLink = () => {
  const navigate = useNavigate();

  const handleNavigateToDetails = () => {
    navigate("/details");
  };

  return (
    <div className="streamerlink-container" onClick={handleNavigateToDetails}>
      <img className="image" src={photo} alt="streamer-name" />
      <div className="details">
        <div className="name">Name: Coco</div>
        <div className="platform">Where to watch: YouTube</div>
        <div className="votes">
          <div className="upvotes">Up: 0</div>
          <div className="downvotes">Down: 0</div>
        </div>
      </div>
    </div>
  );
};

export default StreamerLink;
