import {sanityClient} from "../config/sanity";
import Layout from "../components/Layout";
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {projectQuery} from "./api/index";

export default function ProjectPage({project}) {
    return (
        <Layout>
            <main className="bg-gray-200 min-h-screen p-12">
                <section className="container mx-auto">
                    <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
                    <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                        Welcome to my projects page!
                    </h2>
                    <section className="grid grid-cols-2 gap-8">
                        {project &&
                        project.map((proj, index) => (
                            <article className="relative rounded-lg shadow-xl bg-white p-16"
                                     key={index}
                            >
                                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-pink-700">
                                    <a
                                        href={proj.link}
                                        alt={proj.title}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400"
                                    >
                                        {proj.title}
                                    </a>
                                </h3>
                                <div className="text-gray-500 text-xs space-x-4">
                                    <span>
                    <strong className="font-bold">Type</strong>:{" "}
                                        {proj.projectType}
                                </span>
                                    <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                        {proj.description}
                                    </p>
                                    <a
                                        href={proj.link}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="text-blue-400 font-bold hover:underline hover:text-gray-600 text-xl"
                                    >
                                        Project{" "}
                                        <FontAwesomeIcon icon={faEye} color="black"/>
                                    </a>
                                    <a
                                        href={proj.GithubLink}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="text-blue-400 font-bold hover:underline hover:text-gray-600 text-xl"
                                    >
                                        code on gitHub{" "}
                                        <FontAwesomeIcon icon={faGithub} color="black"/>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </section>
                </section>
            </main>
        </Layout>
    )
}

export async function getStaticProps() {
    const project = await sanityClient.fetch(projectQuery())
    return {props: {project}}
}