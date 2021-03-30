import { Modal, Row, Col } from 'antd';
import { Company } from '../../interfaces/Company'
import { CompanyLogo } from '../CompanyLogo/CompanyLogo';
import { CompanyEvaluaties } from '../CompanyEvaluaties/CompanyEvaluaties';
import { CompanyDescr } from '../CompanyDescr/CompanyDescr';
import { CompanyContactInfo } from '../CompanyContactInfo/CompanyContactInfo';
import { CompanyDetails } from '../CompanyDetails/CompanyDetails';
import './CompanyInfoModal.css';

interface CompanyProps {
  selectedCompany: Company;
  modalState: boolean;
  onModalStateChange: (val: boolean) => void;
}

export const CompanyInfoModal: React.FC<CompanyProps> = ({ selectedCompany, modalState, onModalStateChange }: CompanyProps) => {
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
        <Col span={8} className="modal-column">
          <Row justify="center" align="middle" className="modal-row">
            <CompanyLogo logoName={selectedCompany.logo} />
          </Row>
        </Col>
        <Col span={14} className="modal-column">
          <CompanyDetails companyName={selectedCompany.name} companyTagline={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
        </Col>
      </Row>
      <Row>
        <Col span={24} className="modal-column">
          <CompanyDescr companyDescr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
        </Col>
      </Row>
      <Row>
        <Col span={12} className="modal-column">
          <CompanyEvaluaties />
        </Col>
        <Col span={12} className="modal-column">
          <CompanyContactInfo website={selectedCompany.website} contacts={selectedCompany.contacts} />
        </Col>
      </Row>
    </Modal>
  );
}
