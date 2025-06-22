import "./App.css";
import Footer from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

/**
 * createBrowserRouter : routing 경로 생성 component
 * RouterProvider : 실제로 rendering이 될 때 routing을 제공하는 함수
 * Outlet : 페이지들
 */
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MainPage from "./Page/MainPage/MainPage.jsx";
import About from "./Page/About/About.jsx";
import Leadership from "./Page/Leadership/Leadership.jsx";
import Board from "./Page/Board/Board.jsx";
import Service from "./Page/Services/Services.jsx";
import Contact from "./Page/Contact/Contact.jsx";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

/**
 * 중첩 라우팅 구성
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      { path: "/leadership", element: <Leadership /> },
      { path: "/board", element: <Board /> },
      { path: "/our-services", element: <Service /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

/**
 * Flow
 * 1. router path ("/") 에 사용자 접속
 * 2. <Layout/> 이 rendering 되고 화면에 출력
 * 3. <Outlet/>은 자식(children) 요소 출력
 * 4. index : true 는 부모와 자식의 path가 동일함을 나타냄
 * 5. outlet의 페이지가 전환될 때마다 navbar, footer가 계속 렌더링 되어야 하는데
 *    rerendering 없이 outlet만 rendering되도록 하게 한다.
 * @returns
 */
function App() {
  return <RouterProvider router={router} />;
}

export default App;
