import './Experience.css'
import { experiences } from "../mocks/experience_data.js"
import { BriefcaseIcon } from "./Icons.jsx"

function ExperienceItem({ date, title, description }) {
    return (
        <>
            <div className='rounded-full'></div>
            <time>{date}</time>
            <h3>{title}</h3>
            <p>{description}</p>
        </>
    )
}

export function Experience() {
    return (
        <section className='section-xp' id="Experience">
            <h2 className="h2-xp-icon-subtitle"> <BriefcaseIcon /> Experiencia laboral</h2>
            <ol className='time-line-ol'>
                {
                    experiences.map(experience => (
                        <li key={experience.id}>
                            <ExperienceItem {...experience} />
                        </li>
                    ))
                }
            </ol>
        </section>
    )
}