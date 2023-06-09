import Class from "../Home/PopularClass/Class";
import SectionTitle from "../Home/SectionTitle/SectionTitle";
import useClass from "../Hooks/useClass";


const Classes = () => {
    const [classMenu] = useClass();
   
    return (
        <section>
            <SectionTitle
            subheading={"Popular Class"}
            heading={"Class"}
            
            >


            </SectionTitle>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    classMenu.map(item=> <Class
                    key={item.id}
                    item={item}
                    >
                    </Class>)
                }
            </div>
            <div className="grid">
            <button className=" btn btn-outline border-0 border-b-4 mt-4" >View All Classes </button>
            </div>
        </section>
    );
};

export default Classes;