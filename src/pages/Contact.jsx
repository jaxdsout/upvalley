import { useState } from "react"

function Contact () {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })

    const { name, email, phone, subject, message } = formData;

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center justify-evenly bg-[#FFFFFC] p-5 w-full">
                <div className="flex flex-col items-start justify-start">
                    <h2 className="text-sm font-bold tracking-wider">PHONE:</h2>
                    <a href="tel:7079631918" className="ml-2 hover:text-[#f87f23]">  
                        <p>(707) 963-1918 </p> 
                    </a>                
                    <h2 className="text-sm font-bold tracking-wider mt-3">HOURS:</h2>
                    <p className="ml-2">Monday - Friday: 7<span className="text-sm">AM</span> to 4<span className="text-sm">PM PT</span></p>
                    <h2 className="text-sm font-bold tracking-wider mt-3">MAILING ADDRESS:</h2>
                    <p className="ml-2">PO Box 458, Saint Helena, CA 94574</p>
                </div>
                <div className="w-full flex flex-col items-center justify-center mt-10">
                    <h2 className="text-xs font-bold tracking-wider">FIND US ON GOOGLE</h2>
                    <a href="https://maps.app.goo.gl/js2s2FvVdzN9YBLr7" target="_blank" rel="noopener noreferrer" className="hover:text-[#f87f23]">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                    </a>
                </div>
            </div>
           
            <div className="flex flex-col items-center justify-center bg-[#C8AB83] p-5 w-full">
                <h2 className="text-sm font-bold tracking-wider">HAVE A QUESTION?</h2>
                <h4 className="text-xs w-1/2 text-center text-wrap mb-3">FILL OUT THE FORM BELOW & WE'LL GET BACK TO YOU!</h4>
                <form className="flex flex-col items-start justify-center" autoComplete="off">
                    <label for="name" className="text-sm font-bold tracking-wider" >NAME:</label>
                    <input
                        onChange={handleChange}
                        className="indent-2 bg-[#242424] rounded-lg text-white h-[3rem] w-[18rem]" 
                        name='name' placeholder="First & Last Name" value={name} type="text">
                    </input>
                <label for="email" className="text-sm font-bold tracking-wider mt-3">EMAIL:</label>
                <input
                    onChange={handleChange}
                    className="indent-2 bg-[#242424] rounded-lg text-white h-[3rem] w-[18rem]" 
                    name='email' placeholder="" value={email} type="email">
                </input>
                <label for="phone" className="text-sm font-bold tracking-wider mt-3">PHONE:</label>
                <input
                    onChange={handleChange}
                    className="indent-2 bg-[#242424] rounded-lg text-white h-[3rem] w-[18rem]" 
                    name='phone' placeholder="" value={phone} type="tel">
                </input>
                <label for="subject" className="text-sm font-bold tracking-wider mt-3">SUBJECT:</label>
                <input
                    onChange={handleChange}
                    className="indent-2 bg-[#464646] rounded-lg text-white h-[3rem] w-[18rem]" 
                    name='subject' placeholder="" value={subject} type="text">
                </input>
                <label for="message" className="text-sm font-bold tracking-wider mt-3">MESSAGE:</label>
                <textarea
                    onChange={handleChange}
                    className="indent-2 bg-[#464646] rounded-lg text-white w-[18rem]"                     
                    name='message' placeholder="" value={message} rows="4">
                </textarea>
            </form>
            <div className="flex flex-col items-center justify-center">
                <button type="submit" className="bg-black text-white text-sm font-bold tracking-wide rounded-lg mt-4 p-4 hover:bg-[#7b664a]">SUBMIT</button>
            </div>
            </div>
        </div>
    )
}

export default Contact