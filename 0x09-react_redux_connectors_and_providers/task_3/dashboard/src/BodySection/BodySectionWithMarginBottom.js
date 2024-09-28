import React, { Component } from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}
const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
    // My touch
    // marginTop: '30px',
    // backgroundColor: '#f5f5f5',
  },
});
BodySectionWithMarginBottom.deafultProps = {
  title: "",
};
BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};
export default BodySectionWithMarginBottom;
