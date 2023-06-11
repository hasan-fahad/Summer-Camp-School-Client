import { useEffect, useState } from "react";

const useMenu = () => {
    // FOR INSTRUCTORS
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    
// FOR INSTRUCTORS
    useEffect (()=> {
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data => {
            setMenu(data);
            setLoading(false);
        
        });
         
        }, [])


        
        return [menu,loading]
        
    
}

export default useMenu;