import Instructor from "../Home/PopularInstructor/Instructor";
import SectionTitle from "../Home/SectionTitle/SectionTitle";
import useMenu from "../Hooks/useMenu";


const Instructors = () => {
    const [menu] = useMenu();
    

    return (
        <section className="mt-8" >
            
            <div>
            <SectionTitle
            heading={"Instructor"}
            subheading={"Our Instructor"}
            
            
            >

            </SectionTitle>
            <div className=" mx-12 mt-12 grid md:grid-cols-3 gap-4">
                
                {
                    menu.map(item=> <Instructor
                    key={item.id}
                    item={item}
                    >
                    </Instructor>)
                }
            </div>
            </div>

            
         
        </section>
    );
};

export default Instructors;