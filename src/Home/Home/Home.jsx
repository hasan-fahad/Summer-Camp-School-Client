import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import StudentsReview from "../StudentsReview/StudentsReview";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Academia | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <StudentsReview></StudentsReview>
        </div>
    );
};

export default Home;