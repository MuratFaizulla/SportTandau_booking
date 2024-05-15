import "./sidebar.scss";
// import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { dispatch: darkModeDispatch } = useContext(DarkModeContext);
  const { dispatch: authDispatch } = useContext(AuthContext);
  
  const handleLogout = () => {
    authDispatch({ type: "LOGOUT" });
  };
  


  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">SportTandau</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          {/* <p className="title">MAIN</p> */}
          {/* <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li> */}
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Пользователь</span>
            </li>
          </Link>
          <Link to="/fields" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Площадки</span>
            </li>
          </Link>
          <Link to="/playgrounds" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Поле</span>
            </li>
          </Link>
          {/* <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li> */}
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Статус</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Уведомления</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Здоровье системы</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Журналы</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Настройки</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Профиль</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span  onClick={handleLogout }>Выйти</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => darkModeDispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => darkModeDispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
