import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import VideoComponent from "./VideoComponent/VideoComponent";
import HomeComponent from "./HomeComponent/HomeComponent";
import { FilterContext, MyContext } from "./ContextComponent/Context";
import { useState } from "react";
import NavBarComponent from "./NavBarComponent/NavBarComponent";

export default function App() {
  const [data, setData] = useState({});
  const [search,setSearch]=useState('') 
  const [filter,setFilter]=useState([])
  return (
    <>
      <MyContext.Provider
        value={{ data,setData,setSearch,filter,setFilter,search}}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/nav-bar" element={<NavBarComponent />} />
            <Route path="/" element={<HomeComponent />} />
            <Route path="/video/:id" element={<VideoComponent />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}
