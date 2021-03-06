import React from "react";
import PropTypes from "prop-types";

class SvgDlb extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
  };

  static defaultProps = {
    color: "#484d53",
    size: 100,
  };

  render() {
    const {size, color, ...props} = this.props;
    return (
      <svg viewBox="0 0 35 35" width={`${size}px`} height={`${size}px`} {...props}>
        <path
          fill={color}
          d="M32.801 17.095c-.002 0-.002-.001-.002-.002v-.001l-.01-.026v-.001l-.002-.001a1.23 1.23 0 0 0-.271-.406l-3.721-3.733a1.225 1.225 0 0 0-1.735 1.73l1.639 1.645-5.9-.01a5.684 5.684 0 0 0-2.811-3.738l1.973-5.563.844 1.925a1.225 1.225 0 1 0 2.243-.984L22.96 3.168l-.001-.001v-.001l-.002-.003a1.226 1.226 0 0 0-1.119-.726h-.021c-.013-.002-.023 0-.035.001h-.004-.001a1.218 1.218 0 0 0-.474.122l-4.758 2.268a1.225 1.225 0 1 0 1.053 2.212l2.098-1-2.068 5.833c-.119-.007-.237-.018-.358-.018-2.722 0-5 1.93-5.542 4.492H9.043a3.417 3.417 0 0 0-6.629 1.173 3.42 3.42 0 0 0 6.592 1.276h2.746c.582 2.511 2.832 4.39 5.517 4.39.062 0 .122-.007.185-.009l2.053 5.644-1.877-.949a1.224 1.224 0 1 0-1.106 2.187l4.639 2.346.002.001a1.22 1.22 0 0 0 .643.128 1.229 1.229 0 0 0 .711-.296l.002-.001v-.001l.002-.001.001-.001.007-.005v-.001l.002-.001.002-.001v-.001l.002-.001c.127-.114.225-.25.293-.4l2.229-4.777a1.225 1.225 0 0 0-2.22-1.036l-.982 2.105-2.018-5.549a5.681 5.681 0 0 0 2.962-3.825l5.757.009-1.535 1.436a1.22 1.22 0 0 0-.389.895 1.22 1.22 0 0 0 1.226 1.225c.299 0 .6-.11.836-.331l3.794-3.551.002-.001.002-.001.002-.002c.166-.157.281-.354.34-.564v-.001-.001a.711.711 0 0 0 .025-.12v-.005l.002-.002a1.26 1.26 0 0 0-.062-.633zm-15.532 3.947a3.526 3.526 0 0 1-3.522-3.522c0-1.942 1.58-3.522 3.522-3.522s3.522 1.58 3.522 3.522a3.525 3.525 0 0 1-3.522 3.522z"
        />
      </svg>
    );
  }
}

export default SvgDlb;
