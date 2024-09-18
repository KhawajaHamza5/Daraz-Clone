import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useUserStore from './Zustrand/CreateLoginZustand';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface FormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
 
  const { showCart,setIsLogined } = useUserStore();

  const existingUser = {
    existingEmail: 'hamza@gmail.com',
    existingPassword: 'qwertyui',
  };

  const { register, handleSubmit, formState: { errors }, reset, trigger } = useForm<FormData>({
    mode: "onChange"
  });

  const onSubmit = (data: FormData) => {
    const { email, password } = data;

    if (existingUser.existingEmail === email && existingUser.existingPassword === password) {
      console.log('User matched');
      toast.success("You are logged in");
      setIsLogined(true)
      navigate("/");
      reset(); 
    } else {
      console.log('User not matched');
      toast.error("Incorrect username or password");
     setIsLogined(false)
      
      reset();
    }
  };

  return (
    <div className={`w-full h-full flex justify-center items-center ${showCart ? 'bg-black opacity-40 pointer-events-none overflow-hidden fixed top-52' : 'bg-transparent'}`}>
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-transparent text-white justify-center box-border h-full flex flex-col text-base w-full py-4
          sm:text-xl sm:p-8 sm:w-3/4 md:text-2xl md:p-10 md:w-3/4 lg:text-3xl lg:p-12 lg:w-8/12
          xl:text-3xl xl:p-14 xl:w-7/12 2xl:text-3xl 2xl:p-16 2xl:w-3/5"
        >
          <h1>Welcome to Daraz! Please login.</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full my-5 p-12 md:p-14 lg:p-16">
            <div>
              <h1>Email*</h1>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  minLength: { value: 8, message: 'Min length is 8' },
                  maxLength: { value: 20, message: 'Max length is 20' }
                })}
                className="placeholder:text-gray-500 border-2 text-black my-3 border-black rounded-md w-full h-11 p-2
                  md:h-12 lg:h-16 xl:h-16 2xl:h-20"
                placeholder="Enter Email"
                onBlur={() => trigger('email')} 
              />
              {errors.email && <p className="text-red-500
              text-sm sm:text-base md:text-base lg:text-lg
              xl:text-xl 2xl:text-2xl">{errors.email.message}</p>}
            </div>
            <div>
              <h1 className="mt-2">Password*</h1>
              <input
                id="password"
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 8, message: 'Min length is 8' },
                  maxLength: { value: 15, message: 'Max length is 15' }
                })}
                className="placeholder:text-gray-500 border-2 text-black my-3 border-black rounded-md w-full h-11 p-2
                  md:h-12 lg:h-16 xl:h-16 2xl:h-20"
                placeholder="Enter Password"
                onBlur={() => trigger('password')}
              />
              {errors.password && <p className="text-red-500
              text-sm sm:text-base md:text-base lg:text-lg 
              xl:text-xl 2xl:text-2xl">{errors.password.message}</p>}
            </div>
            <input
              className="w-full mt-10 rounded-md bg-orange-700 hover:bg-orange-800 h-11 md:h-12 lg:h-16 xl:h-16 2xl:h-20"
              type="submit"
              value="LOGIN"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
