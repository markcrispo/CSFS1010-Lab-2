/* eslint-disable  react/prop-types */
import { useState } from "react";

const ToDoItem = ({
  title,
  setTitle,
  isChecked,
  setIsChecked,
  handleRemove,
}) => {
  const [isEditing, setIsEditing] = useState(title === "");
  const [isHovering, setIsHovering] = useState(false);

  const enabled = title.length > 0;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        minHeight: "22px",
        fontSize: "14px",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />

      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      ) : (
        <div>{title}</div>
      )}

      {(isHovering || isEditing) && (
        <>
          <button onClick={() => setIsEditing(!isEditing)} disabled={!enabled}>
            {isEditing ? "Save" : "Edit"}
          </button>
          <button onClick={handleRemove}>Remove</button>
        </>
      )}
    </div>
  );
};

export default ToDoItem;
