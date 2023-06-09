

const Class = ({item}) => {
    const {image, name, department,availableSeats,classNames, price  } =item;
    return (
        <div className="card w-96 glass">
        <figure><img className="h-[300px]" src={image} alt="car!"/></figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{classNames}</h2>
          <p > <span className="font-semibold  rounded-xl px-2">Email:</span> {name}</p>
          <p> <span className="font-semibold  rounded-xl px-2">Department:</span> {department}</p>
          <p><span className="font-semibold rounded-xl px-2">Available Seats:</span> {availableSeats}</p>
          <p><span className="font-semibold  rounded-xl px-2">Price:</span> ${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default Class;