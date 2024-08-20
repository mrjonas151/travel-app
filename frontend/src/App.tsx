import './App.css';
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Destination from './pages/Destination/Destination';
import DestinationDetails from './pages/DestinationDetails/DestinationDetails';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import TourDetails from './pages/TourDetails/TourDetails';
import TourPackage from './pages/TourPackage/TourPackage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination-details" element={<DestinationDetails />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/tour-details" element={<TourDetails />} />
        <Route path="/tour-package" element={<TourPackage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
