function CommentInput({
    isTextarea = false,
    type = "text",
    title,
    placeholder,
    value,
    setValue,
  }) {
    return (
      <>
        <p className="comments-form-label">{title}</p>
        {isTextarea ? (
          <textarea
            type={type}
            className="comments-form-input"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></textarea>
        ) : type === "number" ? (
          <input
            type={type}
            className="comments-form-input"
            min={0}
            max={5}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <input
            type={type}
            className="comments-form-input"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
      </>
    );
  }
  
  export default CommentInput;