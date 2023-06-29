import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";

const useFetch = (url: string, asyncThunkFn: (url: string) => any) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncThunkFn(url));
  }, [url, dispatch, asyncThunkFn]);
  return dispatch;
};

export default useFetch;
