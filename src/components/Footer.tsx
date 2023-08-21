import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export function Footer() {
    return (
        <footer className="bg-black p-5 text-light" id="contacto">
            <div className="row">
                <div className="col-lg-4 col-sm-12 my-3 pr-2">
                    <h5 className="text-center mb-3">Contacto</h5>
                    <p className="d-block">Teléfono: <a href="tel:+5510750696" className="text-green font-weight-bold">55 1075 0696</a>
                    </p>
                    <p className="d-block">Correo Electrónico: <a href="mailto: vsjd.99@gmail.com"
                        className="text-green font-weight-bold">vsjd.99@gmail.com</a></p>
                    <p className="d-block">Página de internet: <a href="https://portafolio-vsjd-production.up.railway.app/"
                        className="text-green font-weight-bold">portafolio-vsjd-production.up.railway.app</a>
                    </p>
                </div>
                <div className="col-lg-4 col-sm-12 my-3">
                    <h5 className="text-center mb-3">Navegación</h5>
                    <div className="row">
                        <div className="col-6">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <p className="d-flex pointer">
                                        <FiberManualRecordIcon style={{ fontSize: '10px' }} className='text-green mr-2 my-auto' />
                                        <span className="text-underline">
                                            <a className="nav-link text-white" href="/#about_me">Presentación</a>
                                        </span>
                                    </p>
                                </li>
                                <li className="nav-item">
                                    <p className="d-flex pointer">
                                        <FiberManualRecordIcon style={{ fontSize: '10px' }} className='text-green mr-2 my-auto' />
                                        <span className="text-underline">
                                            <a className="nav-link text-white" href="/#my_projects">Mis proyectos</a>
                                        </span>
                                    </p>
                                </li>
                                <li className="nav-item">
                                    <p className="d-flex pointer">
                                        <FiberManualRecordIcon style={{ fontSize: '10px' }} className='text-green mr-2 my-auto' />
                                        <span className="text-underline">
                                            <a className="nav-link text-white" href="/#hard_skills">Hard skills</a>
                                        </span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 my-3">
                    <h5 className="text-center mb-3">Redes sociales</h5>
                    <div className="d-flex justify-content-center">
                        <a href="https://github.com/davidvsweb" className="text-light" target="_blank">
                            <GitHubIcon sx={{ fontSize: '40px' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/david-vázquez-27078920b" className="text-light" target="_blank">
                            <LinkedInIcon sx={{ fontSize: '40px' }} className="mx-3" />
                        </a>
                        <a href="https://www.instagram.com/deivid.web/" className="text-light" target="_blank">
                            <InstagramIcon sx={{ fontSize: '40px' }} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

