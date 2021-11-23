import React from "react";
import { useForm } from "react-hook-form";

const FormOnSubmit = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    
    // const send = () =>{
         
       
    //     alert("your Info will be noted");
    // }
    
   
    return (
        <div className="m-5  text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3">
    <label    for="text" class="form-label" > </label>
    <br />
    <input type="text"  placeholder="Your Name" class="  p-2 form-control" {...register("Name")}   id="text" required aria-describedby="emailHelp"/>
    </div>

  <div class="mb-3">
    <label   for="exampleInputEmail1" class="form-label   " > </label>
    <br />
    <input type="email" placeholder="Your Email Address " {...register("Email Address")} class="  p-2 form-control"  id="Email Address" required aria-describedby="emailHelp"/>
    </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" placeholder="Your Email Address"    class="form-label"> </label>
    <br />
    <input type="text" required class="p-4 form-control" {...register("Message")} placeholder="Your Message"  id="exampleInputPassword1"/>
  </div>

  <button    required  style={{float: 'right'}} type="submit" class="btn btn-danger ">Submit  </button>
   
</form>
        </div>
    );
};

export default FormOnSubmit;