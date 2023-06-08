import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../assets/Images/Banner/Banner-1.jpg'
import img2 from '../../assets/Images/Banner/Banner-2.jpg'
import img3 from '../../assets/Images/Banner/Banner-3.jpg'

const Banner = () => {
    return (
        <div>
             <Carousel className="text-center">
                <div>
                    <img src={img1} alt="" />
                    <div>
                        <h2>Academia</h2>
                    </div>
                    
                </div>
                <div>
                    <img src={img2} />
                    
                    
                </div>
                <div>
                    <img src={img3} />
                    
                </div>
                
            </Carousel>
        </div>
    );
};

export default Banner;