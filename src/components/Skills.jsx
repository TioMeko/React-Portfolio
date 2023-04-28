import React from "react";
import '../styles/styles.css';

const Skills = () => {
  const skills = [
    {
      category: "Front End",
      list: [
        { name: "HTML", icon: "fab fa-html5" },
        { name: "CSS", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "React", icon: "fab fa-react" },
        { name: "Bootstrap", icon: "fab fa-bootstrap" },
        { name: "jQuery", icon: "fab fa-js" },
      ],
    },
    {
      category: "Back End",
      list: [
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Express", icon: "fas fa-server" },
        { name: "MySQL", icon: "fas fa-database" },
        { name: "MongoDB", icon: "fas fa-database" },
        { name: "PHP", icon: "fab fa-php" },
        { name: "Python", icon: "fab fa-python" },
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12">
            <h2 className="text-center">Skills</h2>
          </div>
        </div>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6 mb-4s">
              <div className="card h-100 skills">
                <div className="card-body">
                  <h3 className="card-title">{skill.category}</h3>
                  <ul className="list-unstyled d-flex flex-wrap">
                    {skill.list.map((item, idx) => (
                      <li
                        key={idx}
                        className="d-flex align-items-center mb-2 me-3"
                      >
                        <i className={`${item.icon} me-2`}></i>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
