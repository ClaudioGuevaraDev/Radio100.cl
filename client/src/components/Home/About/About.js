import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="container-fluid jumbotron" id="about">
            <div className="container text-center">
                <h2 className="titulo-about">Quienes somos, y que proponemos...</h2>
                <hr className="my-4"></hr>
                <p className="lead parrafo-about">
                    Radio100.cl es una iniciativa independiente, en la búsqueda fundamentalmente de ser
                    una alternativa en el amplio espectro de las comunicaciones radiales que permita a
                    quienes así lo desean recibir una señal que contenga grato y variado acompañamiento
                    musical, aspectos noticiosos, contenidos deportivos, con aportes de opinión y/o datos.
                    <br></br>
                    <br></br>
                    A quienes componemos este grupo, nos mueve la pasión por comunicar sobre diferentes
                    ámbitos, particularmente los deportivos, sin mayor pretensión que proyectar un mensaje
                    total y completamente desprovisto de sesgos o segmentaciones. Esperamos en todo
                    momento, ojalá recibir una respuesta o feed back de parte de nuestros auditores.
                    <br></br>
                    <br></br>
                    Entendemos la comunicación como diálogo, como un proceso bilateral, que sea
                    respetuoso, que consista en proyectar para recibir y viceversa.
                    <br></br>
                    <br></br>
                    Proponemos por lo tanto a quienes nos elijan, como un medio de compañía, de cercanía y
                    hasta de complicidad, que nos acompañen en nuestro crecimiento y desarrollo;
                    haciéndonos conocer sus comentarios, vuestras ideas, propuestas u opiniones, y caminar
                    juntos esta senda. Pero, y sobre todo, ofrecemos esta frecuencia y plataforma para
                    proyectos personales o de grupos que tengan, como nosotros, la necesidad de contar con
                    un espacio en el dial radial digital para poner una idea propia y original al aire. No nos
                    cabe duda que, proyectos serios y acabados podrán llegar a ser exitosos si son emitidos
                    por nuestra Radio100.cl, que desde ahora también espera ser vuestra.
                    <br></br>
                    <br></br>
                    <span className="font-italic span-about">Radio100.cl, muchísimo más de 100 razones para escucharnos…</span>
                </p>
                <hr className="my-4"></hr>
            </div>
        </div>
    );
}

export default About;
