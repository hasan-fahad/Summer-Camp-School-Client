import { Outlet } from "react-router-dom";
import NavBar from "../Home/NavBar/NavBar";
import Footer from "../Home/Footer/Footer";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;