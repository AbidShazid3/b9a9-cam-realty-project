import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mt-5">Your profile details</h2>
            <div className="mt-10 space-y-3">
                <img src={user.photoURL} alt="" className="rounded-full w-20 h-20 mx-auto" />
                <div className="flex justify-center items-center text-xl gap-2">
                    <h2 className="font-bold">Name:</h2>
                    <p>{user.displayName}</p>
                </div>
                <div className="flex justify-center items-center text-xl gap-2">
                    <h2 className="font-bold">Email:</h2>
                    <p>{user.email}</p>
                </div>
                <div className="flex justify-center items-center text-xl gap-2">
                    <h2 className="font-bold">Last Sign In:</h2>
                    <p>{user.metadata.lastSignInTime}</p>
                </div>
            </div>
            <p className="text-xl font-semibold mt-12">Click Here To <Link to="/updateprofile" className="text-red-500 font-bold"> Update Profile </Link></p>
            <div className="text-center font-bold text-green-400 mt-5">
                <Link to="/">Back To Home</Link>
            </div>
        </div>
    );
};

export default UserProfile;