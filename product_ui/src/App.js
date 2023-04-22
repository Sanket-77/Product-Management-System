import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";
import NavigationCompo from "./Components/NavigationCompo";
import ProductData from "./Components/ProductData";

function App() {
  return (
    <>
      <div>
        <NavigationCompo />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route path="/editproduct" element={<EditProduct />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
