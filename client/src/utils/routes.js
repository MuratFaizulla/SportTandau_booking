// import { About } from "../pages/about/AboutPage";
import Area from "../pages/area/AreaPage";
import { Home } from "../pages/home/HomePage";
import Reservation from "../components/reservation/Reservation"
import  NotFoundPage from '../pages/NotFoundPage';
import {
    ABOUT_PAGE_ROUTE,
    AREA_PAGE_ROUTE,
    HOME_PAGE_ROUTE,
    RESERVATION_PAGE_ROUTE,
    LOGIN_PAGE_ROUTE,
    REGISTER_PAGE_ROUTE,
    USER_PAGE_ROUTE,
    MANAGER_PAGE_ROUTE,  
} from "./consts";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import  Profile  from "../pages/profile/Profile";
import About from "../pages/about/AboutPage";
import Manager from "../pages/manager/manager";


export const routes = [
    {
        path: HOME_PAGE_ROUTE,
        element: Home,
    },
    {
        path: AREA_PAGE_ROUTE,
        element: Area,
    },
    {
        path: ABOUT_PAGE_ROUTE,
        element: About,
    },
    {
        path: RESERVATION_PAGE_ROUTE,
        element: Reservation,
    },
    {
        path: LOGIN_PAGE_ROUTE,
        element:Login ,
    },
    {
        path: REGISTER_PAGE_ROUTE,
        element:Register,
    },
    {
        path: USER_PAGE_ROUTE,
        element:Profile,
    },
    {
        path: MANAGER_PAGE_ROUTE,
        element:Manager,
    },
    {
        path: "*",
        element: NotFoundPage,
      },

];
