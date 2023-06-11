import { useEffect, useState } from "react";


const useClass = () => {
    // FOR CLASSES
    const [classMenu, setClassMenu] = useState([]);
    const [classLoading, setClassLoading] = useState(true);

    // FOR CLASSES
    useEffect (()=> {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => {
            setClassMenu(data);
            setClassLoading(false);
        
        });
         
        }, [])

    return [classMenu, classLoading];
};

export default useClass;