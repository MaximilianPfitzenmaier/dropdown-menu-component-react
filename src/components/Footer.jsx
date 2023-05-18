import '../assets/scss/footer.scss';

/**
 * Footer Component
 * @return {Footer} The sum of the two numbers.
 */
const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          <span> &copy; {new Date().getFullYear()} Maximilian Pfitzenmaier</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
