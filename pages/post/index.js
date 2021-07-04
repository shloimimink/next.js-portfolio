import Layout from "../../components/Layout"
import Link from "next/link";
import {sanityClient, urlFor} from "../../config/sanity"
import {posts} from "../api/index"

export default function PostsPage({post}) {
    return (
        <Layout>
            <main className="bg-gray-200 min-h-screen p-12">
                <section className="container mx-auto">
                    <h1 className="text-5xl flex justify-center cursive">Blog Posts Page</h1>
                    <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my page of blog
                        posts</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {post && post.map((post, index) => (
                            <article key={index}>
                                <Link href={`/post/${post.slug.current}`}>
                                    <a>
                        <span
                            className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-gray-500">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={urlFor(post.mainImage).url()}
                                alt={post.mainImage.alt}
                                className="w-full h-full rounded-r object-cover absolute"
                            />
                        <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                        <h3 className="text-gray-500 text-lg font-blog px-3 py-4 bg-white text-white bg-opacity-75 rounded">
                    {post.title}
                        </h3>
                        </span>
                        </span>
                                    </a>
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </Layout>
    )

}

export async function getStaticProps() {
    const post = await sanityClient.fetch(posts())
    return {props: {post}}
}
