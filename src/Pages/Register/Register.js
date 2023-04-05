import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const Register = () => {

    const { register, handleSubmit } = useForm();
    const handleRegister = (data) => {
        console.log(data)
    }

    return (
        <div className="hero bg-base-200 pb-10 lg:pb-0">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/qrRT0bR/Mobile-login-pana.png" alt="" />
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleRegister)}>
                            <p className='text-3xl text-center font-semibold'>Register</p>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" className="input input-bordered w-full max-w-xs" {...register("name")} />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" className="input input-bordered w-full max-w-xs" {...register("email")} required/>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" className="input input-bordered w-full max-w-xs" {...register("password")} required/>
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" className="input input-bordered w-full max-w-xs" {...register("confirm-password")} required/>
                            <input className='btn btn-outline btn-success w-full max-w-xs my-3' type="submit" value="Register" />
                            <p>Already have any account? <Link className='text-primary underline' to="/login">Please Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register; 