import React, { Component } from "react";

import SvgThermometer from "./SvgThermometer";

const color = { darkGray: "grey" };

class InfoTable extends Component {
  static propTypes = {};

  render() {
    const { t } = this.props;

    return (
      // todo: small and large text could be a seperate component
      <div className="d-flex flex-column mt-4 mx-3">
        <div className="d-flex justify-content-between">
          <div>
            <div className="d-flex flex-column align-items-left my-2">
              <div style={{ fontSize: "16px" }}>Tauron Polska Energia S.A.</div>
              <div
                className="text-small"
                style={{ color: color.darkGray, marginTop: "-5px" }}
              >
                {"componentsShared:infoTab.stationOperator"}
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column align-items-left my-2">
                <div style={{ fontSize: "16px" }}> Energa S.A.</div>
                <div
                  className="text-small"
                  style={{ color: color.darkGray, marginTop: "-5px" }}
                >
                  {"componentsShared:infoTab.serviceSeller"}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column align-items-left my-2">
                <div style={{ fontSize: "16px" }}> 1,89 zÅ/kWh 0,50zÅ/min</div>
                <div
                  className="text-small"
                  style={{ color: color.darkGray, marginTop: "-5px" }}
                >
                  {"componentsShared:infoTab.pricePerService"}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column align-items-left my-2">
                <div style={{ fontSize: "16px" }}>
                  aktywne (sieÄ), 2,4kW - 22kW
                </div>
                <div
                  className="text-small"
                  style={{ color: color.darkGray, marginTop: "-5px" }}
                >
                  {t("componentsShared:infoTab.dynamicBalancing")}
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              borderLeft: `1px solid ${color.lightGray}`,
              paddingLeft: "10px",
              minWidth: "100px"
            }}
          >
            <div className="d-flex">
              <SvgThermometer
                status={"cold"}
                style={{ marginRight: "10px", marginTop: 16 }}
              />
              <div className="d-flex flex-column align-items-left my-2">
                <div style={{ fontSize: "16px" }}>{`${48}Â°C`}</div>
                <div
                  className="text-small"
                  style={{ color: color.darkGray, marginTop: "-5px" }}
                >
                  {"componentsShared:infoTab.socketCap"}
                </div>
              </div>
            </div>
            <div className="d-flex">
              <SvgThermometer
                status={"warm"}
                style={{ marginRight: "10px", marginTop: 16 }}
              />
              <div className="d-flex flex-column align-items-left my-2">
                <div style={{ fontSize: "16px" }}>{`${87}Â°C`}</div>
                <div
                  className="text-small"
                  style={{ color: color.darkGray, marginTop: "-5px" }}
                >
                  {"componentsShared:infoTab.transmitters"}
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div
                className="d-flex flex-column align-items-left my-2"
                style={{ marginLeft: "27px" }}
              >
                <div style={{ fontSize: "16px" }}> 34899 kWh</div>
                <div
                  className="text-small"
                  style={{ color: color.darkGray, marginTop: "-5px" }}
                >
                  'componentsShared:infoTab.usageSince'}
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div
                className="d-flex flex-column align-items-left my-2"
                style={{ marginLeft: "27px" }}
              >
                <div style={{ fontSize: "16px" }}>2854 h</div>
                <div
                  className="text-small"
                  style={{ color: color.darkGray, marginTop: "-5px" }}
                >
                  {"componentsShared:infoTab.sumTime"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoTable;
