import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FoodAndBeverage from "./sections/page/FoodAndBeverage";

export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/foodandbeverage", element: <FoodAndBeverage/>},
    ]);