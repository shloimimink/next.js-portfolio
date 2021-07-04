import {sanityClient} from "../../config/sanity";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from '@sanity/block-content-to-react'
import Layout from "../../components/Layout";
import {singlePostQuery} from "../api/index";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source)
}

export default function SinglePost({post}) {

    if (!post) return <div>Loading...</div>

    return (
        <Layout>
            <main className="bg-gray-200 min-h-screen p-12">
                <article className="container shadow-lg mx-auto bg-gray-300 rounded-lg">
                    <header className="relative">
                        <div className="absolute h-full w-full flex items-center justify-center p-8">
                            <div className="bg-white bg-opacity-75 rounded p-12">
                                <h1 className="cursive text-3xl lg:text-6xl mb-4">
                                    {post.title}
                                </h1>
                                <div className="flex justify-center text-gray-800">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={urlFor(post.authorImage).url()}
                                         alt={post.name}
                                         className="w-10 h-10 rounded-full"
                                    />
                                    <p className="cursive flex items-center pl-2 text-2xl">
                                        {post.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img
                            src={post.mainImage.asset.url}
                            alt={post.title}
                            className="w-full object-cover rounded-t"
                            style={{height: "400px"}}
                        />
                    </header>
                    <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                        <BlockContent blocks={post.body} projectId="enqhqtvv" dataset="production"/>
                    </div>
                </article>
            </main>
        </Layout>

    );
};


export async function getStaticPaths() {
    const paths = await sanityClient.fetch(
        `*[_type == "post" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`
    );

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({params}) {
    const {slug} = params;
    const post = await sanityClient.fetch(singlePostQuery(), {slug});
    return {props: {post}};
}