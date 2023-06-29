import StreamerLink from "./StreamerLink/StreamerLink";
import "./StreamersContainer.scss";

import MoonLoader from "react-spinners/MoonLoader";

import { useAppSelector } from "../../../redux/hooks";
import { getStreamers } from "../../../redux/api";
import useFetch from "../../../hooks/useFetch";
import { StreamerData } from "../../../types";

const StreamersContainer = () => {
  const streamersData: StreamerData[] = useAppSelector(
    (state) => state.streamers.data.streamers
  );
  const loading = useAppSelector((state) => state.streamers.loading);
  const fetch = useFetch(`http://localhost:5000/streamers`, getStreamers);
  let reversedArray;
  if (streamersData && streamersData.length > 1) {
    reversedArray = [...streamersData].reverse();
  }
  if (loading)
    return (
      <div className="spinner-container">
        <MoonLoader color="#d736af" />
      </div>
    );
  return (
    <div className="streamers-container">
      {Array.isArray(reversedArray) &&
        reversedArray?.map((streamer) => (
          <StreamerLink
            name={streamer.name}
            platform={streamer.platform}
            upVotes={streamer.upVotes}
            downVotes={streamer.downVotes}
            id={streamer._id}
            key={streamer._id}
          />
        ))}
    </div>
  );
};

export default StreamersContainer;
