import { useEffect, useState } from "react";


const useReview = () => {
   // FOR CLASSES
   const [review, setReview] = useState([]);
   const [reviewLoading, setReviewLoading] = useState(true);

   // FOR CLASSES
   useEffect (()=> {
       fetch('https://summer-camp-school-server-bay.vercel.app/reviews')
       .then(res => res.json())
       .then(data => {
           setReview(data);
           setReviewLoading(false);
       
       });
        
       }, [])

   return [review, reviewLoading];
};

export default useReview;