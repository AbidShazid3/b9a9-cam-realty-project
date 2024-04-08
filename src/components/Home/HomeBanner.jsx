import banner1 from '../../assets/filtergrade-4T4AcGJvARQ-unsplash (1).jpg';
import banner2 from '../../assets/stephan-bechert-yFV39g6AZ5o-unsplash (1).jpg';
import banner3 from '../../assets/todd-kent-178j8tJrNlc-unsplash.jpg';
import banner4 from '../../assets/vita-vilcina-KtOid0FLjqU-unsplash.jpg';

const HomeBanner = () => {
    return (
            <div className="carousel w-full h-[500px] mt-6 ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
    );
};

export default HomeBanner;