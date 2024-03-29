import { useState } from "react";

const ToDoItem = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [title, setTitle] = useState("");
  const [isEditing, setIsEditing] = useState(true);
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
        <button onClick={() => setIsEditing(!isEditing)} disabled={!enabled}>
          {isEditing ? "Save" : "Edit"}
        </button>
      )}
    </div>
  );
};

export default ToDoItem;
