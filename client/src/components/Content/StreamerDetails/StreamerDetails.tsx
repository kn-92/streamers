import "./StreamerDetails.scss";

import photo from "../../../images/streamer-photo.jpg";

import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

import { getStreamers } from "../../../redux/api";
import { useAppSelector } from "../../../redux/hooks";
import { StreamerData } from "../../../types";

import MoonLoader from "react-spinners/MoonLoader";

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
  const loading = useAppSelector((state) => state.streamers.loading);

  const { name, description, platform }: StreamerData = useAppSelector(
    (state) => state.streamers.data.streamers
  );

  if (loading)
    return (
      <div className="spinner-container">
        <MoonLoader color="#d736af" />
      </div>
    );

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
