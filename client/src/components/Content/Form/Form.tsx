import { useForm, SubmitHandler } from "react-hook-form";
import "./Form.scss";
import { useAppDispatch } from "../../../redux/hooks";
import { postStreamer } from "../../../redux/api";
import { FormValues } from "../../../types";

const Form = () => {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { name: "", platform: "Twitch", description: "" },
  });

  const submitForm: SubmitHandler<FormValues> = (data: FormValues) => {
    dispatch(
      postStreamer({
        name: data.name,
        platform: data.platform,
        description: data.description,
      })
    );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="form">
      <div className="input">
        <p>Streamer Name</p>
        <input
          {...register("name", {
            required: "Please type streamer name.",
            minLength: {
              value: 3,
              message: "Name has to be at least 3 letters long.",
            },
          })}
          type="text"
          placeholder="Type Streamer Name"
        />
        {errors.name?.message && (
          <p className="form-error-message">{errors.name?.message as string}</p>
        )}
      </div>
      <div className="select">
        <p>Streamer Platform</p>
        <select
          {...register("platform", {
            required: "Please choose a streamer platform.",
          })}
        >
          <option value="Twitch">Twitch</option>
          <option value="YouTube">YouTube</option>
          <option value="TikTok">TikTok</option>
          <option value="Kick">Kick</option>
          <option value="Rumble">Rumble</option>
        </select>
        {errors.platform?.message && (
          <p className="form-error-message">
            {errors.platform?.message as string}
          </p>
        )}
      </div>
      <div className="streamer-description">
        <textarea
          {...register("description", {
            required: "Please type a description.",
            minLength: {
              value: 3,
              message: "Description has to be at least 3 letters long.",
            },
          })}
          placeholder="Describe Streamer"
        />
        {errors.description?.message && (
          <p className="form-error-message">
            {errors.description?.message as string}
          </p>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
