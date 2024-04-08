import { Link, useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const currentData = data.find(aData=> aData.id == id);
    const facility = currentData.facilities
    return (
        <div className="card bg-base-100 shadow-xl">
                <figure className="lg:px-20 pt-20">
                    <img src={currentData.image} alt="" className="rounded-xl w-full lg:h-96 " />
                </figure>
                <div className="card-body">
                    <div className='md:flex lg:flex justify-between'>
                        <h2 className="text-2xl font-bold">{currentData.segment_name}</h2>
                        <h3 className="card-title">{currentData.estate_title}</h3>
                    </div>
                    <p>{currentData.description}</p>
                    <div className="text-lg font-medium md:flex">
                        <p>Facilities</p>
                        {
                            facility.map((faci, idx)=> <span className="px-2" key={idx}>{faci}</span>)
                        }
                    </div>
                    <div className='text-lg font-medium flex justify-between'>
                        <h2>{currentData.location}</h2>
                        <h3>{currentData.area}</h3>
                    </div>
                    <div className="flex justify-between">
                        <p>{currentData.status}</p>
                        <p className='flex justify-end'>{currentData.price}</p>
                    </div>
                    <div className="text-center font-bold text-green-400">
                        <Link to="/">Back To Home</Link>
                    </div>
                </div>
            </div>
    );
};

export default CardDetails;