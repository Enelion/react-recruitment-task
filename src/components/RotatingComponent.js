import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './RotatingComponent.scss';


class RotatingComponent extends Component {
  static propTypes = {
    visibleContent: PropTypes.node,
    discoverableContent: PropTypes.node,
    rotateOnHover: PropTypes.bool,
    rotated: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    visibleContent: null,
    discoverableContent: null,
    rotateOnHover: false,
    rotated: false,
    className: '',
  };

  render() {
    const {
      visibleContent,
      discoverableContent,
      rotateOnHover,
      rotated,
      className,
    } = this.props;

    return (
      <div
        className={classNames(
          styles.scene,
          (rotateOnHover ? styles.rotatingContentContainer : ''),
          (rotated ? styles.rotate : ''),
          className
        )}
      >
        <div className={styles.rotationWrapper}>
          <div className={classNames(styles.cardFace, styles.avers)}>
            {visibleContent}
          </div>
          <div className={classNames(styles.cardFace, styles.observe)}>
            {discoverableContent}
          </div>
        </div>
      </div>
    );
  }
}

export default RotatingComponent;
