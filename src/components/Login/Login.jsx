import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaEyeSlash, FaGoogle, FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { logInUser, googleLogIn, githubLogIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        logInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                e.target.reset();
                alert('Login successful');
                navigate("/");
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message);
            })
    }

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
                navigate("/");
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message);
            })
    }

    const handleGithubLogIn = () => {
        githubLogIn()
            .then(result => {
                const githubUser = result.user;
                console.log(githubUser);
                navigate("/");
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message);
            })
    }

    return (
        <div className="mt-5">
            <div className="hero min-h-screen bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:p-6 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Learn more about the latest news of Real Estate Asset and Property Management. <br /> <span className="text-xl font-bold text-red-600">Log in</span> and provide your information</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" id="email" className="input input-bordered" required />
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary text-white text-xl font-bold">Login</button>
                            </div>
                        </form>
                        <ToastContainer />
                        <p className="mb-3 text-center text-lg">Don`t have an account? <Link to="/register" className="text-red-500 font-bold">Register Now</Link></p>
                        <div className="px-2">
                            <div className="text-center md:flex lg:flex justify-between p-2">
                                <button onClick={handleGoogleLogIn} className="btn btn-outline mt-2"><FaGoogle></FaGoogle>
                                    Login With Google
                                </button>
                                <button onClick={handleGithubLogIn} className="btn btn-outline my-2"><FaGithub></FaGithub>
                                    Login With Github
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;