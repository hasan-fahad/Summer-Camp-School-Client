

const Instructor = ({item}) => {
    const {image, name, email, department,classesTaken,classNames  } =item;
    const isBackgroundRed = true;
    return (
        <div style={{backgroundColor: isBackgroundRed ? 'red' : 'blue',}} className=" text-white mb-5 card w-96 glass">
  <figure><img className="h-[300px]" src={image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{name}</h2>
    <p > <span className="font-semibold  rounded-xl px-2">Email:</span> {email}</p>
    <p> <span className="font-semibold  rounded-xl px-2">Department:</span> {department}</p>
    <p><span className="font-semibold rounded-xl px-2">Classes Taken:</span> {classesTaken}</p>
    <p><span className="font-semibold  rounded-xl px-2">Classes Names:</span> {classNames}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">SEE CLASSES!</button>
    </div>
  </div>
</div>
    );
};

export default Instructor;