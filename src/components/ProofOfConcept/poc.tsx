import { Company as CompanyType } from "../../interfaces/Company";
import { CompanyDescr } from "../CompanyDescr/CompanyDescr";
import { CompanyContactInfo } from "../CompanyContactInfo/CompanyContactInfo";
import "./Company.css";
import axios from "axios";

import { useEffect, useState } from "react";
import { Card, Row, Col } from "antd";


type DcrApiResp = [String, String, String];

interface Props {
  company: CompanyType;
}

export const Poc = ({ company, ...props }: Props) => {
  const [colors, setColors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const c1 = colors[0];
  const c2 = colors[1];
  const c3 = colors[2];

  useEffect(() => {
    const fetchColors = async () => {
      const response = await axios.get<DcrApiResp>(
        `http://dcr-api000.herokuapp.com/api/${company.id}`
      );
      const data = response.data;
      setColors(data);
    };
    fetchColors();
    setLoaded(true);
    // setTimeout(() => {
    //   fetchColors();
    //   setLoaded(true);
    // }, 100);
  }, []);

  return (
    <>
      {loaded ? (
        <Card>
          <Card className="main-card">
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
          </Card>
        </Card>
      ) : (
        <h2> Loading ... </h2>
      )}
    </>
  );
};