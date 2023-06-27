import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import StreamerDetails from "./components/Content/StreamerDetails/StreamerDetails";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/" element={<App />} />
      <Route path="/details" element={<StreamerDetails />} />
    </>
  )
);
