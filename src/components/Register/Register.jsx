import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const image = form.get('image');
        const password = form.get('password');
        console.log(name, email, image, password);
    }

    return (
        <div className="mt-5">
            <div className="hero min-h-screen bg-base-200 rounded-lg">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="">Learn more about the latest news of  Real Estate Asset and Property Management. <br /> <span className="text-2xl font-bold text-red-600">Register Now</span> and provide your information</h1>
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
                                <input type="text" placeholder="PhotoUrl" name="image" id="image" src="" alt=""  className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" id="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white">Login</button>
                            </div>
                        </form>
                        <p className="mb-3 text-center">Already have an account <Link to="/login" className="text-red-500 font-semibold">LogIn Now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;