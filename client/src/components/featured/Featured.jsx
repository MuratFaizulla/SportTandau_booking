import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading,  } = useFetch(
    "/fields/countByCity?cities=Астана,Алматы,Шымкент"
  );
  // console.log(error);
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://st.depositphotos.com/46002592/53379/i/450/depositphotos_533797220-stock-photo-capital-kazakhstan-city-astana-winter.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Астана</h1>
              <h2>{data[0]} ойын алаңы бар</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.advantour.com/img/kazakhstan/images/almaty.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Алматы</h1>
              <h2>{data[1]} ойын алаңы бар</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://tengritravel.kz/userdata/news/2023/news_509599/thumb_m/photo_442842.png"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Шымкент</h1>
              <h2>{data[2]} ойын алаңы бар</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;