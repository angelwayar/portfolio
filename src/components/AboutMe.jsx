import './AboutMe.css';
import { ProfileCheckIcon } from "./Icons.jsx"

export function AboutMe() {
    return (
        <section
            className='section-xp'
            style={{
                paddingTop: '8rem',
                paddingBottom: '3rem'
            }}
            id="About-me"
        >
            <h2><ProfileCheckIcon /> Sobre mi</h2>
            <section className="aboutme-section">
                <div>
                    <p>
                        Me llamo Ángel, soy ingeniero de sistemas. Desde niño me llamó la atención
                        cómo funcionaban los programas y los circuitos, hasta que se me dio la oportunidad de aprender en la universidad.
                        <strong>Lideré equipos de desarrollo en Banco Fassil</strong>.
                    </p>
                    <p>
                        Algunos de mis éxitos se dieron dentro del banco, como la <strong>implementación de pantallas dinámicas</strong>
                        para los distintos flujos de servicios de la aplicación móvil, desarrollada en Flutter.
                    </p>
                    <p>
                        Soy un entusiasta de <strong>TensorFlow para el desarrollo de Machine Learning</strong>, apasionado por el desarrollo de software, creativo, analítico y colaborativo.
                    </p>
                </div>
                <img className="img-about-me" src="./me.jpeg" alt="angel_wayar" />
            </section>
        </section>
    )
}