import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FoodAndBeverage from "./page/FoodAndBeverage";
import NatureAndWildlife from "./page/NatureAndWildlife";
import CultureAndHeritage from "./page/CultureAndHeritage"
import Accommodations from "./page/Accommodations";
import Beaches from "./page/Beaches";
import FarmAndAnimals from "./page/FarmAndAnimals";
import Themeparks from "./page/Themeparks";
import Transportations from "./page/Transportations";

export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/FoodAndBeverage", element: <FoodAndBeverage/>},
    {path: "/natureandwildlife", element: <NatureAndWildlife/>},
    {path: "/cultureandheritage", element: <CultureAndHeritage/>},
    {path: "/accommodations", element: <Accommodations/>},
    {path: "/beaches", element: <Beaches/>},
    {path: "/farmandanimals", element: <FarmAndAnimals/>},
    {path: "/themeparks", element: <Themeparks/>},
    {path: "/transportations", element: <Transportations/>}
]);