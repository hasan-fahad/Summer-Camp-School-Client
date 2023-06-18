import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";


const Class = ({item}) => {
    const {image, name, department,availableSeats,classNames, price,title, id } =item;
    const isBackgroundBlue = true;

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [refetch] = useCart();

    const handleAddToCart = item => {
        console.log(item);
        if(user && user.email){
          const cartItem ={menuItemID: id, name, image, price, email: user.email}
          fetch('https://summer-camp-school-server-bay.vercel.app/carts',{
            method: 'POST',
            header: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(cartItem)
          })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId){
              refetch();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Class added on the Cart',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
        }
        else {
          Swal.fire({
            title: ' Please login to order the class ',
          
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login Now!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/loginpage', {state: {from: location}})
              
            }
          })
        }
    }
    return (
        <div style={{backgroundColor: isBackgroundBlue? 'blue' : 'red',}} className="text-white card w-96 glass">
        <figure><img className="h-[300px]" src={image} alt="car!"/></figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{classNames}</h2>
          <p > <span className="font-semibold  rounded-xl px-2">Email:</span> {name}</p>
          <p> <span className="font-semibold  rounded-xl px-2">Department:</span> {department}</p>
          <p><span className="font-semibold rounded-xl px-2">Available Seats:</span> {availableSeats}</p>
          <p><span className="font-semibold  rounded-xl px-2">Price:</span> ${price}</p>
          <div className="card-actions justify-end">
            <button onClick={()=> handleAddToCart(item)} className="btn btn-primary">Add to cart</button>
            <button  className="btn btn-primary"> <Link to={`/classes/${title}`}>See All Classes {department}</Link> </button>
          </div>
        </div>
      </div>
    );
};

export default Class;