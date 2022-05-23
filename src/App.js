import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
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
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/shop"
          element={
            <RequireAuth>
              <Shop></Shop>
            </RequireAuth>
          }
        ></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
