import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import Login from "./pages/SingnIn";

function App() {
  return (
    <>
      <PageContainer>
        <Routes>
          <Route path="/auth" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/search" element={<Search />} />
        </Routes>
      </PageContainer>
    </>
  );
}

export default App;
