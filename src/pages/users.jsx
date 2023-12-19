import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../reducer/listUserSlice";


const Users = () => {
    const dispatch = useDispatch();

    // cek status
    const status = useSelector((state) => state.users.status)
    const error = useSelector((state) => state.users.error)
    const list = useSelector((state) => state.users.list)

    useEffect(() => {
        //dispatch fetchUsers
        dispatch(fetchUsers())
    }, [dispatch])




    return (
      <div>
        <h1>in page Users</h1>
        <div className="grid gap-3 grid-cols-3  p-10 pl-64" >
          {list.map((item, index) => (
            <div key={index}>
              <img src={item.avatar} alt="" />
              <p>{item.first_name}</p>
            </div>
          ))}
        </div>
      </div>
    );
}
export default Users;