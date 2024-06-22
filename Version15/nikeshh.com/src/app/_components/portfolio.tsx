import { ChevronDown, Eye, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import parse from 'html-react-parser';

type Props = {
  activeNavbar: string;
  projects: {
    id: string;
    name: string;
    subtitle: string;
    category: string;
    link: string;
    linkType: string;
    imageUrl: string;
    tags: string[];
    view: string;
    content: string;
  }[]
};

const Loader = () => (
  <div className="loader-container">
    <div className="spinner"></div>
  </div>
);

const Portfolio = ({ activeNavbar, projects }: Props) => {
  const [loading, setLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const filteredProjects = projects.filter(project => project.view !== 'Development Showcase');
  const developmentShowcaseProjects = projects.filter(project => project.view === 'Development Showcase');
  const projectTags = Array.from(new Set(filteredProjects.map(item => item.category)));

  const handleFilterClick = (filter: string) => {
    setLoading(true);
    setSelectedFilter(filter);
    setDropdownOpen(false);
    setTimeout(() => setLoading(false), 1000);
  };

  const handleProjectClick = (project: typeof projects[0]) => {
    setLoading(true);
    setSelectedProject(project);
    setTimeout(() => setLoading(false), 1000);
  };

  const handleBackClick = () => {
    setLoading(true);
    setSelectedProject(null);
    setTimeout(() => setLoading(false), 1000);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const displayedProjects = selectedFilter === 'All' 
    ? [...filteredProjects, ...developmentShowcaseProjects]
    : selectedFilter === 'Development Showcase'
    ? developmentShowcaseProjects
    : filteredProjects.filter(project => project.category === selectedFilter);

  return (
    <article className={`portfolio ${activeNavbar === "Portfolio" ? "active" : ''}`} data-page="portfolio">
      {selectedProject ? (
        <section className="project-details">
          <button className="back-button" onClick={handleBackClick}>
            <ArrowLeft />
            Back to Projects
          </button>
          <img src={selectedProject.imageUrl} alt={selectedProject.name} />
          <div className="mt-4 rich-text flex justify-center">
            {parse(selectedProject.content)}
          </div>
          <a href={selectedProject.link} target={selectedProject.linkType} className="text-center mt-4">
            Visit Project
          </a>
        </section>
      ) : (
        <>
          <header>
            <h2 className="h2 article-title">Portfolio</h2>
          </header>

          <section className="projects">
            {/* Filter List */}
            <ul className="filter-list">
              <li className="filter-item">
                <button className={selectedFilter === 'All' ? 'active' : ''} onClick={() => handleFilterClick('All')} data-filter-btn>
                  All
                </button>
              </li>

              {projectTags.map((tag, index) => (
                <li className="filter-item" key={index}>
                  <button className={selectedFilter === tag ? 'active' : ''} onClick={() => handleFilterClick(tag)} data-filter-btn>{tag}</button>
                </li>
              ))}

              {developmentShowcaseProjects.length > 0 && (
                <li className="filter-item">
                  <button className={selectedFilter === 'Development Showcase' ? 'active' : ''} onClick={() => handleFilterClick('Development Showcase')} data-filter-btn>Development Showcase</button>
                </li>
              )}
            </ul>

            {/* Filter Select Box */}
            <div className="filter-select-box">
              <button className={`filter-select ${dropdownOpen ? 'active' : ''}`} data-select onClick={toggleDropdown}>
                <div className="select-value" data-select-value>
                  {selectedFilter}
                </div>
                <div className="select-icon">
                  <ChevronDown />
                </div>
              </button>
              <ul className={`select-list ${dropdownOpen ? 'open' : ''}`}>
                <li className="select-item">
                  <button data-select-item onClick={() => handleFilterClick('All')}>All</button>
                </li>
                {projectTags.map((tag, index) => (
                  <li className="select-item" key={index}>
                    <button data-select-item onClick={() => handleFilterClick(tag)}>{tag}</button>
                  </li>
                ))}
                {developmentShowcaseProjects.length > 0 && (
                  <li className="select-item">
                    <button data-select-item onClick={() => handleFilterClick('Development Showcase')}>Development Showcase</button>
                  </li>
                )}
              </ul>
            </div>

            {loading ? (
              <Loader />
            ) : (
              <ul className="project-list">
                {displayedProjects.map(project => (
                  <li
                    className="project-item active"
                    data-filter-item
                    data-category={project.category.toLowerCase()}
                    key={project.id}
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="project-content-wrapper">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <Eye />
                        </div>
                        <img
                          src={project.imageUrl}
                          alt={project.name}
                          loading="lazy"
                        />
                      </figure>
                      <h3 className="project-title">{project.name}</h3>
                      <p className="project-category">{project.category}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </>
      )}
    </article>
  );
};

export default Portfolio;
