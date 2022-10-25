import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./components/Pages/Products/Products";
import Layout from "./components/Layout/Layout";
import Home from "./components/Pages/Home/Home";
import Brands from "./components/Pages/Brands/Brands";
import Categories from "./components/Pages/Categories/Categories";
import AddProduct from "./components/Pages/Products/AddProduct";
import AddBrand from "./components/Pages/Brands/AddBrand";
import AddCategory from "./components/Pages/Categories/AddCategory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="brands" element={<Brands />} />
          <Route path="categories" element={<Categories />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="addBrand" element={<AddBrand />} />
          <Route path="addCategory" element={<AddCategory />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
