import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import PageNotFound from "../sherd/pageNotFound/PageNotFound";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<PageNotFound></PageNotFound>,
      children:[
        {
            
        }
      ]
    },
  ]);