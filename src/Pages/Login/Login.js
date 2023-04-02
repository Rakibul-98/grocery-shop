import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const handleForm = (data) => {
        console.log(data)
    }

    return (
        <div className="hero bg-base-200 pb-10 lg:pb-0">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/R3d0KTK/Mobile-login-bro.png" alt="" />
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleForm(setData))}>
                            <p className='text-3xl text-center font-semibold'>Login</p>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" className="input input-bordered w-full max-w-xs" {...register("email")} />
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" className="input input-bordered w-full max-w-xs" {...register("password")} />
                            <label className="label">
                                <span className="label-text">Forget Password?</span>
                            </label>
                            <p>{data}</p>
                            <input className='btn btn-outline w-full max-w-xs my-3' type="submit" value="Login" />
                            <p>Don't have any account? <Link className='text-primary underline' to="/register">Register here</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;