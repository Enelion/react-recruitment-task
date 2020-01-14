import React, { Component } from "react";
import PropTypes from "prop-types";
import LargeTextWithSmallDescription from "./LargeTextWithSmallDescription";
import "./largeTextWithSubtext.scss";

class LargeTextWithSubtext extends Component {
  render() {
    const { subText, largeText, smallDescription, alignLeft } = this.props;
    return (
      <div
        className="textBox"
        style={{ alignItems: `${alignLeft ? "flex-start" : "flex-end"}` }}
      >
        <LargeTextWithSmallDescription
          color={"black"}
          squeezed
          largeText={largeText}
          sizeFactor={3}
          smallDescription={smallDescription}
          smallSizeFactor={1}
        />
        <div
          className="powerTextBox text-uppercase"
          style={{
            color: "black",
            textAlign: `${alignLeft ? "left" : "right"}`
          }}
        >
          {subText}
        </div>
      </div>
    );
  }
}

LargeTextWithSubtext.propTypes = {
  textColor: PropTypes.string,
  smallDescription: PropTypes.string,
  largeText: PropTypes.string,
  subText: PropTypes.string,
  alignLeft: PropTypes.bool
};

LargeTextWithSubtext.defaultProps = {
  textColor: "",
  smallDescription: "",
  largeText: "",
  subText: "",
  alignLeft: false
};

export default LargeTextWithSubtext;
