import { Helmet } from "react-helmet-async";
import { FaLocationArrow, FaMailBulk, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="mt-5 grid grid-cols-2">
            <Helmet>
                <title>Cam Realty | Contact Us</title>
            </Helmet>
            <div className="">
                <h2 className="text-2xl font-bold mb-2">Contact Details</h2>
                <p>If you have any questions, just fill in the contact form, and we will answer you shortly. If you are living nearby, come visit our office.</p>
                <div className="mt-6">
                    <p className="font-semibold">Client Support:</p>
                    <div className="flex p-2 gap-3 items-center">
                        <FaPhoneAlt />
                        <p>1-800-1234-567</p>
                    </div>
                </div>
                <div className="mt-6">
                    <p className="font-semibold">E-mail:</p>
                    <div className="flex p-2 gap-3 items-center">
                        <FaMailBulk></FaMailBulk>
                        <p>info@camrealty.org</p>
                    </div>
                </div>
                <div className="mt-6">
                    <p className="font-semibold">Main Office:</p>
                    <div className="flex p-2 gap-3 items-center">
                        <FaLocationArrow></FaLocationArrow>
                        <p>3015 Grand Ave, Coconut Grove,Merrick Way, FL 12345</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="">
                    <div className="hero-content">
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="phone" placeholder="phone" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Detail Requirement</span>
                                    </label>
                                    <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;