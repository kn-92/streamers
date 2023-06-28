import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
// import { getStreamers } from "../redux/api";

const useFetch = (url: string, asyncThunkFn: any) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncThunkFn(url));
  }, [url, dispatch, asyncThunkFn]);
  return dispatch;
};

export default useFetch;
