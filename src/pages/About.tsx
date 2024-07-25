import React from 'react';

const About: React.FC = () => {
  return (
    <main className="flex-1 p-10 flex flex-col items-center justify-center text-center overflow-y-auto">
      <section id="about" className="about-content bg-white p-8 rounded-lg shadow-lg max-w-4xl text-center">
        <h1 className="text-4xl mb-6 text-primary">About Me</h1>
        <p className="text-lg mb-6 text-secondary">
          Hi, I'm Uttam, a final year student pursuing a Bachelor's in Computer Science and Engineering with a specialization in AI and ML. I'm an enthusiastic and competitive student eager to contribute to team success through hard work, attention to detail, and excellent organizational skills.
        </p>
        <p className="text-lg mb-6 text-secondary">
          With a clear understanding of C, C++, and Python, my strengths lie in Machine Learning and Web Development. I'm keenly interested in experimental areas as well as coding and am well-versed in C/C++, Python, Machine Learning, and web development.
        </p>
        <h2 className="text-3xl mb-6 text-primary">Technical Skills</h2>
        <div className="skills flex flex-wrap justify-center gap-4 mb-6">
          <div className="skill bg-primary text-white py-2 px-4 rounded-full flex items-center">
            <i className="fas fa-code mr-2"></i> 
            <span>Languages: Python, Java, JavaScript, C/C++, HTML/CSS, Bash</span>
          </div>
          <div className="skill bg-primary text-white py-2 px-4 rounded-full flex items-center">
            <i className="fas fa-database mr-2"></i> 
            <span>Databases: MySQL, PostgreSQL, MongoDB</span>
          </div>
          <div className="skill bg-primary text-white py-2 px-4 rounded-full flex items-center">
            <i className="fas fa-cube mr-2"></i> 
            <span>Libraries: NumPy, Pandas, OpenCV</span>
          </div>
          <div className="skill bg-primary text-white py-2 px-4 rounded-full flex items-center">
            <i className="fas fa-cogs mr-2"></i> 
            <span>Frameworks: Flask, Django, Node.js, Keras, TensorFlow, PyTorch, Bootstrap, Apache Beam</span>
          </div>
          <div className="skill bg-primary text-white py-2 px-4 rounded-full flex items-center">
            <i className="fas fa-tools mr-2"></i> 
            <span>Tools & Technologies: Git, Docker, AWS, GCP, Heroku, JIRA</span>
          </div>
        </div>
        <p className="text-lg text-secondary">
          I'm looking for an opportunity to work in a challenging position combining my skills in Software Engineering, which provides professional development, interesting experiences, and personal growth.
        </p>
      </section>
    </main>
  );
};

export default About;
