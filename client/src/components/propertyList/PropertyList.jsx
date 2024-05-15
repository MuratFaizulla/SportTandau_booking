import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading,  } = useFetch("/fields/countByType");
// console.log(error)
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5EEJaoxqPbvgKcVoN-kBZoj5KZGEruBF3qPDVq55c8g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWT9K8BYOZip6GL75_RrUrs3X1ld1fN0DOPAfLXx2b4g&s",
    "https://avatars.dzeninfra.ru/get-zen_doc/9846546/pub_64c239efdb963811e8f431dc_64c23a249bb1804a38ec5c3c/scale_1200",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_jpvbPFbuO7sX08FkJOtw8fggH78QCnsgUBph4BJyw&s",
  ];

  const russianTypes = {
    football: "Футбол",
    boleyball: "Волейбол",
    basketball: "Баскетбол",
    tennis: "Теннис"
  };

  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            data.map((item, index) => (
              <div className="pListItem" key={index}>
                <img
                  src={images[index]}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{russianTypes[item.type]}</h1>
                  <h2>{item.count} {russianTypes[item.type]} алаңы</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
