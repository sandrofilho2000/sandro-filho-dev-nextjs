import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import useProjects from '../../../hooks/useProjects';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

const Portfolio = () => {

    const options = {
        margin: 10,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: false,
        smartSpeed: 300,
        navClass: ["owl-prev", "owl-next"],
        navText: [
            '',
            '',
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        },
    };

    const { projects } = useProjects()

    return (
        <section className="portfolio" id="portfolio">
            <div className="max-width">
                <h2 className="title">Portifólio</h2>
                <div className="portfolio-content">

                    return (
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                    >
                        {
                            projects.map((item, index) => (
                                <div key={index} className="card">
                                    <div className="box">
                                        <img alt={item.img_alt} title={item.img_title} loading="lazy"
                                            src={item.img} />
                                        <div className="text">{item.name}</div>
                                        <p>{item.text}</p>
                                        <a href={item.link} target="_blank" rel="noreferrer">Acessar</a>
                                    </div>
                                </div>
                            ))
                        }
                    </Swiper>
                    );

                </div>
            </div>
        </section>
    )
}

export default Portfolio


