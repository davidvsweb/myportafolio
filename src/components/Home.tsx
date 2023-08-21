import { Benefits } from "./Benefits";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Languages } from "./Languages";
import { MyProjects } from "./MyProjects";
import { Navbar } from "./Navbar";

export function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <MyProjects />
            <Benefits />
            <Languages />
            <Footer />
        </>
    );
}

