import "./newField.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { fieldInputs } from "../../formSource";
import axios from "axios";

const NewField = () => {
  const [files, setFiles] = useState([]);
  const [info, setInfo] = useState({});
  const [resultMessage, setResultMessage] = useState("");

  const handleChange = (e) => {
    const { id, value, type } = e.target;
    const newValue = type === 'checkbox' ? e.target.checked : value;
    setInfo((prev) => ({ ...prev, [id]: newValue }));
  };
 
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Array.from(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dsw3iy3rf/image/upload",
            data
          );
          const { secure_url } = uploadRes.data;
          return secure_url;
        })
      );
      const newField = {
        ...info,
        photos: list,
      };
      await axios.post("/fields", newField);
      setResultMessage("Ойын алаңы сәтті тіркелді.");

    } catch (err) {
      console.log(err);
      setResultMessage("Ойын алаңың тіркеу кезінде қате орын алды.");
    }
  };

  console.log("Info:", info);

  return (
    <div className="newField">
      <Sidebar />
      <div className="newFieldContainer">
        <Navbar />
        <div className="newFieldTop">
          <h1>Жаңа ойын аланың қосу</h1>
        </div>
        <div className="newFieldBottom">
          <div className="newFieldLeft">
            <img
              src={
                files.length
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="newFieldRight">
            <form>
              <div className="newFieldFormInput">
                <label htmlFor="file">
                Сурет: <DriveFolderUploadOutlinedIcon className="newFieldIcon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {fieldInputs.map((input) => (
                <div
                  className={`newFieldFormInput ${input.type === 'checkbox' ? 'checkboxInput' : ''}`}
                  key={input.id}
                >
                  <label htmlFor={input.id}>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}

              <button onClick={handleClick}>Жіберу</button>
            </form>
            {resultMessage && <p>{resultMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewField;
