import * as React from 'react';
import GithubIcon from '../public/asset/icons/github';
import InIcon from '../public/asset/icons/in';
import FacebookIcon from '../public/asset/icons/facebook';
import GmailIcon from '../public/asset/icons/gmail';
export interface ProfileProps {}

const Profile: React.FunctionComponent<ProfileProps> = () => {
    return (
        <div className="relative flex flex-col flex-1 h-full lg:flex-row">
            <div className="lg:w-2/6 lg:relative">
                <div className="absolute z-20 w-full lg:-right-40 lg:top-40 lg:w-96">
                    <div className="flex flex-col items-center pt-8 pb-2 mx-2 space-y-4 shadow-xl lg:pt-16 lg:pb-0 bg-dawn-pink-500">
                        <div className="w-40 overflow-hidden rounded-full ">
                            <img src="/asset/images/avatar.png" className="object-cover w-full h-full" alt="Nguyen Thai Thinh" />
                        </div>
                        <div className="text-3xl font-bold text-center lg:pb-4">
                            <h1>Nguyen</h1>
                            <h1>Thai Thinh</h1>
                        </div>
                        <div className="w-20 h-0.5 bg-blue-600 "></div>
                        <div className="top-0 lg:absolute lg:space-y-8 -right-80">
                            <p className="hidden font-bold text-8xl lg:block ">Hello</p>
                            <div className="hidden text-xl font-semibold lg:block">
                                <p>I'm Nguyen Thai Thinh</p>
                                <p>I'm a student at FPT University</p>
                            </div>
                            <div className="space-x-4 font-semibold ">
                                <a
                                    href="#"
                                    className="inline-block px-4 py-1 text-white duration-300 bg-blue-600 border-2 border-blue-600 hover:border-black hover:text-black rounded-3xl hover:bg-dawn-pink-500"
                                >
                                    RESUME
                                </a>
                                <a
                                    href="#"
                                    className="inline-block px-4 py-1 duration-300 border-2 border-black rounded-3xl hover:bg-blue-600 hover:text-white hover:border-blue-600"
                                >
                                    PROJECTS
                                </a>
                            </div>
                            <div className="hidden opacity-70 lg:block ">
                                <p>About Me:</p>
                                <p className="w-72">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                                    mollit. Exercitation veniam consequat sunt nostrud amet.
                                </p>
                            </div>
                        </div>

                        <p className="inline-block py-4 text-xl font-thin tracking-widest">BACKEND DEVELOPER</p>
                        <div className="flex items-center justify-center w-full p-2 space-x-4 bg-white ">
                            <GithubIcon />
                            <InIcon />
                            <FacebookIcon />
                            <GmailIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white h-36 lg:h-0 lg:w-0"></div>
            <div className="flex-1 h-full lg:absolute lg:flex-none lg:w-2/6 bg-sisal-500 ">
                <p className="opacity-0">1</p>
            </div>
        </div>
    );
};

export default Profile;
