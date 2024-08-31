import PropTypes from 'prop-types';

const CourseShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  credit: PropTypes.number,
});

export default CourseShape;