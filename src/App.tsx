import Menu from "./pages/menu";
import Home from "./pages/home";
import MainMenu from "./pages/main-menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleItem from "./pages/single-item";
import { OrderProvider } from "./context/order-context";

const App = () => {
  return (
    <BrowserRouter>
      <OrderProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MainMenu />} />
          <Route path="/menu/:category" element={<Menu />} />
          <Route path="/menu/:category/:slug" element={<SingleItem />} />
        </Routes>
      </OrderProvider>
    </BrowserRouter>
  );
};

export default App;
