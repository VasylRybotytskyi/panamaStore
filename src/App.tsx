import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/Home"));
const ProductsPage = lazy(() => import("./pages/Products"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetail"));
const FavoritePage = lazy(() => import("./pages/Favorite"));
const CheckoutPage = lazy(() => import("./pages/Checkout"));
const CheckoutSuccessPage = lazy(() => import("./pages/CheckoutSuccess "));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/success" element={<CheckoutSuccessPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
