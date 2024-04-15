import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {

    return (
        <div className="mt-5 border rounded-lg">
            <Helmet>
                <title>Cam Realty | Update Profile</title>
            </Helmet>
            <div className="hero-content flex-col">
                <div className="text-center mt-5 mb-5">
                    <h1 className="text-5xl font-bold">Update Your Profile</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
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
                        <div className="form-control mt-2">
                            <button className="btn btn-primary text-white text-xl font-bold">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;