import Layout from "../components/Layout";

export default function MainPage() {
    return (
        <Layout>
            <main>
                <div
                    alt="Programming"
                    className="homeImg absolute object-cover w-full h-full"
                />
                <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                    <h1 className="text-6xl text-gray-400 font-bold cursive leading-none lg:leading-snug home-name">Hi.
                        I'm
                        Shloimi</h1>
                </section>
            </main>
        </Layout>

    )
}