import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return (
        <footer id="contact" className="bg-pink-500">
            <div className="px-16">
                <div className="flex justify-between items-center">
                    <SocialMediaIcons />
                    <div className="md:flex justify-center md:justify-between text-center">
                        <p className="font-playfair text-md text-yellow text-xl pb-5">
                            ©️2024 - All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;