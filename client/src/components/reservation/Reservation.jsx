import { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Loader from "../../components/Loader.jsx";
import Error from "../../components/Error.jsx";
import StarRating from "../StarRatingSystem.jsx";
import Comments from "./ArticlePage/Comments.jsx";
import "./reservation.css";
import { AuthContext } from "../../context/AuthContext";

// import Calendar from "../reserve/Calendar.jsx";
import useFetch from "../../hooks/useFetch.js";
import DateAndTimeSelector from "../reserve/reserve.jsx";

function Reservation() {
  const params = useParams();
  const [post, setPost] = useState({});

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const { data, loading, error } = useFetch(`/fields/find/${id}`);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }
  if (data && data.playgrounds && Array.isArray(data.playgrounds)) {
    // const playgrounds = data.playgrounds;
    // Теперь playgrounds содержит массив с данными о площадках
    // console.log(playgrounds);
  } else {
    // Обработка случаев, когда данные не загружены или не содержат ожидаемую структуру
    // console.log('Данные о площадках недоступны');
  }

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="name"> {data.name}</div>
      <div className="adress">{data.address}</div>
      <div className="photos">
        {data.photos &&
          data.photos.map((photo, index) => (
            <img key={index} className="Field-img" src={photo} alt="Arena" />
          ))}
      </div>

      <div className="backend">
        <div className="about">
          <div className="title">
            <p>О поле</p>
            <p>
              <StarRating />
            </p>
          </div>

          <div className="size">
            <p>Размер поля</p>
            <p>{data.size}</p>
          </div>
          <hr />
          <div className="coating">
            <p>Покрытие</p>
            <p>{data.coating}</p>
          </div>
          <hr />
          <div className="premise">
            <p>Помещение</p>
            <p>{data.premise}</p>
          </div>
          <hr />
          <div className="inventory">
            <p>Инвертарь</p>
            <p>{data.inventory}</p>
          </div>
          <hr />
          <div className="price">
            <p>Цена за сеанс</p>
            <p>{data.price} тг</p>
          </div>
          <hr />
        </div>

        <div className="Serv">
          <div className="title">Удобства</div>
          <hr className="hr" />
          <div className="Service">
            <div className="services_1">
              <div className="shower">
                <p>Душ</p>
                {data.shower ? (
                  <span className="checkmark green">✔</span>
                ) : (
                  <span className="checkmark red">✘</span>
                )}
              </div>
              <div className="parking">
                <p>Парковка</p>
                {data.parking ? (
                  <span className="checkmark green">✔</span>
                ) : (
                  <span className="checkmark red">✘</span>
                )}
              </div>
              <div className="shop">
                <p>Магазин</p>
                {data.shop ? (
                  <span className="checkmark green">✔</span>
                ) : (
                  <span className="checkmark red">✘</span>
                )}
              </div>
              <div className="lockerRoom">
                <p>Раздевалка</p>
                {data.lockerRoom ? (
                  <span className="checkmark green">✔</span>
                ) : (
                  <span className="checkmark red">✘</span>
                )}
              </div>
            </div>

            <div className="services_2">
              <div className="stands">
                <p>Трибуны для зрителей</p>
                {data.stands ? (
                  <span className="checkmark green">✔</span>
                ) : (
                  <span className="checkmark red">✘</span>
                )}
              </div>
              <div className="lighting">
                <p>Освещение</p>
                {data.lighting ? (
                  <span className="checkmark green">✔</span>
                ) : (
                  <span className="checkmark red">✘</span>
                )}
              </div>
              <div className="security">
                <p>Охрана</p>
                {data.security ? (
                  <span className="checkmark green">✔</span>
                ) : (
                  <span className="checkmark red">✘</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="article-part">
        <div className="button-container">
          <button className="btn btn-primary" onClick={handleClick}>
            Қазір брондаңыз!
          </button>
        </div>
        {/* {openModal && <Calendar setOpen={setOpenModal} fieldId={id} />} */}
        {/* <DateAndTimeSelector/> */}
        {openModal && (
          <DateAndTimeSelector setOpen={setOpenModal} fieldId={id} />
        )}

        <ul className="article-tags-list">
          {post.tags &&
            post.tags.map((tag, index) => (
              <li key={index} className="article-tags-item">
                {tag}
              </li>
            ))}
        </ul>
        <Comments
          value={post}
          setValue={setPost}
          comments={post.comments}
          newsId={params.id}
        />
      </div>
    </div>
  );
}

export default Reservation;
