import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LargeTextWithSubtext from './LargeTextWithSubtext';
import PhasePowerBar from './PhasePowerBar';
import SvgThermometer from './SvgThermometer';
import SvgConnector from './SvgConnector';
import SvgDlb from './SvgDlb';
import styles from './StatusBar.scss';
import RotatingComponent from './RotatingComponent';


class StatusBar extends Component {
  static propTypes = {
    socketName: PropTypes.string.isRequired,
  };

  state = {
    hover: false,
  };

  getLeftSection = () => {
    const { hover } = this.state;

    const largeText = '12';
    const smallDescription = ',00 kW';
    const subText = 'status';
    const statusName = 'statusAvailable';

    return (
      <div className={styles.leftSection}>
        <div className={styles.leftContainer}>
          <div
            className={styles.backgroundCircle}
            style={{ backgroundColor: '#5d9eee' }}
          >
            <RotatingComponent
              className={styles.tempClass}
              visibleContent={(
                <div className={styles.containerInner}>
                  <SvgConnector size={35} />
                </div>
              )}
              discoverableContent={(
                <div className={styles.containerInner}>
                  <span className={styles.iconText}>{statusName}</span>
                </div>)}
              rotated={hover}
            />
          </div>
          <LargeTextWithSubtext
            largeText={largeText}
            smallDescription={smallDescription}
            subText={subText}
          />
        </div>
      </div>
    );
  };

  getMiddleSection = () => {
    const { hover } = this.state;

    const largeText = '4';
    const smallDescription = '';
    const subText = 'statusCharged';

    return (
      <div className={styles.centerScene}>
        <RotatingComponent
          className={styles.sectionPadding}
          visibleContent={(
            <LargeTextWithSubtext
              alignLeft
              largeText={largeText}
              smallDescription={smallDescription}
              subText={subText}
            />
          )}
          discoverableContent={(
            <div className={styles.containerInner}>
              <div>
                <PhasePowerBar percent={70} barColor={'#5d9eee'} kwVolume="5,13" barName="L1" />
                <PhasePowerBar percent={60} barColor={'#5d9eee'} kwVolume="4,4" barName="L2" />
                <PhasePowerBar percent={100} barColor={'#5d9eee'} kwVolume="7,3" barName="L3" />
              </div>
            </div>
          )}
          rotated={hover}
        />
      </div>
    );
  };

  getRightSection = () => {
    const { hover } = this.state;

    const largeText = '94';
    const smallDescription = ',2 kWh';
    const subText = 'EnergyToday';

    return (
      <div className={styles.rightScene}>
        <RotatingComponent
          className={styles.sectionPadding}
          visibleContent={(
            <LargeTextWithSubtext
              alignLeft
              largeText={largeText}
              smallDescription={smallDescription}
              subText={subText}
            />
          )}
          discoverableContent={(
            <div className={styles.containerInner}>
              <div>
                <SvgThermometer status="cold" style={{ marginLeft: '5px' }} />
                <div>
                  <SvgDlb size={20} style={{ paddingRight: '5px' }} />
                  <span>2,4 - 22kW</span>
                </div>
              </div>
            </div>
          )}
          rotated={hover}
        />
      </div>
    );
  };


  render() {
    const { socketName } = this.props;
    return (
      <div className={styles.statusBox}>
        <div className={styles.titleBox}>
          {socketName}
        </div>
        <div
          className={styles.statusBoxContent}
          onMouseEnter={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false })}
        >
          {this.getLeftSection()}
          {this.getMiddleSection()}
          {this.getRightSection()}
        </div>
      </div>
    );
  }
}

export default StatusBar;
