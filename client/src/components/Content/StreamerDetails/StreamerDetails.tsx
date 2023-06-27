import "./StreamerDetails.scss";

import photo from "../../../images/streamer-photo.jpg";

import { useNavigate } from "react-router-dom";

const StreamerDetails = () => {
  const navigate = useNavigate();
  const handleBackToHomepage = () => {
    navigate("/");
  };

  return (
    <div className="details-container">
      <div onClick={handleBackToHomepage} className="back">
        {" "}
        --Back to homepage
      </div>
      <div className="details-box">
        <div className="image-box">
          <img className="image" src={photo} alt="streamer-name" />
        </div>
        <div className="info-box">
          <p>Coco</p>
          <p>Best streamer in the world!!!!!!</p>
          <p>YouTube</p>
        </div>
      </div>
    </div>
  );
};

export default StreamerDetails;
