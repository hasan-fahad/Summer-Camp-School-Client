import { useEffect, useState } from "react";


const useClass = () => {
    // FOR CLASSES
    const [classMenu, setClassMenu] = useState([]);
    const [classLoading, setClassLoading] = useState(true);

    // FOR CLASSES
    useEffect (()=> {
        fetch('Classes.json')
        .then(res => res.json())
        .then(data => {
            setClassMenu(data);
            setClassLoading(false);
        
        });
         
        }, [])

    return [classMenu, classLoading];
};

export default useClass;