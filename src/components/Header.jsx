// import react
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

// import images
import Logo from '../assets/images/logo.jpg';

// import style
import '../assets/scss/header.scss';

const navLinks = [
  {name: 'Home', path: '/'},
  {
    name: 'Sampling',
    path: '/sampling',
  },
];

/**
 * Header Component
 * @return {header} The sum of the two numbers.
 */
const Header = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  return (
    <>
      <header>
        <div className="brand">
          <Link href="/">
            <img src={Logo} className="test" height={60} width={60} alt="" />
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav__main">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    className={currentRoute === link.path ? 'menu-item active' : 'menu-item'}
                    to={link.path}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
