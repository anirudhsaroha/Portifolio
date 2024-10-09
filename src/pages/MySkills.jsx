import LineGradient from "../components/LineGradient";

const MySkills = () => {

  return (
    <section id="skills" className="pt-0 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <div className="md:w-1/3">
          <p className="font-serif font-semibold text-4xl mb-5">
            My <span className="text-pink-400">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            A Grad with Web development and Data Structures and Algorithms
            knowledge, coupled with a passion for coding,
            possessing a wide range of skills that are highly valuable in the
            tech industry.
          </p>
        </div>

        <div className="mt-16 md:mt-0">
        
            <div className="relative z-0 ml-20 before:absolute before:top-10 before:left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img className="z-10" src={require("../assets/skills-image.png")} alt="skill-img" />
            </div>
          
        </div>
      </div>

      <div className="md:flex md:justify-between mt-16 gap-32">
        <div className="md:w-1/3 mt-10">
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-semibold text-5xl">01</p>
              <p className="font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-sky-500 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            <span className="font-semibold text-xl mt-3">
              Web Developer at GDSC society
            </span>
          </p>
        </div>

        <div className="md:w-1/3 mt-10">
          <div className="relative h-32">
            <div className="z-10">
              <p className=" font-semibold text-5xl">02</p>
              <p className=" font-semibold text-3xl mt-3">
                Web Development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-pink-500 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            <span className=" font-semibold text-xl mt-3">
              HTML, ReactJS, Tailwind CSS, NodeJs, ExpressJs, PostgreSQL
            </span>
          </p>
        </div>

        <div className="md:w-1/3 mt-10">
          <div className="relative h-32">
            <div className="z-10">
              <p className=" font-semibold text-5xl">03</p>
              <p className="font-semibold text-3xl mt-3">
                Data Structures and Algorithm
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow-400 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            <span className=" font-semibold text-xl mt-3">
              C, C++, Python, Java
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
