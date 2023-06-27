import "./Form.scss";

const Form = () => {
  return (
    <form className="form">
      <div className="input">
        <p>Streamer Name</p>
        <input type="text" placeholder="Type Streamer Name" />
      </div>
      <div className="select">
        <p>Streamer Platform</p>
        <select name="" id="">
          <option value="Twitch">Twitch</option>
          <option value="YouTube">YouTube</option>
          <option value="TikTok">TikTok</option>
          <option value="Kick">Kick</option>
          <option value="Rumble">Rumble</option>
        </select>
      </div>
      <div className="streamer-description">
        <textarea name="" id="" placeholder="Describe Streamer"></textarea>
      </div>
    </form>
  );
};

export default Form;
