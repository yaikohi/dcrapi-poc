import { CSSProperties } from 'react';
import { Modal, Row, Col } from 'antd';
import { Company } from '../../interfaces/Company'
import { CompanyLogo } from '../CompanyLogo/CompanyLogo';
import { CompanyEvaluaties } from '../CompanyEvaluaties/CompanyEvaluaties';
import { CompanyDescr } from '../CompanyDescr/CompanyDescr';
import { CompanyContactInfo } from '../CompanyContactInfo/CompanyContactInfo';
import { CompanyDetails } from '../CompanyDetails/CompanyDetails';

interface CompanyProps {
  companySelected: Company;
  modalState: boolean;
  onModalStateChange: (val: boolean) => void;
}

const colStyles: CSSProperties = {
  backgroundColor: "white",
  padding: "15px",
};

const expandToFitStyle: CSSProperties = {
  width: "100%",
  height: "100%"
}

export const CompanyInfoModal: React.FC<CompanyProps> = ({ companySelected, modalState, onModalStateChange }: CompanyProps) => {
  return (
    <Modal
      centered
      visible={modalState}
      onOk={() => onModalStateChange(false)}
      onCancel={() => onModalStateChange(false)}
      width={1000}
      keyboard={true}
      footer={false}
    >
      <Row wrap={true}>
        <Col span={8} style={colStyles}>
          <Row justify="center" align="middle" style={expandToFitStyle}>
            <CompanyLogo logoName={companySelected.logo} />
          </Row>
        </Col>
        <Col span={14} style={colStyles}>
          <CompanyDetails companyName={companySelected.name} companyTagline={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
        </Col>
      </Row>
      <Row>
        <Col span={24} style={colStyles}>
          <CompanyDescr companyDescr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
        </Col>
      </Row>
      <Row>
        <Col span={12} style={colStyles}>
          <CompanyEvaluaties />
        </Col>
        <Col span={12} style={colStyles}>
          <CompanyContactInfo website={companySelected.website} contacts={companySelected.contacts} />
        </Col>
      </Row>
    </Modal>
  );
}
