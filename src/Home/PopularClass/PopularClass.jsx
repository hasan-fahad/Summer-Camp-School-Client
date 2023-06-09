import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../SectionTitle/SectionTitle";
import Class from "./Class";


const PopularClass = () => {
    const [classMenu] = useMenu();
    const popular = classMenu.filter (item => item.category ==='Popular');
    return (
        <section>
            <SectionTitle
            subheading={"Popular Class"}
            heading={"Class"}
            
            >


            </SectionTitle>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    popular.map(item=> <Class
                    key={item.id}
                    item={item}
                    >
                    </Class>)
                }
            </div>
            <div className="grid">
            <button className=" btn btn-outline border-0 border-b-4 mt-4" >View </button>
            </div>
        </section>
    );
};

export default PopularClass;