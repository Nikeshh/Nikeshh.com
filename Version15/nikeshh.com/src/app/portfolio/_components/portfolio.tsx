import { ChevronDown, Eye, ArrowLeft } from "lucide-react";
import { useState } from "react";
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

const Portfolio = ({ activeNavbar, projects }: Props) => {
  // Filter projects based on view
  const filteredProjects = projects.filter(project => project.view !== 'Development Showcase');
  const developmentShowcaseProjects = projects.filter(project => project.view === 'Development Showcase');

  // Get unique categories for filtering
  const projectTags = Array.from(new Set(filteredProjects.map(item => item.category)));

  // State for the currently selected filter
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  // State for the currently selected project
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // State for the visibility of the filter select dropdown
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // Handle filter button click
  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    setDropdownOpen(false); // Close dropdown after selecting a filter
  };

  // Handle project click
  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  // Handle back button click
  const handleBackClick = () => {
    setSelectedProject(null);
  };

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Determine which projects to display based on the selected filter
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
              <ul className="select-list">
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

            {/* Project List */}
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
          </section>
        </>
      )}
    </article>
  );
};

export default Portfolio;
