import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";


const useClass = () => {
    // FOR CLASSES
    // const [classMenu, setClassMenu] = useState([]);
    // const [classLoading, setClassLoading] = useState(true);

    // // FOR CLASSES
    // useEffect (()=> {
    //     fetch('https://summer-camp-school-server-bay.vercel.app/classes')
    //     .then(res => res.json())
    //     .then(data => {
    //         setClassMenu(data);
    //         setClassLoading(false);
        
    //     });
         
    //     }, [])
    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('https://summer-camp-school-server-bay.vercel.app/classes');
            return res.json();
        }
    })


    return [menu, loading, refetch];
};

export default useClass;