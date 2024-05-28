import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Single = () => {
  const { Id } = useParams(); // Get the dynamic ID from the URL
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/${path}/v1/${Id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [path, Id]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Өңдеу</div>
            <h1 className="title">Ақпарат</h1>
            <div className="item">
              <img
                src={data.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{data.username || data.name || "Name not available"}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.email || "Email not available"}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Телефон:</span>
                  <span className="itemValue">{data.phone || "Phone not available"}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Қала:</span>
                  <span className="itemValue">{data.city || "City not available"}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">{data._id || "ID not available"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title={`${path.charAt(0).toUpperCase() + path.slice(1)} Шығындар (соңғы 6 ай)`} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Соңғы транзакциялар</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
