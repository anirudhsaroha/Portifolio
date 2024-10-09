import SocialMediaIcons from "../components/SocialMediaIcons";
import profileImage from '../assets/profile-image.png'; 

const Landing = ({ setSelectedPage }) => {

    return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10 px-16">

            <div className="z-30 mt-12 md:mt-32">

                <div>
                    <p className="text-6xl z-10 text-center md:text-start">
                        Anirudh {""}
                        <span className="z-20 before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1] text-pink-500 ">
                            Saroha
                        </span>
                    </p>
                    <p className="mt-10 mb-7 text-sm text-center md:text-start">
                        Just a Web-Dev & Competitive Coding Enthusiast. 
                        <br />Passionate Coder. 
                        <br />Turning Coffee 🥤 into Code ✌🏻. 
                        <br />Happy Coding!
                    </p>
                </div>

                <div className="flex mt-5 justify-center md:justify-start">
                    <a
                        className="bg-gradient-to-r from-[#EECDA3] to-[#EF629F] text-deep-blue rounded-sm py-3 px-7 font-semibold
                            hover:bg-blue hover:text-white transition duration-500"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        Contact Me
                    </a>
                    <a
                        className="rounded-r-sm border border-1 border-bg-gradient-r from-[#EECDA3] to-[#EF629F] py-0.5 pr-0.5"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        <div
                            className="bg-deep-blue hover:text-pink-500 transition duration-500 w-full h-full flex items-center
                                justify-center px-10" 
                        >
                            Let's Talk.
                        </div>
                    </a>
                </div>

                <div className="flex mt-5 justify-center md:justify-start">
                    <SocialMediaIcons />
                </div>
            </div>

            <div className=" relative flex justify-center z-10 mt-16">
                <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
                    before:rounded-t-full before:w-full before:h-full before:border-2
                    before:border-blue before:z-[-1]"
                >
                    <img 
                        className="z-10 h-[26rem] w-60 rounded-t-full"
                        src={profileImage} 
                        alt="Profile"
                    />
                </div>
            </div>
        </section>
    );
};

export default Landing;
