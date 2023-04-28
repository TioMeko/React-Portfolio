import React from 'react';
import PortfolioItem from './PortfolioItem';
import PortfolioItemFeatured from './PortfolioItemFeatured';
import Images from './Images';
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
      title: 'Déjà Brew',
      description: 'Deja Brew is a handy application that allows users to search for breweries in local cities or anywhere in the United States. A user will select a state with the dropdown menu and type a city that is within the state selected. Once the search button is clicked, the following page will be populated with the breweries in the city.',
      image: Images.dBrew,
      link: 'https://tiomeko.github.io/deja-brew/',
    },
    {
      title: 'Work Day Scheduler',
      description: 'The work day scheduler allows anyone to keep track of their tasks on a day to day basis by having the ability to place their tasks in the appropriate time slot.',
      image: Images.wDay,
      link: 'https://tiomeko.github.io/work-day-scheduler/',
    },
    {
      title: 'Artstation',
      description: 'Come check out the adventure that is art!',
      image: Images.pFrog,
      link: 'https://www.artstation.com/tiomeko',
    },
  ];

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
