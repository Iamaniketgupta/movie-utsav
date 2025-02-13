"use client"
import React, { useEffect, useState } from 'react'

export default function FeedBack() {

    const [data, setData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        contact: '',
        comment: '',
        contact: '',
        avatar: ''
    });

    const validator = (email, contact) => {
        if (!email || !contact) {
            console.log("Enter email and contact")
            return;
        }
        console.log(email)
        let emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        let contactRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        let isEmailValid = emailRegex.test(emailRegex);
        let isContactValid = contactRegex.test(parseInt(contactRegex));

        console.log({ result: isContactValid })
        console.log({ isEmailValid: isEmailValid })

        return isContactValid && isEmailValid;
    }

    const onChangeHandler = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const onFileChange = (e) => {
        console.log(e.target)
        // setData((prev)=>({...prev,[e.target.name]:e.target.value}));
    }

    console.log(data)
    const handleSubmit = (e) => {
        e.preventDefault();
       if(!validator(data.email,data.contact)){
        console.error("Enter a Valid Email or Contact")
       } 
        console.log("Form Data", data)


    }


    return (
        <form
            onSubmit={handleSubmit}
            className='bg-black06 mt-10 flex flex-col text-white p-4 md:p-10 lg:p-20 gap-4 '>
            <h2 className='text-xl font-bold text-white'>Give Your FeedBack</h2>

            <input
                onChange={onFileChange}
                type="file" name='avatar' accept='image/*' required />

            <div className='flex items-center gap-4 felx-wrap'>
                {/* First Name */}
                <div className=' flex-1'>
                    <input
                        value={data.firstName}
                        onChange={onChangeHandler}
                        type="text" name='firstName' placeholder='Enter the First Name'
                        className='outline-none bg-black10  p-3 w-full rounded-lg' required />
                </div>
                {/* Last Name */}
                <div className='flex-1'>
                    <input type="text" name='lastName'
                        onChange={onChangeHandler}
                        value={data.lastName}
                        className='outline-none bg-black10  p-3 w-full rounded-lg'
                        placeholder='Enter the Last Name' required />
                </div>
            </div>

            <div className='flex items-center gap-4 felx-wrap'>

                {/* Email */}
                <div className='flex-1'>
                    <input type="email" name='email'
                        onChange={onChangeHandler}
                        value={data.email}
                        className='outline-none bg-black10  p-3 w-full rounded-lg'
                        placeholder='Enter your Email' required />
                </div>


                {/* Contact */}

                <div className='flex-1'>
                    <input type="phone" name='contact'
                      onChange={onChangeHandler}
                      value={data.contact}
                        className='outline-none bg-black10  p-3 w-full rounded-lg'
                        placeholder='Enter your Contact' required />
                </div>
            </div>

            <div>
                <textarea cols="30" rows="10" name='comment'
                   onChange={onChangeHandler}
                   value={data.comment}
                    className='outline-none bg-black10  p-3 w-full rounded-lg'
                    placeholder='Enter Your comment'>

                </textarea>
            </div>

            <button
                type='submit'
                className='bg-red45 rounded-md p-2 px-4 max-w-fit hover:bg-red-600
         text-white font-semibold '>
                Submit FeedBack
            </button>



        </form>
    )
}
