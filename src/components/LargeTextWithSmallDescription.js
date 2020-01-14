import React from 'react';
import PropTypes from 'prop-types';

class LargeTextWithSmallDescription extends React.Component {
  render() {
    const {
      largeText,
      smallDescription,
      sizeFactor,
      squeezed,
      color,
      smallSizeFactor,
    } = this.props;
    return (
      <div
        className={`d-inline-block ${squeezed ? '' : 'px-2'}`}
        style={{ fontSize: '1em', color }}
      >
        <div
          className={`d-inline-block ${squeezed ? '' : 'pr-2'}`}
          style={{ color, fontSize: `${sizeFactor}rem`, lineHeight: '5rem' }}
        >
          { largeText }
        </div>
        <div className="d-inline-block text-left" style={{ fontSize: `${smallSizeFactor}rem`, lineHeight: '0.75rem' }}>{ smallDescription }</div>
      </div>
    );
  }
}

LargeTextWithSmallDescription.propTypes = {
  largeText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  smallDescription: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  sizeFactor: PropTypes.number,
  squeezed: PropTypes.bool,
  color: PropTypes.string,
  smallSizeFactor: PropTypes.number,
};

LargeTextWithSmallDescription.defaultProps = {
  sizeFactor: 4,
  squeezed: false,
  color: '',
  smallSizeFactor: 0.75,
};

export default LargeTextWithSmallDescription;
