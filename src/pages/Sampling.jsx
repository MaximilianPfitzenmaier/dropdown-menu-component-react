// import react
import {useState, useRef, useId} from 'react';

// import Components
import Dropdown from '../components/dropdown';
import Canvas from '../components/canvas';

// import data
import {initialArrays, dropdownArrays} from '../assets/data/data';

// import functions
import * as Calculate from '../utils/calculations';

// import styling
import '../assets/scss/sampling.scss';


const Sampling = () => {
  // set IDs
  const canvas1ID = useId();
  const canvas2ID = useId();
  const canvas3ID = useId();
  const canvas4ID = useId();

  // set Refs
  const canvas1Ref = useRef();
  const canvas2Ref = useRef();
  const canvas3Ref = useRef();
  const canvas4Ref = useRef();

  // set array states
  const [array1, setArray1] = useState([...initialArrays.baseArray]);
  const [array2, setArray2] = useState([...initialArrays.zeros]);
  const [array3, setArray3] = useState([...initialArrays.zeros]);
  const [array4, setArray4] = useState([...initialArrays.zeros]);


  const handleButtonClick = () => {
    setArray2([...Calculate.calculateSampling(array2)]);
  };


  const dropDownHandler1 = (selectedArray) => {
    // deep clone
    const array = [...selectedArray];

    // set vaalue of selected dropdown item to this canvas
    setArray1([...array]);

    // calculate FourierTransformation
    const fourierTransform = Calculate.calculateFourierTransformation(array);
    setArray2([...fourierTransform]);
  };

  const dropDownHandler2 = (selectedArray) => {
    // set vaalue of selected dropdown item to this canvas
    const array = [...selectedArray]; // deep clone
    setArray3([...array]);

    // calculate FourierTransformation
    const fourierTransform = Calculate.calculateSampling(array);
    setArray4([...fourierTransform]);
  };

  return (
    <>
      <div>
        Array1
        <Dropdown
          placeHolder="Select..."
          options={dropdownArrays}
          onChange={(selectedArray) => dropDownHandler1(selectedArray)}
        />
        <Canvas id={canvas1ID} canvasRef={canvas1Ref} array={array1} />
      </div>

      <div>
      Array2
        <Canvas id={canvas2ID} canvasRef={canvas2Ref} array={array2} />
      </div>

      <div>
      Array3
        <Dropdown
          placeHolder="Select..."
          options={dropdownArrays}
          onChange={(selectedArray) => dropDownHandler2(selectedArray)}
        />
        <Canvas id={canvas3ID} canvasRef={canvas3Ref} array={array3} />
      </div>

      <div>
      Array4
        <Canvas id={canvas4ID} canvasRef={canvas4Ref} array={array4} />
      </div>

      <button onClick={handleButtonClick}>CLICK</button>
    </>
  );
};

export default Sampling;
