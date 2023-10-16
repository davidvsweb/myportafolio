import uniclick from "./../assets/img/uniclick-logo.png"
import asimexico from "./../assets/img/logoasi.png"
import netlogistik from "./../assets/img/netlogistik.jpg"
import grupopromesa from "./../assets/img/logo promesa.jpg"
import react from "./../assets/svg/react.svg"
import angular from "./../assets/svg/angular.svg"
import django from "./../assets/svg/django.svg"
import bootstrap from "./../assets/svg/bootstrap.svg"
import wordpress from "./../assets/svg/wordpress.svg"
import javascript from "./../assets/svg/javascript.svg"
import github from "./../assets/svg/github.svg"
import lit from "./../assets/svg/lit.svg"
import analytics from "./../assets/svg/google-analytics.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const projects = [
    { index: 1, title: "Uniclick", image: uniclick, url: "https://www.uniclick.com.mx/", description: "Una plataforma digital de productos y servicios financieros comprometidos con el desarrollo sostenible de México", language1: react, language2: lit, language3: angular },
    { index: 2, title: "Netlogistik", image: netlogistik, url: "https://www.netlogistik.com/es/", description: "Operaciones de almacenaje, transporte, aprovisionamiento y retail con soluciones de software y hardware", language1: javascript, language2: bootstrap, language3: github },
    { index: 3, title: "Grupo Promesa", image: grupopromesa, url: "https://grupopromesa.mx/", description: "Grupo PROMESA se dedica a la educación ambiental en escuelas, empresas y viviendas de México.", language1: wordpress, language2: analytics, language3: django },
    { index: 4, title: "asimexico", image: asimexico, url: "https://asimexico.org/", description: "Autoestima, Salud e Imagen es una sociedad sin fines de lucro, que ayuda personas a tener una imagen positiva", language1: wordpress, language2: analytics, language3: github },
]

export function MyProjects() {
    return (

        <section className="my-5 container">
            <h3 className="text-center" id="my_projects"><strong>Mis proyectos</strong></h3>
            <p className="text-center m-0 description">He tenido la oportunidad de laborar con grandes y pequeñas empresas</p>
            <Swiper
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}

            >
                {projects.map(project =>
                    <SwiperSlide className="col-md-4 px-4 pb-4 pt-3" virtualIndex={project.index} key={project.title}>
                        <div className="card card-project my-3 text-center shadow">
                            <img src={project.image} alt={project.title} className="card-img-top" />
                            <div className="card-body">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <a className="shadow btn py-2 pl-4 pr-0 rounded-pill m-auto d-flex align-items-center" style={{ maxWidth: '120px' }} target="_blank" href={project.url}>Ver más <ExpandCircleDownIcon className="see-more-icon" /></a>
                            </div>
                            <div className="card-footer text-muted d-flex justify-content-center py-4">
                                <img src={project.language1} alt={project.language1} width="40" height="40" />
                                <img className="mx-5" src={project.language2} alt={project.language2} width="40" height="40" />
                                <img src={project.language3} alt={project.language3} width="40" height="40" />
                            </div>
                        </div>
                    </SwiperSlide>)}
            </Swiper>
        </section>
    )
}