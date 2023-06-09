import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../SectionTitle/SectionTitle";
import Instructor from "./Instructor";


const PopularInstructor = () => {

    const [menu] = useMenu();
    const popular = menu.filter (item => item.category ==='Popular');

    return (
        <section className="mb-8" >
            <SectionTitle
            heading={"Instructor"}
            subheading={"Popular Instructor"}
            
            
            >

            </SectionTitle>

            <div className="grid md:grid-cols-3 gap-4">
                {
                    popular.map(item=> <Instructor
                    key={item.id}
                    item={item}
                    >
                    </Instructor>)
                }
            </div>
            <div className="grid">
            <button className=" btn btn-outline border-0 border-b-4 mt-4" >View </button>
            </div>
        </section>
    );
};

export default PopularInstructor;