import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import axios from "axios";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [isManager, setIsManager] = useState(false);
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultMessage, setResultMessage] = useState("");

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const res = await axios.get("/fields"); // Обновите URL на тот, который используется в вашем проекте
        setFields(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchFields();
  }, []);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setInfo((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
    if (id === "isManager") {
      setIsManager(checked);
    }
  };

  const handleFieldChange = (e) => {
    const { value } = e.target;
    setInfo((prev) => ({
      ...prev,
      fieldId: value,
    }));
    // console.log("Selected Field ID:", value); 
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (file) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "upload");
      try {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dsw3iy3rf/image/upload",
          data
        );
        const { url } = uploadRes.data;

        const newUser = {
          ...info,
          img: url,
          manager: {
            value: isManager,
            fieldId: isManager ? info.fieldId : null,
          },
        };

        await axios.post("/auth/register", newUser);
        console.log("Пайдаланушы сәтті тіркелді:", newUser);
        setResultMessage("Пайдаланушы сәтті тіркелді.");
      } catch (err) {
        console.log(err);
        setResultMessage("Пайдаланушыны тіркеу кезінде қате орын алды.");
      }
    } else {
      // Если файл не выбран, продолжить без фотографии
      const newUser = {
        ...info,
        img: "",
        manager: {
          value: isManager,
          fieldId: isManager ? info.fieldId : null,
        },
      };

      try {
        await axios.post("/auth/register", newUser);
        console.log("Пайдаланушы сәтті тіркелді:", newUser);
        setResultMessage("Пайдаланушы сәтті тіркелді.");
      } catch (err) {
        console.log(err);
        setResultMessage("Пайдаланушыны тіркеу кезінде қате орын алды.");
      }
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Сурет: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    value={info[input.id] || ""}
                  />
                </div>
              ))}

              {isManager && (
                <div className="formInput">
                  <label htmlFor="fieldId">Поле</label>
                  <select id="fieldId" onChange={handleFieldChange} value={info.fieldId || ""}>
                    {loading ? (
                      <option>Загрузка...</option>
                    ) : (
                      fields.map((field) => (
                        <option key={field._id} value={field._id}>
                          {field.name}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              )}

              <button onClick={handleClick}>Жіберу</button>
            </form>
            {resultMessage && <p>{resultMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
