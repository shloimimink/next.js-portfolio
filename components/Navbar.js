import Link from "next/link";
import {SocialIcon} from "react-social-icons";

export default function Navbar() {
    return (
        <header className="bg-gray-100">
            <div className="container mx-auto px-20 flex justify-between">
                <nav className="flex">
                    <Link href="/" exact>
                        <a className="inline-flex items-center py-6 px-3 mr-4 text-black hover:text-black text-4xl font-bold cursive tracking-widest"
                           activeclassname="text-red"
                        >
                            WebDev
                        </a>
                    </Link>
                    <Link href="/post">
                        <a
                            className="inline-flex items-center py-3 px-3 my-6 rounded text-red hover:text-black"
                            activeClassName="text-red-100 bg-blue-700"
                        >
                            Blog Posts
                        </a>
                    </Link>
                    <Link href="/project">
                        <a
                            className="inline-flex items-center py-3 px-3 my-6 rounded text-red hover:text-black"
                            activeclassname="text-red-100 bg-red"
                        >
                            Projects
                        </a>
                    </Link>
                    <Link href="/about">
                        <a
                            className="inline-flex items-center py-3 px-3 my-6 rounded text-red hover:text-black"
                            activeclassname="text-red-100 bg-red"
                        >
                            About
                        </a>
                    </Link>
                </nav>

                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon
                        url="https://www.facebook.com/shloimi.minkowicz"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{height: 35, width: 35}}
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/shloimi-minkowicz/"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{height: 35, width: 35}}
                    />
                    <SocialIcon
                        url="https://github.com/shloimimink"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{height: 35, width: 35}}
                    />
                </div>
            </div>
        </header>
    )
}