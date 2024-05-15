import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faStar } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../../utils/utils";

function CommentItem({ fullName, text, rating, createdAt }) {
  return (
    <div className="comments-item">
      <div className="comments-item-header">
        <h4 className="comments-item-name">{fullName}</h4>
        <div className="comments-item-date">
          <FontAwesomeIcon icon={faCalendar} />
          <p>{formatDate(createdAt)}</p>
        </div>
      </div>
      <p className="comments-item-text">{text}</p>
      <div className="comments-item-star">
        <FontAwesomeIcon icon={faStar} />
        <p>{rating}</p>
      </div>
    </div>
  );
}

export default CommentItem;