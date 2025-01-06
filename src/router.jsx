import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FoodAndBeverage from "./page/FoodAndBeverage";

export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/foodandbeverage", element: <FoodAndBeverage/>},
    ]);