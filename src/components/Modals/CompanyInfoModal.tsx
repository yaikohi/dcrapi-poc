import { CSSProperties } from 'react';
import { Modal, Row, Col, } from 'antd';
import Company from '../../interfaces';
import { CompanyLogo } from '../CompanyLogo/CompanyLogo';
import { CompanyEvaluaties } from '../CompanyEvaluaties/CompanyEvaluaties';
import { CompanyDescr } from '../CompanyDescr/CompanyDescr';
import { CompanyContactInfo } from '../CompanyContactInfo/CompanyContactInfo';
import { CompanyDetails } from '../CompanyDetails/CompanyDetails';

interface CompanyProps {
  company: Company;
  modalState: boolean;
  onModalStateChange: (val: boolean) => void;
}

const colStyles: CSSProperties = {
  backgroundColor: "white",
  padding: "15px",
  marginBottom: '20px',
};

export const CompanyInfoModal: React.FC<CompanyProps> = ({ company, modalState, onModalStateChange }: CompanyProps) => {
  return (
    <>
      <Modal
        centered
        visible={modalState}
        onOk={() => onModalStateChange(false)}
        onCancel={() => onModalStateChange(false)}
        width={1000}
        keyboard={true}
        footer={false}
      >
        <Row>
          <Col span={8} style={colStyles}>
            <CompanyLogo logoName={"/companyLogos/Fynch.png"} />
          </Col>
          <Col span={12} style={colStyles}>
            <CompanyDetails companyName={"companyName"} companyTagline={"companyTagline"} />
          </Col>
        </Row>
        <Row>
          <Col span={24} style={colStyles}>
            <CompanyDescr companyDescr={"descr"} />
          </Col>
        </Row>
        <Row>
          <Col span={12} style={colStyles}>
            <CompanyEvaluaties evaluationTitle={"Title"} />
          </Col>
          <Col span={12} style={colStyles}>
            <CompanyContactInfo contactInfo={"contact"} />
          </Col>
        </Row>
      </Modal>
    </>
  );
}
