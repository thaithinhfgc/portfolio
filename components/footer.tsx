import * as React from 'react';

import GithubIcon from '../public/asset/icons/github-sm';
import InIcon from '../public/asset/icons/in-sm';
import FacebookIcon from '../public/asset/icons/facebook-sm';
import GmailIcon from '../public/asset/icons/gmail-sm';
export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
    return (
        <div className="z-10 flex flex-col-reverse justify-between w-full px-8 py-4 bg-white md:flex-row md:items-center">
            <p className="pt-4 font-medium md:pt-0">&copy;by Thai Thinh</p>
            <div className="flex flex-wrap space-y-2 md:flex-nowrap md:space-x-8 md:space-y-0 ">
                <div className="w-1/2 text-left md:text-center ">
                    <p className="font-semibold">Call</p>
                    <a href="#">08 5352 8202</a>
                </div>
                <div className="w-1/2 text-left md:text-center">
                    <p className="font-semibold">Write</p>
                    <a href="#">thaithinhfgc.site</a>
                </div>
                <div className="text-left md:text-center">
                    <p className="font-semibold">Follow</p>
                    <div className="flex space-x-2">
                        <a href="https://github.com/thaithinhfgc" target="_blank">
                            <GithubIcon />
                        </a>
                        <a href="https://www.linkedin.com/in/thaithinhfgc/" target="_blank">
                            <InIcon />
                        </a>
                        <a href="https://www.facebook.com/thaithinhfgc/" target="_blank">
                            <FacebookIcon />
                        </a>
                        <a href="mailto:thaithinhbanzai79@gmail.com" target="_blank">
                            <GmailIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
