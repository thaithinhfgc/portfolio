import * as React from 'react';
import Link from 'next/link';
import LogoIcon from '../public/asset/icons/logo';

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
    const [click, setClick] = React.useState(false);

    return (
        <div className="fixed z-50 w-full p-4 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-2 lg:px-8 lg:items-end">
                <div className="items-end space-x-4 lg:flex space">
                    <div className="flex space-x-2">
                        <LogoIcon />
                        <Link href="/">
                            <h1 className="text-2xl font-bold">THAI THINH</h1>
                        </Link>
                    </div>

                    <p className="font-medium tracking-wide lg:font-normal">
                        <span className="hidden mr-2 lg:inline-block">/</span>
                        BACKEND DEVELOPER
                    </p>
                </div>
                <ul className="hidden space-x-4 lg:flex">
                    <li className="font-bold duration-300 lg:font-semibold hover:text-blue-600">
                        <Link href="/">ABOUT ME</Link>
                    </li>
                    <li className="font-bold duration-300 lg:font-semibold hover:text-blue-600">
                        <Link href="/resume">RESUME</Link>
                    </li>
                    <li className="font-bold duration-300 lg:font-semibold hover:text-blue-600">
                        <a href="https://github.com/thaithinhfgc" target="__blank">
                            PROJECTS
                        </a>
                    </li>
                    <li className="font-bold duration-300 lg:font-semibold hover:text-blue-600">
                        <Link href="/contact">CONTACT</Link>
                    </li>
                </ul>
                <div className="flex flex-col space-y-2 lg:hidden" onClick={() => setClick(!click)}>
                    <div className={`w-4 h-1 bg-blue-600 rounded-lg transform duration-300 ${click && 'translate-x-4'}`}></div>
                    <div className="w-8 h-1 bg-blue-600 rounded-lg"></div>

                    <div className={`self-end w-4 h-1 bg-blue-600 rounded-lg transform duration-300 ${click && '-translate-x-4'} `}></div>
                </div>
            </div>
            <button
                className={`fixed left-0 w-full h-full grid place-items-center bg-dawn-pink-500 transform duration-300 cursor-pointer z-50 lg:hidden ${
                    click ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <ul className="space-y-8 text-center transform -translate-y-16 ">
                    <li className="text-4xl font-bold duration-300 hover:text-blue-600">
                        <Link href="/">ABOUT ME</Link>
                    </li>
                    <li className="text-4xl font-bold duration-300 hover:text-blue-600">
                        <Link href="/resume">RESUME</Link>
                    </li>
                    <li className="text-4xl font-bold duration-300 hover:text-blue-600">
                        <a href="https://github.com/thaithinhfgc" target="__blank">
                            PROJECTS
                        </a>
                    </li>
                    <li className="text-4xl font-bold duration-300 hover:text-blue-600">
                        <Link href="/contact">CONTACT</Link>
                    </li>
                </ul>
            </button>
        </div>
    );
};

export default Navbar;
