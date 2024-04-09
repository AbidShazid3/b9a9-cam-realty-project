import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const image = form.get('image');
        const password = form.get('password');
        console.log(name, email, image, password);
        if(password.length < 6){
            toast.error("Password should be at least 6 characters");
            return;
        }
        else if(!/[A-Z]/.test(password)){
            toast.error("Password Must have an Uppercase letter");
            return;
        }
        else if(!/[a-z]/.test(password)){
            toast.error("Password Must have a Lowercase letter");
            return;
        }


        createUser(email, password)
        .then(result=>{
            const registerUser = result.user;
            console.log(registerUser);
            e.target.reset();
            alert("Login successful");
            navigate("/");
        })
        .catch(error=>{
            console.log(error.message);
            toast.error(error.message);
        })
    }

    return (
        <div className="mt-5">
            <div className="hero min-h-screen bg-base-200 rounded-lg">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="">Learn more about the latest news of Real Estate Asset and Property Management. <br /> <span className="text-2xl font-bold text-red-600">Register Now</span> and provide your information</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" id="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" id="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="PhotoUrl" name="image" id="image" src="" alt="" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" id="password" className="input input-bordered w-full" required />
                                    <span onClick={() => setShowPassword(!showPassword)} className="absolute top-4 right-4">
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaRegEye ></FaRegEye>
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white">Register</button>
                            </div>
                        </form>
                        <ToastContainer />
                        <p className="mb-3 text-center text-lg">Already have an account <Link to="/login" className="text-red-500 font-bold">LogIn Now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;