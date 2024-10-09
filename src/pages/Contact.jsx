import LineGradient from "../components/LineGradient";
import contactImage from '../assets/contact-image.jpeg'; 

const Contact = () => {
    return (
        <section className="mt-8 flex flex-col justify-center items-center">
            <img 
                src={contactImage} 
                className="flex items-center justify-center h-[36rem] w-[30rem] rounded-full mb-8" 
                alt="Contact"
            />
            
            <div className="">
                <p className="font-serif font-semibold text-4xl">
                    <span className="text-red">CONTACT {""}</span>ME
                </p>
                <div className="flex justify-center mt-5">
                </div>
            </div>
            
            <LineGradient width="w-1/3" />
            
            <p className="mt-10 mb-10 pb-24 font-semibold hover:text-amber-500 transition duration-500">
                Hey There! 
                <br />I'm not really big on posting or checking my Socials.
                <br />But, Let's Connect on my Socials anyways!
            </p>
        </section>
    );
};

export default Contact;
