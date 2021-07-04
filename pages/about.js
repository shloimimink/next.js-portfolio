import {sanityClient} from "../config/sanity"
import Layout from "../components/Layout"
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import {aboutQuery} from "./api/index"

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
    return builder.image(source)
}

export default function About({author}) {

    if (!author) return <div>Loading...</div>

    return (
        <Layout>
            <div className="aboutImg absolute object-cover w-full h-full">
                <main className="relative">
                    <div className=" p-10 lg:pt-48 container mx-auto relative">
                        <section className="bg-blue-100 rounded-lg shadow-2xl lg:flex p-20 opacity-80">
                            <img
                                src={urlFor(author.authorImage).url()}
                                className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                                alt={author.name}/>
                            <div className="text-lg flex flex-col justify-center">
                                <h1 className="cursive text-6xl text-gray-500 mb-4">
                                    Hey there I'm{" "}
                                    <span className="text-gray-500">{author.name}</span>
                                </h1>
                                <div className="prose lg:prose-xl text-gray-600">
                                    <BlockContent blocks={author.bio} projectId="enqhqtvv" dataset="production"/>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </Layout>

    )
}

export async function getStaticProps() {
    const author = await sanityClient.fetch(aboutQuery())
    return {props: {author}}
}