import React from "react";

const About: React.FC = () => {
  return (
    <main className="flex-1 p-10 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <section
        id="about"
        className="about-content bg-white p-8 rounded-lg shadow-lg max-w-4xl text-center lg:ml-64 mx-4"
      >
        <h1 className="text-4xl mb-6 text-primary">About Me</h1>
        <p className="text-lg mb-6 text-secondary">
          Hi, I'm Uttam. I'm a final-year student pursuing a Bachelor's in
          Computer Science and Engineering with a specialization in AI and ML.
          As an enthusiastic and competitive student, I am eager to contribute
          to team success through hard work, attention to detail, and excellent
          organizational skills.
        </p>
        <p className="text-lg mb-6 text-secondary">
          My strengths lie in Machine Learning, Web Development, and Database
          Management. I have a solid understanding of C, C++, and Python, and I
          excel in developing innovative solutions in both experimental and
          practical coding environments. My expertise includes:
        </p>
        <h2 className="text-3xl mb-6 text-primary">Technical Skills</h2>
        <div className="skills flex flex-wrap justify-center gap-4 mb-6">
          <div className="skill bg-primary text-white py-2 px-4 rounded-full flex items-center">
            <i className="fas fa-code mr-2"></i>
            <span>
              Languages: Python, JavaScript, Java, C/C++, HTML/CSS, PHP, SQL
            </span>
          </div>
          <div className="skill bg-primary text-white py-2 px-4 rounded-full flex items-center">
            <i className="fas fa-database mr-2"></i>
            <span>Databases: MySQL, cloud, MongoDB</span>
          </div>
          <div className="skill bg-primary text-white py-2 px-4 rounded-full flex items-center">
            <i className="fas fa-cube mr-2"></i>
            <span>Libraries: NumPy, Pandas, OpenCV</span>
          </div>
          <div className="skill bg-primary text-white py-2 px-4 rounded-full flex items-center">
            <i className="fas fa-cogs mr-2"></i>
            <span>
              Frameworks: Express.js, React, Node.js, Tailwind CSS, Bootstrap
            </span>
          </div>
          <div className="skill bg-primary text-white py-2 px-4 rounded-full flex items-center">
            <i className="fas fa-tools mr-2"></i>
            <span>
              Tools & Technologies: Git, Docker, AWS
            </span>
          </div>
        </div>
        <p className="text-lg text-secondary">
          I am passionate about exploring new technologies and continually improving my skills to solve complex and significant real-world problems. I am seeking an opportunity to work in a position that combines my skills in Software Engineering, offers professional development, provides interesting experiences, and fosters personal growth.
        </p>
      </section>
    </main>
  );
};

export default About;
