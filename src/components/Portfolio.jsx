import React from 'react';
import PortfolioItem from './PortfolioItem';
import PortfolioItemFeatured from './PortfolioItemFeatured';
import Images from './Images';
import BackendVideo from '../videos/Backend_Staff.webm';
import eCommerce from '../videos/E-Commerce_Backend.mp4'
import '../styles/styles.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'TotoroBank',
      description: 'This project was created to simulate a bank website that appeals to the younger demographic, and provides a user friendly interface with ease of use that is both fun and easily navigable. Users can either log in or create an account and when logged in, users can view their balance, deposits, and withdrawals. This application features dynamic HTML and CSS powered by JavaScript.',
      image: Images.tBank,
      link: 'https://murmuring-escarpment-43025.herokuapp.com/login',
      featured: true,
    },
    {
      title: 'The Tech Edge',
      description: 'This is a tech blog website built using the Model-View-Controller (MVC) architectural pattern. This pattern separates the application into three interconnected parts: the model, the view, and the controller. The model represents the data and the business logic of the application. In this tech blog, the model handles the database interactions, such as creating, reading, updating, and deleting blog posts and user data.',
      image: eCommerce,
      link: 'https://thetechedge-f506d3011f09.herokuapp.com/',
    },
    {
      title: 'Déjà Brew',
      description: 'Deja Brew is a handy application that allows users to search for breweries in local cities or anywhere in the United States. A user will select a state with the dropdown menu and type a city that is within the state selected. Once the search button is clicked, the following page will be populated with the breweries in the city.',
      image: Images.dBrew,
      link: 'https://tiomeko.github.io/deja-brew/',
    },
    {
      title: 'Backend-Staff',
      description: "Backend-Staff is a command-line application built with Node.js, Inquirer, and MySQL. It provides a convenient way to manage a company's employee database",
      image: BackendVideo,
      link: 'https://github.com/TioMeko/Backend-Staff',
    },
  ];

  console.log(projects[3].image)

  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-wrapper">
        <div className="featured-grid">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <PortfolioItemFeatured
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            ))}
        </div>
        <div className="masonry-grid">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <PortfolioItem
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
