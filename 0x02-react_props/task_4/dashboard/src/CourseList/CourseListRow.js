import React from "react";
import  Proptypes from "proptypes";

function CourseListRow({ isHeader, textFirstCell, textSecondCell}) {
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
  return <tr>{element}</tr>;
}
  CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
  }

  CourseListRow.propTypes = {
    isHeader: Proptypes.bool,
    textFirstCell: Proptypes.string.isRequired,
    textSecondCell: Proptypes.string,
  };

export default CourseListRow;