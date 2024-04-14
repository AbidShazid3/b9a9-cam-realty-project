
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DataCards = ({ data }) => {
    const { id, estate_title, price, status, image, location, area } = data;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl md:p-5 lg:p-5">
                <figure className="px-5 pt-5">
                    <img src={image} alt="" className="rounded-xl w-full h-56" />
                </figure>
                <div className="card-body">
                    <div className='flex items-center gap-2'>
                        <h3 className="card-title">Estate:</h3>
                        <p>{estate_title}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-lg font-medium'>Location:</h2>
                        <p>{location}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-lg font-medium'>Area:</h2>
                        <p>{area}</p>
                    </div>
                    <p>{status}</p>
                    <p>{price}</p>
                    <div className="card-actions">
                        <Link to={`/data/${id}`}><button className="btn btn-accent text-white text-base font-bold">View Property</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

DataCards.propTypes = {
    data: PropTypes.object,
}


export default DataCards;