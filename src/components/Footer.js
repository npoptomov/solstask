import React from 'react';
import lnLogo from '../assets/Group 79.png';
import fbLogo from '../assets/Group 80.png';
import instaLogo from '../assets/Group 81.png';

const Footer = () => (


    <footer className="text-white bg-black/90">
        <div className="container mx-auto pt-[5.84rem] pb-8 md:justify-between justify-center md:block flex flex-col w-full">
            <div className="flex flex-col lg:flex-row items-start">
                <div className="flex md:flex-row px-4 flex-col lg:w-full lg:justify-between gap-0">
                    <div className="md:mb-0">
                        <p className="md:mb-4 mb-5 flex font-bold md:text-[65px] text-[44px]">
                            Together <br />throught all.
                        </p>
                    </div>
                    <div className="flex md:flex-row flex-col-reverse md:space-x-[35px] self-start md:mt-16 mt-0">
                        <div className="flex flex-row space-x-4 md:mt-0 mt-28 md:mb-0 md:space-x-[35px]">
                            <img src={fbLogo} />
                            <img src={instaLogo} />
                            <img src={lnLogo} />

                        </div>
                        <div
                            className="shrink-0 hover:text-red rounded-full self-center bg-red hover:border-2 border-2 text-white border-[#83B2EE] transition duration-700 py-4 px-14 md:px-8 lg:px-14 bg-[#83B2EE] flex justify-center items-center hover:bg-opacity-0 cursor-pointer"
                        >
                            <a href="">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row border-t-2 border-darkGrey md:justify-between md:mt-20 mt-5 justify-center">
                <div className="mt-6"><a href="">Smarty</a></div>
                <div className="text-mediumGrey mt-6 md:flex hidden smallText">*Copyright 2022. All rights reserved.</div>
            </div>
        </div>
    </footer>

);

export default Footer;
