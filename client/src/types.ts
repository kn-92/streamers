export type State = {
  loading: boolean;
  error: [];
  data: any;
};

export type FormValues = {
  name: string;
  platform: string;
  description: string;
};

export type StreamerData = {
  __v: number;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  name: string;
  platform: string;
  upVotes?: number;
  downVotes?: number;
};

export type PayloadActionDataStreamer = {
  massage: string;
  streamer: StreamerData;
};

export type StreamerLinkProps = {
  name: string;
  platform: string;
  upVotes?: number;
  downVotes?: number;
  id: string;
};
