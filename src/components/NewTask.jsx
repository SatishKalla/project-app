import { useRef, useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

export default function NewTask({ addTask }) {
  const modal = useRef();
  const [task, setTask] = useState("");
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    if (task.trim() === "") {
      modal.current.open();
      return;
    }
    addTask(task);
    setTask("");
  };
  return (
    <>
      <Modal ref={modal} buttonText="Close">
        <h1 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h1>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>

      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
          value={task}
        />
        <Button onClick={handleClick}>Add Task</Button>
      </div>
    </>
  );
}
