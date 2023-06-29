import "./StreamerLink.scss";
import photo from "../../../../images/streamer-photo.jpg";

import { useNavigate } from "react-router-dom";

import { StreamerLinkProps } from "../../../../types";

import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { voteAStreamer } from "../../../../redux/api";

const StreamerLink = ({
  name,
  platform,
  upVotes,
  downVotes,
  id,
}: StreamerLinkProps) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleNavigateToDetails = () => {
    navigate(`details/${id}`);
  };

  const handleVote = (url: string, e: React.SyntheticEvent) => {
    e.stopPropagation();
    dispatch(voteAStreamer(url));
  };

  return (
    <div className="streamerlink-container" onClick={handleNavigateToDetails}>
      <img className="image" src={photo} alt={name} />
      <div className="details">
        <div className="name">{name}</div>
        <div className="platform">{platform}</div>
        <div className="votes">
          <div
            className="upvotes"
            onClick={(e) =>
              handleVote(
                `http://localhost:5000/streamers/${id}/vote/?action=up`,
                e
              )
            }
          >{`Up: ${upVotes}`}</div>
          <div
            className="downvotes"
            onClick={(e) =>
              handleVote(
                `http://localhost:5000/streamers/${id}/vote/?action=down`,
                e
              )
            }
          >{`Down: ${downVotes}`}</div>
        </div>
      </div>
    </div>
  );
};

export default StreamerLink;
