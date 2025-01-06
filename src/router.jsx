import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FoodAndBeverage from "./page/FoodAndBeverage";
import NatureAndWildlife from "./page/NatureAndWildlife";
import CultureAndHeritage from "./page/CultureAndHeritage"
import Accommodations from "./page/Accommodations";
import Beaches from "./page/Beaches";
import FarmAndAnimals from "./page/FarmAndAnimals";

export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/foodandbeverage", element: <FoodAndBeverage/>},
    {path: "/natureandwildlife", element: <NatureAndWildlife/>},
    {path: "/cultureandheritage", element: <CultureAndHeritage/>},
    {path: "/accommodations", element: <Accommodations/>},
    {path: "/beaches", element: <Beaches/>},
    {path: "/farmandanimals", element: <FarmAndAnimals/>}
]);