import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const {_id, name,quantity,price,taste,supplier,photo,details}=useLoaderData()
    const handleUpdateCoffee=e=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());
        console.log(updatedCoffee);

        fetch(`http://localhost:3000/coffees/${_id}` ,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Coffee Added Successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
            }
            console.log(data);
        })
    }
    return (
        <div className='w-7xl mx-auto'>
            <Link to='/' className=''>Back to home</Link>
            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text-3xl text-center text-[#374151] font-extrabold">Update Coffee</h2>
                <p className='text-center text-[#1B1A1AB3] w-[900px] mx-auto mb-8 '>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleUpdateCoffee}>
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="  w-full px-3 text-[#1B1A1A99] text-sm py-0.5 bg-white focus:outline-none focus:ring-0 " />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="  w-full px-3 text-[#1B1A1A99] text-sm py-0.5 bg-white focus:outline-none focus:ring-0 " />
                            </label>
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="  w-full px-3 text-[#1B1A1A99] text-sm py-0.5 bg-white focus:outline-none focus:ring-0 " />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="  w-full px-3 text-[#1B1A1A99] text-sm py-0.5 bg-white focus:outline-none focus:ring-0 " />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={price}   placeholder="Price" className="  w-full px-3 text-[#1B1A1A99] text-sm py-0.5 bg-white focus:outline-none focus:ring-0 " />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" defaultValue={details}  placeholder="Details" className="  w-full px-3 text-[#1B1A1A99] text-sm py-0.5 bg-white focus:outline-none focus:ring-0 " />
                            </label>
                        </div>
                    </div>
                    {/* form Photo url row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" defaultValue={photo}  placeholder="Photo URL" className="  w-full px-3 text-[#1B1A1A99] text-sm py-0.5 bg-white focus:outline-none focus:ring-0 " />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Coffee" className="btn bg-[#D2B48C] w-full py-1 border border-[#331A15] cursor-pointer" />

                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;