import "./Content.scss";
import Form from "./Form/Form";
import StreamersContainer from "./StreamersContainer/StreamersContainer";
import { Helmet } from "react-helmet";

const Content = () => {
  return (
    <div className="content-container">
      <Helmet>
        <title>Streamers App</title>
      </Helmet>
      <Form />
      <StreamersContainer />
    </div>
  );
};

export default Content;
