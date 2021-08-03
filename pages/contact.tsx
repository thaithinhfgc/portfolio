import * as React from 'react';
export interface ContactProps {}

const Contact: React.FunctionComponent<ContactProps> = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-1 py-28 bg-sisal-500">
            <div className="flex flex-col items-center w-full px-2 md:w-112.5">
                <div className="flex items-center mb-8 space-x-1 text-3xl font-bold">
                    <div className="w-4 h-4 bg-blue-600"></div>
                    <h1>Let's Talk</h1>
                </div>
                <div className="w-full px-2 py-8 bg-white rounded-sm shadow-lg md:px-4">
                    <form className="space-y-4">
                        <div className="space-y-4 md:space-x-8 md:flex md:space-y-0 md:justify-between">
                            <div className="md:flex-1">
                                <label className="block">
                                    First Name <span className="font-bold text-blue-600">*</span>
                                </label>
                                <input className="block w-full duration-300 border-b-2 border-gray-300 focus:border-blue-600" />
                            </div>
                            <div className="md:flex-1">
                                <label className="block">
                                    Last Name <span className="font-bold text-blue-600">*</span>
                                </label>
                                <input className="block w-full duration-300 border-b-2 border-gray-300 focus:border-blue-600" />
                            </div>
                        </div>
                        <div className="">
                            <label className="block">
                                Email <span className="font-bold text-blue-600">*</span>
                            </label>
                            <input className="block w-full duration-300 border-b-2 border-gray-300 focus:border-blue-600" />
                        </div>
                        <div className="">
                            <label className="block">
                                Subject <span className="font-bold text-blue-600">*</span>
                            </label>
                            <input className="block w-full duration-300 border-b-2 border-gray-300 focus:border-blue-600" />
                        </div>
                        <div className="">
                            <label className="block">
                                Message <span className="font-bold text-blue-600">*</span>
                            </label>
                            <textarea className="block w-full duration-300 border-b-2 border-gray-300 focus:border-blue-600"></textarea>
                        </div>
                        <div className="text-center md:text-left">
                            <button className="inline-block px-16 py-2 font-semibold text-white bg-blue-600 rounded-3xl">Send</button>
                        </div>
                        <p className="text-center opacity-60">Thank for submitting!</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
