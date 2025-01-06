import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FoodAndBeverage from "./page/FoodAndBeverage";
import NatureAndWildlife from "./page/NatureAndWildlife";
import CultureAndHeritage from "./page/CultureAndHeritage"

export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/foodandbeverage", element: <FoodAndBeverage/>},
    {path: "/natureandwildlife", element: <NatureAndWildlife/>},
    {path: "/cultureandheritage", element: <CultureAndHeritage/>}
]);