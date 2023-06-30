import "./Content.scss";
import Form from "./Form/Form";
import StreamersContainer from "./StreamersContainer/StreamersContainer";

const Content = () => {
  return (
    <div className="content-container">
      <Form />
      <StreamersContainer />
    </div>
  );
};

export default Content;
