import Instructor from "../Home/PopularInstructor/Instructor";
import SectionTitle from "../Home/SectionTitle/SectionTitle";
import useMenu from "../Hooks/useMenu";


const Instructors = () => {
    const [menu] = useMenu();
    const science = menu.filter (item => item.department ==='Science')
    const arts = menu.filter (item => item.department ==='Arts')
    const commerce = menu.filter (item => item.department ==='Commerce')
    
    

    return (
        <section className="mt-8" >
            
            <div>
            <SectionTitle 
            heading={"Instructor"}
            subheading={"Our Instructor"}
            
            
            >

            </SectionTitle>
            <h1 className="text-center mb-5 text-5xl font-bold">Science</h1>
            <div className=" mx-12 mt-12 grid md:grid-cols-3 gap-4">
                
                {
                    science.map(item=> <Instructor
                    key={item.id}
                    item={item}
                    >
                    </Instructor>)
                }
            </div>
            <h1 className="text-center mb-5 text-5xl font-bold">Arts</h1>
            <div className=" mx-12 mt-12 grid md:grid-cols-3 gap-4">
                
                {
                    arts.map(item=> <Instructor
                    key={item.id}
                    item={item}
                    >
                    </Instructor>)
                }
            </div>
            <h1 className="text-center mb-5 text-5xl font-bold">Commerce</h1>
            <div className=" mx-12 mt-12 grid md:grid-cols-3 gap-4">
                
                {
                    commerce.map(item=> <Instructor
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