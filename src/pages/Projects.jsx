import LineGradient from "../components/LineGradient";

const Project = ({ title, subtitle, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-slate-300 z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <div className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl ">{title}</p>
        <p className="mt-7">
          {subtitle}
          <br></br>
          <a href={link} >
            Link To Project
          </a>
        </p>
      </div>
      <img src={require(`../assets/${projectTitle}.jpeg`)} className="h-96 w-full" alt={projectTitle} />
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-24 pb-24">
      <div className="md:w-2/5 mx-auto text-center">
        <div>
          <p className="font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Various Projects from small scale to big scale including technologies
          like HTML, CSS, JavaScript, TailWindCSS, ReactJS, C, C++, GitHub, etc.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="sm:grid sm:grid-cols-2">
          <Project
            title="Project 1"
            subtitle="IMDB Clone Website created using TAILWINDCSS , React"
            link="https://github.com/anirudhsaroha/MovieApp"
          />
          <Project
            title="Project 2"
            subtitle="Crop Disease Ddentification Website created using TAILWINDCSS , React"
            link="https://github.com/anirudhsaroha/CropDiseaseDetection"
          />
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
