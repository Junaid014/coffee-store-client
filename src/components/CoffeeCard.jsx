
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({initialCoffee ,onDelete}) => {
    const {_id , photo,quantity,price,taste,name}=initialCoffee;

    
    
    
    const handleDelete = _id=>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            

            fetch(`http://localhost:3000/coffees/${_id}`, {
                method:'DELETE'
            })
            .then(res =>res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount){
                   
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your coffee has been deleted.",
                        icon: "success"
                      });
                      onDelete(_id)
                }
            })



            }
          });
    }

    return (
       
            <div className="h-72 shadow-xl space-y-9 flex gap-3 justify-around bg-[#F5F4F1] items-center">
            <figure><img className="" src={photo} alt="Movie" /></figure>
            
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Quantity : {quantity}</p>
                    <p>Price : {price}</p>
                    
                    <p>{taste}</p>
                </div>
               
                    
                        <div className=" gap-2 mb-4 flex flex-col ">
                            <button className="btn cursor-pointer">View</button>
                            <Link to={``}>
                        <button className="btn cursor-pointer">Edit</button>
                        </Link>
                            <button
                            onClick={() => handleDelete(_id)}
                            className="btn cursor-pointer bg-orange-500">X</button>
                        </div>
                        
        </div>
    );
};

export default CoffeeCard;