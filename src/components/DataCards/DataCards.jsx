
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DataCards = ({ data }) => {
    const { id, estate_title, segment_name, price, status, image, location, area } = data;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src={image} alt="" className="rounded-xl w-full h-56" />
                </figure>
                <div className="card-body">
                    <div className='lg:flex justify-between'>
                        <h2 className="card-title">{segment_name}</h2>
                        <h3 className="card-title">{estate_title}</h3>
                    </div>
                    <div className='text-lg font-medium lg:flex justify-between'>
                        <h2>{location}</h2>
                        <h3>Area: {area}</h3>
                    </div>
                    <div className="lg:flex justify-between">
                        <p>{status}</p>
                        <p className='lg:flex justify-end'>{price}</p>
                    </div>
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