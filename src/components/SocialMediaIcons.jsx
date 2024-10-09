import linkedin from '../assets/linkedin.png';
import github from '../assets/github-icon.svg';
import leetcode from '../assets/leetcode-icon.png';
import instagram from '../assets/instagram.png';

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/anirudh-saroha-765431292/"
            >
                <img src={linkedin} alt="LinkedIn" />
            </a>
            <a className="hover:opacity-50 transition duration-500 -mt-2"
                href="https://github.com/anirudhsaroha"
            >
                <img src={github} alt="GitHub" />
            </a>
            <a className="hover:opacity-50 transition duration-500 -mt-0.5"
                href="https://leetcode.com/u/anirudh_saroha/"
            >
                <img src={leetcode} alt="LeetCode" />
            </a>
            <a className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com/anirudhsaroha01/"
            >
                <img src={instagram} alt="Instagram" />
            </a>
        </div>
    );
};

export default SocialMediaIcons;
