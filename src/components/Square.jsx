import PropTypes from 'prop-types';

function Square({ value, onSquareClick }) {
  return (
    <button
      className="square float-left font-bold h-16 w-16 md:w-24 md:h-24 rounded text-4xl md:text-5xl"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func.isRequired,
};

export default Square;
