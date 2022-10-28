import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./routes/AppRoute";

export const GamerApp = () => {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
};
