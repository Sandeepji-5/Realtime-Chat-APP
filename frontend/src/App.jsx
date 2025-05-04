
import Navbar from "./components/Navbar";

import {Routes, Route, Navigate} from "react-router-dom"; 
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingPage from "./pages/SettingPage";

import ProfilePage from "./pages/ProfilePage";
import { useThemeStore } from "./store/useThemeStore.js";
import { useAuthStore } from "./store/useAuthStore.js";
import {  useEffect } from "react";  
import {Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";




const App = ()=> {
  const {authUser, checkAuth, isCheckingAuth} = useAuthStore();
  const {theme} = useThemeStore();
  useEffect(() => {
    checkAuth();
  },[checkAuth]);
 

console.log({authUser});
if(isCheckingAuth && !authUser)  
  return(
      <div className="flex items-center justify-center h-screen">
          <Loader className ="size-10 animate-spin"/>
      </div>
  )
  return (
    <div data-theme={theme}>    


      <Navbar />

      <Routes>
      
    {!authUser && (
      <>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </>
    )}

    
    {authUser && (
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </>
    )}


        
       </Routes>

      <Toaster/>

    </div>
  )
};
export default App ;
