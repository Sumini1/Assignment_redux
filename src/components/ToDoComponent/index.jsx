import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToDo } from "../../reducer/todoSlice";
import ErrorComponent from "../Error";
import Loading from "../Loading";

const ToDoComponent = () => {
  // dispatch untuk mendapatkan datanya
  const dispatch = useDispatch();
  //state todo untuk datanya, useSelector untuk mendapatkan datanya
  const todo = useSelector((state) => state.todos.todo);
  // state status untuk status loading
  const status = useSelector((state) => state.todos.status);
  // state errror untuk error
  const error = useSelector((state) => state.todos.error);

  // supay prosesnya langsung ngefetch, tanpa pake button, tanpa ada triger terlenih dahulu
  useEffect(() => {
    dispatch(fetchToDo());
  }, [dispatch]);
//   console.log("todo", todo);
//   console.log("status", status);
//   console.log("error", error);

  // early return untuk loading
  if (status === 'loading') return <Loading />;
  // early return untuk error
  if (status === 'failed') return <ErrorComponent message={error} />;

  return (
    <div className="mt-8 mx-auto">
      {status === "succeeded" && (
        <div key={todo.id}>
          {/* <h3 className="font-bold text-3xl text-blue-500">{todo.title}</h3>
          <p
            className={`font-semibold text-lg, ${
              todo.completed ? "text-yellow-500" : "text-green-800"
            }`}
          >
            Completed : {todo.completed ? "YES" : "NO"}
          </p> */}
        </div>
      )}
    </div>
  );
};

export default ToDoComponent;
