import CV from "./../assets/static/CV-VSJD.pdf"

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-black">
            <div className="container">
                <a className="navbar-brand font-weight-bold font-italic text-white" href="/">JDVS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/#contacto">Contacto</a>
                        </li>
                        <li className="nav-item d-flex align-items-center ml-1">
                            <a className="btn btn-primary btn-sm" href={CV} target="_blank">
                                Descargar CV
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}