import react from "./../assets/svg/react.svg"
import angular from "./../assets/svg/angular.svg"
import django from "./../assets/svg/django.svg"
import bootstrap from "./../assets/svg/bootstrap.svg"
import wordpress from "./../assets/svg/wordpress.svg"
import typescript from "./../assets/svg/typescript.svg"
import python from "./../assets/svg/python.svg"
import javascript from "./../assets/svg/javascript.svg"
import github from "./../assets/svg/github.svg"
import node from "./../assets/svg/node-js.svg"
import lit from "./../assets/svg/lit.svg"
import analytics from "./../assets/svg/google-analytics.svg"

export function Languages() {
    return (
        <section className="my-5 py-5">
            <div className="container">
                <h3 className="text-center" id="my_projects"><strong>Tecnologías</strong></h3>
                <p className="text-center description m-0">Las siguientes tecnologías las he utilizado a lo largo de mi carrera</p>
                <div className="row mt-5">
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={react} alt="react-icon" />
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={angular} alt="angular-icon" />
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={django} alt="django-icon" />
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={bootstrap} alt="bootstrap-icon" />
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={wordpress} alt="wordpress-icon" />
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={typescript} alt="typescript-icon" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={python} alt="python-icon" />
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={javascript} alt="javascript-icon" />
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={lit} alt="django-icon" />
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={github} alt="github-icon" />
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={analytics} alt="wordpress-icon" />
                    </div>
                    <div className="col-4 col-lg-2 my-4 d-flex">
                        <img className="hard-skills-icon" src={node} alt="node-js-icon" />
                    </div>
                </div>
            </div>
        </section>
    )
}