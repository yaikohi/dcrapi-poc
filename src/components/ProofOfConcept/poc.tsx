import { Company as CompanyType } from "../../interfaces/Company";
import { CompanyContactInfo } from "../CompanyContactInfo/CompanyContactInfo";

import CSS from "csstype";
import { Card, Row, Col } from "antd";

const colorDb = {
  "Fynch": ["10998c"],
  "Centric": ["5ca62f"],
  "Inergy": ["b60106"],
  "Quintor": ["a13c4b"],
  "Musketeers.group": ["5ec301"],
  "Terberg Group": ["c99509"],
  "Pegasystems": ["1f2555"],
  "Info Support International Group B.V.": ["a8c9e2"],
  "Shopping Minds": ["9d8299"],
  "Vodafone Ziggo": ["d0cdcf"],
  "Capgemini Nederland BV": ["12abdb"],
  "Alstom Transport BV": ["174385"],
  "AFAS Software": ["1564a4", "c80e42"],
  "Sogeti Nederland B.V.": ["0071ae", "ff4019"],
  "Rabobank": ["ec781e"],
  "Hydrologic": ["4982cf"],
  "Proact": ["f5002e", "f4012e"],
  "Axians": ["0072bc", "a60771"],
  "Yellax": ["fedf00", "070501", "936b17"],
  "CIM Solutions": ["6f9c42", "c5da99"],
  "Finaps B.V.": ["191970", "ffaa00"],
};

interface PocProps {
  company: CompanyType;
}

export const Poc = ({company}: PocProps) => {
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

  const emptyStyle: CSS.Properties = {
    backgroundColor: 'white',
    color: "white",
  }
  return (
    <>
        <Card>
          <Card className="main-card" style={emptyStyle} >
            <Row className="modal-row" gutter={[20, 20]} wrap={true}>
              <Col xs={24} md={16} className="modal-column">
                <Card.Meta title="Over dit bedrijf" style={aboutStyle} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
              </Col>
              <Col xs={24} md={8} className="modal-column">
                <Card style={aboutStyle}  title="Contactgegevens">
                  <CompanyContactInfo
                    website={company.website}
                    contacts={company.contacts}
                  />
                </Card>
              </Col>
            </Row>
          </Card>
        </Card>
    </>
  );
};
