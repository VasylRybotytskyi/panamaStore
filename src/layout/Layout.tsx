import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../utils/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header>
        <Header />
      </header>
      <main style={{ flexGrow: 1 }}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
