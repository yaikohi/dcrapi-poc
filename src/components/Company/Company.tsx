import { Company as CompanyType } from "../../interfaces/Company";
import { CompanyLogo } from "../CompanyLogo/CompanyLogo";
import { CompanyEvaluaties } from "../CompanyEvaluaties/CompanyEvaluaties";
import { CompanyDescr } from "../CompanyDescr/CompanyDescr";
import { CompanyContactInfo } from "../CompanyContactInfo/CompanyContactInfo";
import { CompanyDetails } from "../CompanyDetails/CompanyDetails";
import "./Company.css";
import { CompanyTag } from "../CompanyTag/CompanyTag";

import { FC } from "react";
import { Card, Row, Col } from "antd";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import CSS from "csstype";

interface CompanyProps {
  company: CompanyType;
}

// TODO possibly refactor html element classnames
// TODO refactor/select color values
const colorDb = {
  Fynch: ["10998c"],
  Centric: ["5ca62f"],
  Inergy: ["b60106"],
  Quintor: ["a13c4b"],
  "Musketeers.group": ["5ec301"],
  "Terberg Group": ["c99509"],
  Pegasystems: ["1f2555"],
  "Info Support International Group B.V.": ["a8c9e2"],
  "Shopping Minds": ["9d8299"],
  "Vodafone Ziggo": ["d0cdcf"],
  "Capgemini Nederland BV": ["12abdb"],
  "Alstom Transport BV": ["174385"],
  "AFAS Software": ["1564a4", "c80e42"],
  "Sogeti Nederland B.V.": ["0071ae"],
  Rabobank: ["ec781e"],
  Hydrologic: ["4982cf"],
  Proact: ["f5002e"],
  Axians: ["0072bc"],
  Yellax: ["fedf00"],
  "CIM Solutions": ["6f9c42"],
  "Finaps B.V.": ["191970"],
};

export const Company: FC<CompanyProps> = ({ company }: CompanyProps) => {
  // CSS backgroundColor variables
  const companyColorsBase = colorDb[company.name][0];
  const companyColorsHue: String = "35";

  const companyColors = companyColorsBase + companyColorsHue;

  // Style variables
  const aboutStyle: CSS.Properties = {
    backgroundColor: `#${companyColors}`,
    borderRadius: "6px",
    padding: "40px",
    color: "#ffffff",
  };

  return (
    <Card>
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item>
          <Link to="/">
            <HomeOutlined />
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="#">
            <span>{company.name}</span>
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Card className="main-card" style={aboutStyle}>
        <Row wrap={true} className="modal-row">
          <Col xs={24} md={7} className="modal-column">
            <Row justify="center" align="middle" className="logo-row">
              <CompanyLogo logoName={company.logo} />
            </Row>
          </Col>
          <Col xs={24} md={17} className="company-details">
            <CompanyDetails
              companyName={company.name}
              companyTagline={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            />
            {company.sectors.map((sector) => (
              <CompanyTag text={sector} />
            ))}
          </Col>
        </Row>

        <Row className="modal-row" gutter={[20, 20]} wrap={true}>
          <Col xs={24} md={16} className="modal-column">
            <Card title="Over dit bedrijf" className="card card__contacts">
              <CompanyDescr
                companyDescr={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
              />
            </Card>
          </Col>
          <Col xs={24} md={8} className="modal-column">
            <Card title="Contactgegevens" className="card card__contacts">
              <CompanyContactInfo
                website={company.website}
                contacts={company.contacts}
              />
            </Card>
          </Col>
        </Row>

        <Row className="modal-row">
          <Col xs={24} md={24} className="modal-column">
            <Card title="Evaluaties" className="card">
              <CompanyEvaluaties company={company.id} />
            </Card>
          </Col>
        </Row>
      </Card>
    </Card>
  );
};
