import { Badge } from "@/components/ui/badge";

type Props = {
  activeNavbar: string,
  setActiveNavbar: React.Dispatch<React.SetStateAction<string>>
};

const Navbar = ({ activeNavbar, setActiveNavbar } : Props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button className={`navbar-link ${activeNavbar === 'About' ? 'active' : ''}`} data-nav-link onClick={() => setActiveNavbar('About')}>
            About
          </button>
        </li>

        <li className="navbar-item">
          <button className={`navbar-link ${activeNavbar === 'Resume' ? 'active' : ''}`} data-nav-link onClick={() => setActiveNavbar('Resume')}>
            Resume
          </button>
        </li>

        <li className="navbar-item">
          <button className={`navbar-link ${activeNavbar === 'Portfolio' ? 'active' : ''}`} data-nav-link onClick={() => setActiveNavbar('Portfolio')}>
            Portfolio
          </button>
        </li>

        <li className="navbar-item">
          <button className={`navbar-link ${activeNavbar === 'Blog' ? 'active' : ''}`} data-nav-link onClick={() => setActiveNavbar('Blog')}>
            Blog
          </button>
        </li>

        <li className="navbar-item">
          <button className={`navbar-link ${activeNavbar === 'Contact' ? 'active' : ''}`} data-nav-link onClick={() => setActiveNavbar('Contact')}>
            <Badge>Contact Me</Badge>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
