import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../reducer/listUserSlice";

const Home = () => {
  const dispatch = useDispatch();

  // cek status
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);
  const list = useSelector((state) => state.users.list);

  useEffect(() => {
    //dispatch fetchUsers
    dispatch(fetchUsers());
  }, [dispatch]);

  const logoutUser = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="bg-amber-200   mb-0 p-0 w-[100%] h-[100vw] z-50 backdrop-blur">
      <button
        onClick={logoutUser}
        className="py-2 px-5 bg-purple-900 text-white font-bold rounded-xl hover:scale-105 duration-300 "
      >
        Logout
      </button>

      <h1 className="text-center text-purple-900 font-bold from-neutral-300">
        List Users
      </h1>
      <div className="grid gap-3 grid-cols-3  p-10 pl-64 ">
        {list.map((item, index) => (
          <div key={index}>
            <img className="rounded-s-full" src={item.avatar} alt="" />
            <p className="text-purple-700">{item.first_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
