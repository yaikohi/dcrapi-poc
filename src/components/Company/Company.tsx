import { Company as CompanyType } from '../../interfaces/Company'
import { CompanyLogo } from '../CompanyLogo/CompanyLogo';
import { CompanyEvaluaties } from '../CompanyEvaluaties/CompanyEvaluaties';
import { CompanyDescr } from '../CompanyDescr/CompanyDescr';
import { CompanyContactInfo } from '../CompanyContactInfo/CompanyContactInfo';
import { CompanyDetails } from '../CompanyDetails/CompanyDetails';
import './Company.css';

import { FC } from 'react';
import { Card, Row, Col } from 'antd';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';


interface CompanyProps {
  company: CompanyType
}

export const Company: FC<CompanyProps> = (props) => {
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
            <span>{props.company.name}</span>
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Card className="main-card">
        <Row wrap={true} className="modal-row">
          <Col xs={24} md={7} className="modal-column">
            <Row justify="center" align="middle" className="logo-row">
              <CompanyLogo logoName={props.company.logo} />
            </Row>
          </Col>
          <Col xs={24} md={17} className="company-details">
            <CompanyDetails companyName={props.company.name} companyTagline={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
          </Col>
        </Row>

        <Row className="modal-row" gutter={[20, 20]} wrap={true}>
          <Col xs={24} md={16} className="modal-column">
            <Card title="Over dit bedrijf" className="card card-height">
              <CompanyDescr companyDescr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
            </Card>
          </Col>
          <Col xs={24} md={8} className="modal-column">
            <Card title="Contactgegevens" className="card card-height">
              <CompanyContactInfo website={props.company.website} contacts={props.company.contacts} />
            </Card>
          </Col>
        </Row>

        <Row className="modal-row">
          <Col xs={24} md={24} className="modal-column">
            <Card title="Evaluaties" className="card">
              <CompanyEvaluaties />
            </Card>
          </Col>
        </Row>
      </Card>
    </Card>
  );
}