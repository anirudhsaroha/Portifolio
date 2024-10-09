import LineGradient from "../components/LineGradient";

const About = () => {
  return (
    <section id="about" className="pt-36 pb-24 flex flex-col justify-center items-center h-full">

      <div className="md:w-2/5 mx-auto text-center">
      
        <div>
          <p className="font-serif font-semibold text-4xl">
            <span className="text-red">ABOUT {""}</span>ME
          </p>

          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          Hey there! I'm a computer science graduate.
          <br />
          I'm super into Data Structures & Algorithms and Web Development.
          <br />I love the challenge of solving tricky problems with algorithms
          and making sweet websites that are both robust and dynamic.
          <br /> I'm always looking to improve my skills and learn new
          technologies and approaches to problem-solving.
        </p>

      </div>

    </section>
  );
};

export default About;
