import "./Projects.css";
import { CodeIcon } from "./Icons.jsx";
import { projects } from "../mocks/projects_data.js";

function Card({ title, img, description, url, stack }) {
    return (
        <a href={url}>
            <div className="image-container">
                <img
                    className="image"
                    style={{ objectFit: "cover" }}
                    src={img}
                    alt=""
                />
                <div>
                    <h2 className="h2-card">{title}</h2>
                    <p className="p-card">{description}</p>
                    <div className="stack-card">
                        {
                            stack.map(
                                tech => (
                                    <p key={tech.id} style={{ color: tech.color }}>{tech.technology}</p>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </a>
    );
}

export function Projects({ title, description, stack, url }) {
    return (
        <section
            className="section-xp"
            style={{
                paddingTop: '8rem',
                marginBottom: '3rem'
            }}
            id="Projects"
        >
            <h2 className="h2-xp-icon-subtitle"> <CodeIcon />Proyectos</h2>
            <div className="grid-container">
                {
                    projects.map(
                        project => (
                            <div className="grid-item ">
                                <Card key={project.id} {...project} />
                            </div>
                        )
                    )
                }
            </div>
        </section>
    );
}


