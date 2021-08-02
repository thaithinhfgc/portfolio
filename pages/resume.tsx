import * as React from 'react';

export interface ResumeProps {}

const Resume: React.FunctionComponent<ResumeProps> = () => {
    return (
        <div className="flex-1 py-24 bg-sisal-500">
            <div className="flex flex-col items-center w-full p-2 mx-auto space-y-4 md:w-3/5">
                <div className="flex items-center mb-8 space-x-1 text-3xl font-bold">
                    <div className="w-4 h-4 bg-blue-600"></div>
                    <h1>Resume</h1>
                </div>
                <div className="flex items-center justify-between w-full">
                    <p className="text-2xl font-bold">Experience</p>
                    <a href="#" className="block px-4 py-2 font-semibold text-white bg-blue-600 rounded-3xl">
                        DOWNLOAD CV
                    </a>
                </div>
                <div className="w-full">
                    <ul className="space-y-2">
                        <li>
                            <div className="px-2 py-8 bg-white shadow-md md:flex md:justify-between md:px-16 md:py-16">
                                <div className="flex-1 space-y-2 text-lg">
                                    <p className="font-bold text-blue-600 md:text-2xl ">2022 - Present</p>
                                    <p>JOB POSITION </p>
                                    <p>Company Name</p>
                                    <p>Company Location</p>
                                </div>
                                <div className="flex-1 opacity-70 md:opacity-80 md:pt-16">
                                    <p>
                                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
                                        click me to add your own content and make changes to the font.
                                    </p>
                                    <p>I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-between w-full md:pt-10">
                    <p className="text-2xl font-bold">Education</p>
                </div>
                <div className="w-full">
                    <ul className="space-y-2">
                        <li>
                            <div className="px-2 py-8 bg-white shadow-md md:flex md:justify-between md:px-16 md:py-16">
                                <div className="flex-1 space-y-2 text-lg">
                                    <p className="font-bold text-blue-600 md:text-2xl ">2022 - Present</p>
                                    <p>JOB POSITION </p>
                                    <p>Company Name</p>
                                    <p>Company Location</p>
                                </div>
                                <div className="flex-1 opacity-70 md:opacity-80 md:pt-16">
                                    <p>
                                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
                                        click me to add your own content and make changes to the font.
                                    </p>
                                    <p>I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Resume;
