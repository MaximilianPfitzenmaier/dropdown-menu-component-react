import {useEffect} from 'react';
import {drawFunction} from '../utils/graph';
import PropTypes from 'prop-types';


const Canvas = ( {id, canvasRef, array} ) => {
  useEffect(() => {
    drawFunction(canvasRef, array);
  }, [canvasRef, array]);

  return (
    <>
      {/* <Dropdown id={ref} array={array} /> */}
      <canvas
        onContextMenu={(e) => (e.button === 2 ? e.preventDefault() : null)}
        id={id}
        ref={canvasRef}
        width={800}
        height={400}
      />
    </>

  );
};

export default Canvas;

Canvas.propTypes = {
  id: PropTypes.number,
  canvasRef: PropTypes.string,
  array: PropTypes.array,
};
