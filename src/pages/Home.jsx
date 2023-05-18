// import images
import Logo from '../assets/images/logo.jpg';

// import styles
import '../assets/scss/home.scss';

/**
 * Home Component
 * @return {Home} The sum of the two numbers.
 */


const Home = () => {
  return (
    <>
      <div className="container">
        <h1>Welcome To My App</h1>
        <p>This is going to be the coolest app in the world!</p>
        <img src={Logo} alt="Sammy Image" width={200} height={200} />
      </div>
    </>
  );
};

export default Home;
