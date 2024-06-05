import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Search from "./pages/Search/";
import Login from "./components/auth/login/Login";
import Signup from "./components/auth/signup/Signup";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </PageContainer>
    </>
  );
}

export default App;
