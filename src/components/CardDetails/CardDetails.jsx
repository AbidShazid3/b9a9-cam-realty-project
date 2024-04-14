import { Link, useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const currentData = data.find(aData => aData.id == id);
    const facility = currentData.facilities
    return (
        <div className="card bg-base-100 shadow-xl lg:px-20 pt-20">
            <figure className="">
                <img src={currentData.image} alt="" className="rounded-xl w-full lg:h-96 " />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{currentData.segment_name}</h2>
                <div className='flex items-center gap-2'>
                    <h3 className="card-title">Estate:</h3>
                    <p>{currentData.estate_title}</p>
                </div>
                <p>{currentData.description}</p>
                <div>
                    <p className="card-title">Facilities :</p>
                    <div className="px-2">
                        {
                            facility.map((faci, idx) => <li className="px-2 py-1" key={idx}>{faci}</li>)
                        }
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <h2 className='text-lg font-medium'>Location:</h2>
                    <p>{currentData.location}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <h2 className='text-lg font-medium'>Area :</h2>
                    <p>{currentData.area}</p>
                </div>
                <p>{currentData.status}</p>
                <p>{currentData.price}</p>
                <div className="text-center font-bold text-green-400 mt-5">
                    <Link to="/">Back To Home</Link>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;