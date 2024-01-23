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
                        Me llamo Ángel, soy ingeniero de sistemas, desde niño me llamo la atención,
                        sobre como funcionaban los programas y circuitos, hasta que se me dio la oportunidad de aprender en la universidad.
                        <strong> Lidere equipos de desarrollo en Banco Fassil</strong>.
                    </p>
                    <p>
                        Algunos de mis exitos, se dieron dentro del Banco, como la <strong>implementación de pantallas dinámicas</strong>,
                        para los distintos flujos de servicios de la app móvil, desarrollada en Flutter.
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