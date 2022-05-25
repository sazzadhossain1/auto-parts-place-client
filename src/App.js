import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import AddReview from "./Components/Dashboard/AddReview";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyOrder from "./Components/Dashboard/MyOrder";
import MyProfile from "./Components/Dashboard/MyProfile";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import MyPortfolio from "./Components/MyPortfolio/MyPortfolio";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import Perches from "./Components/Perches/Perches";
import Products from "./Components/Products/Products";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Review from "./Components/Review/Review";
import Shop from "./Components/Shop/Shop";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/myPortfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        {/* <Route path="/about" element={<About></About>}></Route> */}

        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        {/* <Route path="/contact" element={<Contact></Contact>}></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="myorders" element={<MyOrder />} />
          <Route path="addreview" element={<AddReview />} />
          <Route path="myprofile" element={<MyProfile />} />
        </Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Perches></Perches>
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
