import SectionTitle from "../SectionTitle/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'



import { Autoplay, Pagination, Navigation } from 'swiper';

import useReview from "../../Hooks/useReview";



const StudentsReview = () => {

    const [review] = useReview([]);

    return (
        <div>
            <SectionTitle
            heading={"Students Review"}
            subheading={"What Our Students Say!"}
            
            ></SectionTitle>

<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
                review.map(review => <SwiperSlide
                key={review._id}
                
                >
                    <div className="mx-24 flex flex-col items-center">
                                                <Rating className="flex"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                                />
                        <p className="py-8">{review.details}</p>
                        <h1 className=" font-semibold text-2xl text-red-600 mb-8">{review.name}</h1>
                    </div>
                    
                     </SwiperSlide>)
            }
        
      </Swiper>
        </div>
    );
};

export default StudentsReview;