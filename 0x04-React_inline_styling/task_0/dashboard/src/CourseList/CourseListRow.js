import React, { Fragment }from 'react';
import PropTypes from "prop-types";


function CourseListRow({ isHeader, textFirstCell, textSecondCell}) {
  const styleRow = { backgroundColor: '#f5f5f5ab' };
  const styleHeaderRow = { backgroundColor: '#deb5b545' };
  let stylesBackground;

  let element;

  if (isHeader === true) {
    if (textSecondCell === null) {
      element = <th colSpan="2">{textFirstCell}</th>
    } else {
      element = (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      );
    }
  } else if (isHeader === false) {
    element = (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
    );
  }

  if (isHeader) {
    stylesBackground = styleHeaderRow;
  } else {
    stylesBackground = styleRow;
  }

  return <tr style={stylesBackground}>{element}</tr>;
}
CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CourseListRow;