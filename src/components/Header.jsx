/* eslint linebreak-style: ["error", "windows"]*/

// import react
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

// import style
import '../assets/scss/header.scss';

const navLinks = [
  {name: 'Home', path: '/'},
];

/**
 * Header Component
 * @return {Header}
 */
const Header = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  return (
    <>
      <header>
        <div className="brand">
          <Link href="/">
            {/* <img src={Logo} className="test" height={60} width={60} alt="" /> */}
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
