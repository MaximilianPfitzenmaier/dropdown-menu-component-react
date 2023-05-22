/* eslint linebreak-style: ["error", "windows"]*/

// import Components
import Dropdown from '../components/dropdown';

// import data
import {dropdownArray1, dropdownArray2} from '../assets/data/data';

// import styles
import '../assets/scss/dropdown.scss';

const dropDownHandler = (option) => {
  // do fancy stuff
  console.log(option);
};

/**
 * Home Component
 * @return {Home}
 */
const Home = () => {
  return (
    <>
      <div className='row'>
        <div className="container mt-3">
          <Dropdown
          // isSearchable
          // isMulti
            placeHolder="Select..."
            options={dropdownArray1}
            onChange={(value) => dropDownHandler(value)}
          />
        </div>

        <div className="container mt-3">
          <Dropdown
            isSearchable
            // isMulti
            placeHolder="Select..."
            options={dropdownArray2}
            onChange={(value) => dropDownHandler(value)}
          />
        </div>

        <div className='container mt-3'>
          <Dropdown
          // isSearchable
            isMulti
            placeHolder="Select..."
            options={dropdownArray1}
            onChange={(value) => dropDownHandler(value)}
          />
        </div>

        <div className='container mt-3'>
          <Dropdown
            isSearchable
            isMulti
            placeHolder="Select..."
            options={dropdownArray2}
            onChange={(value) => dropDownHandler(value)}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
