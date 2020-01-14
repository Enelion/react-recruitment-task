import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PhasePowerBar.scss';

class PhasePowerBar extends Component {
  static propTypes = {
    barColor: PropTypes.string.isRequired,
    kwVolume: PropTypes.string.isRequired,
    barName: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,
  };
  
  render() {
    const {
      barColor,
      percent,
      barName,
      kwVolume,
    } = this.props;
    
    return (
      <div className={styles.boxBar}>
        <div className={styles.barGray}>
          <div className={styles.barColor} style={{ backgroundColor: `${percent === 0 ? 'transparent' : barColor}`, width: `${percent}%` }}>{barName}</div>
        </div>
        <div className={styles.divVolume}>{`${kwVolume} kW`}</div>
      </div>
    );
  }
}

export default PhasePowerBar;
