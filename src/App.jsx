
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/home";
import Login from "./pages/Login"


const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;













// import { useRoutes } from 'react-router-dom'
// import { routes } from './routes'

// export default function App() {
//   const element = useRoutes(routes)
//   return element;
// }
