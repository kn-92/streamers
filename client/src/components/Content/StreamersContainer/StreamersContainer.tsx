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

  return (
    <div className="streamers-container">
      {streamersData?.map((streamer) => (
        <StreamerLink
          name={streamer.name}
          platform={streamer.platform}
          upVotes={streamer.upVotes}
          downVotes={streamer.downVotes}
          key={streamer._id}
        />
      ))}
    </div>
  );
};

export default StreamersContainer;
