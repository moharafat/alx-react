import React, { Fragment }from 'react';
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';


function CourseListRow({ isHeader, textFirstCell, textSecondCell}) {
  const styleRow = { backgroundColor: '#f5f5f5ab' };
  const styleHeaderRow = { backgroundColor: '#deb5b545' };
  let stylesBackground;

  let element;

  if (isHeader === true) {
    if (textSecondCell === null) {
      element = <th colSpan="2" className={css(styles.headerRow)}>{textFirstCell}</th>
    } else {
      element = (
        <>
          <th className={css(styles.defaultRow)}>{textFirstCell}</th>
          <th className={css(styles.defaultRow)}>{textSecondCell}</th>
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
const styles = StyleSheet.create({
	headerRow: {
		fontfamily: 'Arial, Helvetica, sans-serif',
		textAlign: 'center'
	},

	defaultRow: {
		fontfamily: 'Arial, Helvetica, sans-serif',
		borderbottom: '1px solid lightgray',
		height: '25px',
		textAlign: 'left'
	}
});

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