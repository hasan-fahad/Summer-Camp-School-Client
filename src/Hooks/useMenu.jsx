import { useEffect, useState } from "react";

const useMenu = () => {
    // FOR INSTRUCTORS
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // FOR CLASSES
    const [classMenu, setClassMenu] = useState([]);
    const [classLoading, setClassLoading] = useState(true);
    
// FOR INSTRUCTORS
    useEffect (()=> {
        fetch('Instructor.json')
        .then(res => res.json())
        .then(data => {
            setMenu(data);
            setLoading(false);
        
        });
         
        }, [])

// FOR CLASSES
        useEffect (()=> {
            fetch('Classes.json')
            .then(res => res.json())
            .then(data => {
                setClassMenu(data);
                setClassLoading(false);
            
            });
             
            }, [])
        
        return [menu,loading, classMenu, classLoading];
        
    
}

export default useMenu;