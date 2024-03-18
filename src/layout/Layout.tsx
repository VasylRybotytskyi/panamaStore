import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../utils/Loader";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer>{/* <Footer /> */}</footer>
    </>
  );
};

export default Layout;
