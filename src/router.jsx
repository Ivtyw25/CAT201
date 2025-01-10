import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { beaches } from "./page";
import { FandB } from "./page";
import { NatureandWildlife } from "./page";
import { CultureandHeritage } from "./page";
import { accomodation } from "./page";
import { FarmandAnimals } from "./page";
import { themepark } from "./page";
import { transportation } from "./page";
import SubPage from "./page/SubPage";

export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/FoodAndBeverage", element: <SubPage item={FandB}/>},
    {path: "/natureandwildlife", element: <SubPage item={NatureandWildlife}/> },
    {path: "/cultureandheritage", element: <SubPage item={CultureandHeritage}/>},
    {path: "/accommodations", element: <SubPage item={accomodation}/>},
    {path: "/beaches", element: <SubPage item={beaches}/>},
    {path: "/farmandanimals", element: <SubPage item={FarmandAnimals}/>},
    {path: "/themeparks", element:<SubPage item={themepark}/>},
    {path: "/transportations", element: <SubPage item={transportation}/>}
]);