import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Home/NavBar/NavBar";
import Footer from "../Home/Footer/Footer";


const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login');
    return (
        <div>
            { noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;