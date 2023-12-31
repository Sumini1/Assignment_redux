import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorComponent from "../Error";
import Loading from "../Loading";
import { fetchToDoById } from "../../reducer/todoDynamicSlice";

const ToDoComponentById = () => {
  // dispatch untuk mendapatkan datanya
  const dispatch = useDispatch();
  //state todo untuk datanya, useSelector untuk mendapatkan datanya
  const todo = useSelector((state) => state.todosById.todo);
  // state status untuk status loading
  const status = useSelector((state) => state.todosById.status);
  // state errror untuk error
  const error = useSelector((state) => state.todosById.error);

  // supay prosesnya langsung ngefetch, tanpa pake button, tanpa ada triger terlenih dahulu
  //   useEffect(() => {
  //     dispatch(fetchToDoById());
  //   }, [dispatch]);

  // state untuk simpan value input
    const [input, setInput] = useState()
    const handleFetchClick = () => {
        if (input) {
            dispatch(fetchToDoById(input));
        }
    }

  console.log("todo byid", todo);
  console.log("status byid", status);
  console.log("error byid", error);

  // early return untuk loading
  if (status === "loading") return <Loading />;
  // early return untuk error
  if (status === "failed") return <ErrorComponent message={error} />;

  return (
    <div className="mt-8 mx-auto">
      {/* input todo id */}
      <div className="bg-white p-8 max-w-xs w-full rounded-lg mb-8">
        <input
          type="number"
          placeholder="Enter To Do Id"
          className="border border-gray-500 p-2 rounded-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-blue-600 p-2 w-full mt-4 rounded-md" onClick={handleFetchClick}>

          Fetch To Do
        </button>
      </div>
      {status === "succeeded" && (
        <div key={todo.id}>
          <h3 className="font-bold text-3xl text-blue-500">{todo.title}</h3>
          <p
            className={`font-semibold text-lg, ${
              todo.completed ? "text-yellow-500" : "text-green-800"
            }`}
          >
            Completed : {todo.completed ? "YES" : "NO"}
          </p>
        </div>
      )}
    </div>
  );
};

export default ToDoComponentById;
