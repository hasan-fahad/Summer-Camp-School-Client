
import { Parallax } from "react-parallax";
import Class from "../Home/PopularClass/Class";
import SectionTitle from "../Home/SectionTitle/SectionTitle";
import useClass from "../Hooks/useClass";
import classImg from "../assets/Images/Classes/Classes-bg.jpg"
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab } from "react-tabs";
import { useState } from "react";


const Classes = () => {
    const [classMenu] = useClass();
    const categories = ['Science', 'Arts', 'Commerce'];
    const {department} =useParams();
    const initialIndex = categories.indexOf(department);
    const [tabIndex, setIndex] = useState(initialIndex);

    const science = classMenu.filter (item => item.department ==='Science')
    const arts = classMenu.filter (item => item.department ==='Arts')
    const commerce = classMenu.filter (item => item.department ==='Commerce')
   
    return (
        <section className="mb-5" >
             <Helmet>
                <title>Academia | Classes</title>
            </Helmet>
            
            <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={classImg}
        bgImageAlt="Our Classes"
        strength={-200}
    >
     <div className="hero h-[500px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
             <h1 className="mb-5 text-5xl font-bold">Classes</h1>
            <p className="mb-5">Choose Your Best Class!</p> 
            
          </div>
        </div>
      </div>
    </Parallax>
    <SectionTitle
            
            heading={"Classes"}
            
            >


            </SectionTitle>
            <Tab defaultIndex={tabIndex} onSelect={(index) => setIndex(index)}>
            <h1 className="text-center mb-5 text-5xl font-bold" title="Science"  >Science</h1>
            <div className=" mx-12 mt-12 grid md:grid-cols-3 gap-4">
                
                {
                    science.map(item=> <Class
                    key={item.id}
                    item={item}
                    >
                    </Class>)
                }
            </div>
            
            <h1 className="text-center mb-5 text-5xl font-bold" title="Arts">Arts</h1>
            <div className=" mx-12 mt-12 grid md:grid-cols-3 gap-4">
                
                {
                    arts.map(item=> <Class
                    key={item.id}
                    item={item}
                    >
                    </Class>)
                }
            </div>
            <h1 className="text-center mb-5 text-5xl font-bold" title="Commerce">Commerce</h1>
            <div className=" mx-12 mt-12 grid md:grid-cols-3 gap-4">
                
                {
                    commerce.map(item=> <Class
                    key={item.id}
                    item={item}
                    >
                    </Class>)
                }
            </div>
            </Tab>

           
            
        </section>
    );
};

export default Classes;