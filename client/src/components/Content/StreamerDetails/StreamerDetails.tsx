import "./StreamerDetails.scss";

import photo from "../../../images/streamer-photo.jpg";

import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

import { getStreamers } from "../../../redux/api";
import { useAppSelector } from "../../../redux/hooks";
import { StreamerData } from "../../../types";

const StreamerDetails = () => {
  const navigate = useNavigate();
  const handleBackToHomepage = () => {
    navigate("/");
  };
  const { streamerId } = useParams();
  const fetch = useFetch(
    `http://localhost:5000/streamers/${streamerId}`,
    getStreamers
  );

  const { name, description, platform }: StreamerData = useAppSelector(
    (state) => state.streamers.data.streamers
  );
  // console.log(streamerData.name + " from details");
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
          <p>{name}</p>
          <p>{description}</p>
          <p>{platform}</p>
        </div>
      </div>
    </div>
  );
};

export default StreamerDetails;
