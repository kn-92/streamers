import { useEffect, useRef, useCallback } from "react";
import { useAppSelector } from "../redux/hooks";
import "./ErrorMessageComponent.scss";

const ErrorMessageComponent = () => {
  const error: any = useAppSelector((state) => state.streamers.error);
  const classes = error[0]
    ? "error-message-container"
    : "error-message-container-notVisible";

  let timeout = useRef<NodeJS.Timeout | null>(null);

  const redirectToHomePage = useCallback(() => {
    if (error[0]) {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }, [error]);

  useEffect(() => {
    redirectToHomePage();

    return clearTimeout(timeout.current as NodeJS.Timeout);
  }, [error, redirectToHomePage]);
  return <div className={classes}>{error && error[0]?.message}</div>;
};

export default ErrorMessageComponent;
