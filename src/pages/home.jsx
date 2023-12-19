// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchRegisterUser } from "../reducer/registerSlice";

// const Home = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const status = useSelector((state) => state.register.status);
//   const error = useSelector((state) => state.register.error);
//   const response = useSelector((state) => state.register.response);

//   // cek lewat console.log
//   console.log("email", email);
//   console.log("pasword", password);

//   const handleSubmit = (e) => {
//     // prevent reload
//     e.preventDefault();
//     console.log("Pesan akhir", password, email);
//     dispatch(fetchRegisterUser({ email, password }));
//   };

//   // cek hasil dispatch
//   console.log("status", status);
//   console.log("error", error);
//   console.log("response", response);
//   return (
//     <div>
//       <section className="bg-gray-50 dark:bg-gray-900">
//         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//           <a
//             href="#"
//             className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
//           >
//             <img
//               className="w-8 h-8 mr-2"
//               src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
//               alt="logo"
//             />
//             Flowbite
//           </a>
//           <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                 Sign in to your account
//               </h1>
//               <form className="space-y-4 md:space-y-6" action="#">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Your email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="name@company.com"
//                     required=""
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="••••••••"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     required=""
//                   />
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div class="flex items-start">
//                     <div class="flex items-center h-5">
//                       <input
//                         id="remember"
//                         aria-describedby="remember"
//                         type="checkbox"
//                         className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                         required=""
//                       />
//                     </div>
//                     <div className="ml-3 text-sm">
//                       <label
//                         for="remember"
//                         className="text-gray-500 dark:text-gray-300"
//                       >
//                         Remember me
//                       </label>
//                     </div>
//                   </div>
//                   <a
//                     href="#"
//                     className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
//                   >
//                     Forgot password?
//                   </a>
//                 </div>
//                 <button
//                   type="submit"
//                   onClick={handleSubmit}
//                   className="w-full text-blue bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 >
//                   Sign in
//                 </button>
//                 <p className="text-sm font-light text-blue-500 dark:text-blue-400">
//                   Don’t have an account yet?{" "}
//                   <a
//                     href="#"
//                     className="font-medium text-blue-600 hover:underline dark:text-blue-500"
//                   >
//                     Sign up
//                   </a>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default Home;


import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../reducer/listUserSlice";

const Users = () => {
  const dispatch = useDispatch();

  // cek status
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);
  const list = useSelector((state) => state.users.list);

  useEffect(() => {
    //dispatch fetchUsers
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>in page Users</h1>
      <div className="grid gap-3 grid-cols-3  p-10 pl-64">
        {list.map((item, index) => (
          <div key={index}>
            <img src={item.avatar} alt="" />
            <p>{item.first_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Users;