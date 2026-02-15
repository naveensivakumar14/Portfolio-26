

const About = () => {

  return (
  
    
    <section
      id="about"
      className="min-h-screen bg-[#0f172a] text-white py-10" 
    >

     
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-gray-200 mt-6 max-w-4xl mx-auto text-sm md:text-xl" data-aos="fade-up duration-3000">
            Passionate about building meaningful websites that blend creativity and functionality. 
          </p>
        </div>

        <div className="flex justify-center items-center md:max-w-3/4 mx-auto">

          {/* LEFT CONTENT */}
          <div className="md:space-y-6 text-gray-300 leading-relaxed text-sm md:text-xl" data-aos="fade-right duration-3000">

            <p>
              I am, 
              a MERN Stack Developer focused on building modern, scalable,
              and performance-driven web applications. Developing full-stack applications
              using React, Node.js, Express, and MongoDB.
              I enjoy transforming complex problems into clean,
              efficient, and user-friendly solutions.
            </p>
            <p>
              Beyond coding, I am passionate about creative design,
              UI aesthetics, and crafting smooth user experiences.
              I believe web development is not just about logic —
              it’s about creating impact through technology.
            </p>

          </div>
        </div>
      </div>
      
    </section>
  );
};

export default About;
