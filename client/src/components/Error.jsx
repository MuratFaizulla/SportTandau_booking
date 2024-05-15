import errorImage from "../assets/img/error.svg";

function Error() {
  return (
    <div className="error">
      <img src={errorImage} alt="Error" className="error-img" />
      <h2 className="error-title">Произошла ошибка!</h2>
    </div>
  );
}

export default Error;