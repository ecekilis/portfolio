import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projekte</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return <ProjectCard key={id} project={project} />;
                })}
            </div>
            <div className={styles.contain}>
                <a href="https://github.com/ecekilis?tab=repositories" className={styles.more}>Alle Meine Projektquellcodes</a>
            </div>
        </section>
    );
};