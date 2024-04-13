import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import React,{ Suspense } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./website/pages/Home";
import About from "./website/pages/About";
import Service from "./website/pages/Service";
import Menu from "./website/pages/Menu";
import Booking from "./website/pages/Booking";
import Team from "./website/pages/Team";
import Testimonial from "./website/pages/Testimonial";
import Contact from "./website/pages/Contact";
import Dashboard from "./admin/pages/Dashboard";
import Loginpage from "./admin/pages/Loginpage";
import Customer from "./admin/pages/Customer";

import Categories_add from "./admin/pages/Categories_add";
import Categories_manage from "./admin/pages/Categories_manage";
import Employee_manage from "./admin/pages/Employee_manage";
import Employee_add from "./admin/pages/Employee_add";
import Services_manage from "./admin/pages/Services_manage";
import Services_add from "./admin/pages/Services_add";
import User from "./admin/pages/User";
import AConatct from "./admin/pages/Conatct";
import Feedback from "./admin/pages/Booking_a";
import Login from "./website/pages/Login";
import Signup from "./website/pages/Signup";
import Profile from "./website/pages/Profile";
import View_services from "./website/pages/View_service";
import Logina from "./admin/pages/Logina";
import Signupa from "./admin/pages/Signup";
import Profilea from "./admin/pages/Profilea";
import Booking_a from "./admin/pages/Booking_a";
// import Signup from "./website/pages/Signup";


function App() {
  return (
 <BrowserRouter>
     <ToastContainer></ToastContainer>
 <Routes>
 <Route path="/" element={<><Home/></>}></Route>
 <Route path="/About" element={<><About/></>}></Route>
 <Route path="/Service" element={<><Service/></>}></Route>
 <Route path="/view_service/:cate_id" element={<><View_services/></>}></Route>
 
 <Route path="/Menu" element={<><Menu/></>}></Route>
 <Route path="/Booking" element={<><Booking/></>}></Route>
 <Route path="/Team" element={<><Team/></>}></Route>
 <Route path="/Testimonial" element={<><Testimonial/></>}></Route>
 <Route path="/Contact" element={<><Contact/></>}></Route>
 <Route path="/signup" element={<><Signup/></>}></Route>
 <Route path="/login" element={<><Login/></>}></Route>
 <Route path="/profile" element={<><Profile/></>}></Route>
 



 {/* admin pannel  */}

 <Route path="/dashboard" element={<><Dashboard/></>}></Route>
 <Route path="/loginpage" element={<><Logina/></>}></Route>
 <Route path="/signpage" element={<><Signupa/></>}></Route>
 <Route path="/customer" element={<><Customer/></>}></Route>
 <Route path="/categories_add" element={<><Categories_add/></>}></Route>
 <Route path="/categories_manage" element={<><Categories_manage/></>}></Route>
 <Route path="/employee_add" element={<><Employee_add/></>}></Route>
 <Route path="/employee_manage" element={<><Employee_manage/></>}></Route>
 <Route path="/profilea" element={<><Profilea/></>}></Route>
 <Route path="/services_add" element={<><Services_add/></>}></Route>
 <Route path="/services_manage" element={<><Services_manage/></>}></Route>

 <Route path="/user" element={<><User/></>}></Route>
 <Route path="/acontact" element={<><AConatct/></>}></Route>
 <Route path="/bookinga" element={<><Booking_a/></>}></Route>



 
</Routes>

 


 </BrowserRouter>
 
  );
}

export default App;
