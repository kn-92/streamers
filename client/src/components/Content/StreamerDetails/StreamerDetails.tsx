import "./StreamerDetails.scss";

import photo from "../../../images/streamer-photo.jpg";

import { useAppSelector } from "../../../redux/hooks";

import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

import { getStreamers } from "../../../redux/api";
import { StreamerData } from "../../../types";

import MoonLoader from "react-spinners/MoonLoader";
import ErrorMessageComponent from "../../../ErrorMessageComponent/ErrorMessageComponent";

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

  const loading = useAppSelector((state) => state.streamers?.loading);

  const streamer: StreamerData = useAppSelector(
    (state) => state.streamers.data.streamers
  );

  const name = streamer && streamer.name;
  const platform = streamer && streamer.platform;
  const description = streamer && streamer.description;

  if (loading)
    return (
      <div className="spinner-container">
        <MoonLoader color="#d736af" />
      </div>
    );

  return (
    <div className="details-container">
      <ErrorMessageComponent />
      <div onClick={handleBackToHomepage} className="back">
        {"<-- Back to homepage"}
      </div>
      <div className="details-box">
        <div className="image-box">
          <img className="image" src={photo} alt="streamer-name" />
        </div>
        <div className="info-box">
          <p className="name-desc">{name}</p>
          <p className="platform-desc">{platform}</p>
          <p className="description-desc">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StreamerDetails;
