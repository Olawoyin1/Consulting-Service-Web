import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import './App.css';
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Services from "./pages/Services.jsx";

function App() {

  const main = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home/>} />

        <Route path="*" element={<ErrorPage />} />

        <Route path="services" element={<Services />} />


      

    

      
      </Route>
      )
    )

    return <RouterProvider router={main} />;
}

export default App;
