import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axiosInstance from "../../../services/axios";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

function Comments({ comments, newsId, setValue, value }) {
  const [fullName, setFullName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [commentsFormIsOpen, setCommentsFormIsOpen] = useState();

  function handleClickToogleForm() {
    setCommentsFormIsOpen(!commentsFormIsOpen);
  }

  async function sendComment(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await axiosInstance.post(
        `/fields/${newsId}/comments`,
        { fullName, text, rating },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setValue({ ...value, comments: [...value.comments, data] });
      setFullName("");
      setText("");
      setRating(0);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <form className="comments-form" onSubmit={(e) => sendComment(e)}>
        <div className="comments-form-hide">
          <h3 className="comments-form-title">Добавить комментарий</h3>
          <FontAwesomeIcon
            onClick={handleClickToogleForm}
            icon={commentsFormIsOpen ? faEyeSlash : faEye}
          />
        </div>
        {commentsFormIsOpen && (
          <>
            <CommentInput
              title="Полное имя"
              placeholder="Введите ваше имя"
              value={fullName}
              setValue={setFullName}
            />
            <CommentInput
              isTextarea={true}
              title="Ваш комментарий"
              placeholder="Введите ваш комментарий"
              value={text}
              setValue={setText}
            />
            <CommentInput
              type="number"
              title="Рейтинг"
              placeholder="Введите вашу оценку статьи"
              value={rating}
              setValue={setRating}
            />
            <div className="comments-form-bottom">
              <button className="comments-form-button" type="submit">
                Оставить комментарий
              </button>
              {isLoading && "Загрузка..."}
            </div>
          </>
        )}
      </form>

      <div className="comments">
        <div className="comments-list">
          <h2 className="comments-form-title">Комментарии</h2>
          {comments &&
            comments.map((comment) => (
              <CommentItem
                key={comment._id}
                fullName={comment.fullName}
                text={comment.text}
                rating={comment.rating}
                createdAt={comment.createdAt}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Comments;