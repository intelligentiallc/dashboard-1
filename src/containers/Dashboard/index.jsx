import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import InfoCard from "../../componants/InfoCard";
import Chart from "../../componants/Chart";
import RadarChart from "../../componants/RadarChart";
import BarChart from "../../componants/BarChart";
import Datatable from "../../componants/Datatable";
export default function Dashboard() {
  return (
    <Fragment>
      <Row>
        <Col md={12} sm={12} xs={12} xl={5} lg={5}>
          <Row>
            <Col md={12} sm={12} xs={12} xl={6} lg={6}>
              <InfoCard />
            </Col>
            <Col md={12} sm={12} xs={12} xl={6} lg={6}>
              <InfoCard />
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12} xs={12} xl={6} lg={6}>
              <InfoCard />
            </Col>
            <Col md={12} sm={12} xs={12} xl={6} lg={6}>
              <InfoCard />
            </Col>
          </Row>
        </Col>
        <Col md={12} sm={12} xs={12} xl={7} lg={7}>
          <Chart />
        </Col>
      </Row>
      <Row>
        <Col md={12} sm={12} xs={12} xl={7} lg={7}>
          <BarChart />
        </Col>
        <Col md={12} sm={12} xs={12} xl={5} lg={5}>
          <RadarChart />
        </Col>
      </Row>
      <Row>
        <Col md={12} sm={12} xs={12} xl={12} lg={12}>
          <Datatable />
        </Col>
      </Row>
    </Fragment>
  );
}
