import uniclick from "./../assets/svg/scrum.svg"
import netlogistik from "./../assets/svg/responsive-design.svg"
import grupopromesa from "./../assets/svg/speedometer.svg"

const benefits = [
    { title: "Scrum", image: uniclick, description: "Estimación de horas, planeación de sprint y trabajo por objetivos." },
    { title: "Responsive", image: netlogistik, description: "Maquetado adaptativo para todo tipo de dispositivos." },
    { title: "Clean code", image: grupopromesa, description: "Optimización de código para tiempos mas cortos de carga." },
]

export function Benefits() {
    return (

        <section className="my-5 py-5 bg-grey text-light" id="hard_skills">
            <div className="container">
                <h3 className="text-center" id="my_projects"><strong>Hard skills</strong></h3>
                <p className="text-center m-0 description">Óptimo desempeño en equipo e independiente</p>
                <div className="row my-3">
                    {benefits.map(benefit =>
                        <div className="col-md-4 rounded-lg" key={benefit.title}>
                            <div className="card card-project p-2 my-3 shadow bg-black">
                                <div className="card-body">
                                    <img width="30" src={benefit.image} alt={benefit.title} className="mb-2" />
                                    <h2>{benefit.title}</h2>
                                    <p style={{ color: 'darkgray' }}>{benefit.description}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}