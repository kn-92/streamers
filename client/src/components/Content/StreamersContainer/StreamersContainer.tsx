import StreamerLink from "./StreamerLink/StreamerLink";
import "./StreamersContainer.scss";

import { useAppSelector } from "../../../redux/hooks";
import { getStreamers } from "../../../redux/api";
import useFetch from "../../../hooks/useFetch";
import { StreamerData } from "../../../types";
import { useEffect } from "react";

const StreamersContainer = () => {
  const streamersData: StreamerData[] = useAppSelector(
    (state) => state.streamers.data.streamers
  );
  console.log(streamersData);
  const fetch = useFetch(`http://localhost:5000/streamers`, getStreamers);
  let reversedArray;
  if (streamersData && streamersData.length > 1) {
    reversedArray = [...streamersData].reverse();
  }
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
