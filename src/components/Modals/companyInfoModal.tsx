import { useState, useEffect } from 'react';
import { Modal, Row, Col } from 'antd';
import Company from '../../interfaces';

interface CompanyProps {
  company: Company;
  modalState: boolean;
}

const baseUrl: string = process.env.REACT_APP_API_URL;

//export default class Profile extends Component<ModalState, CompanyProps>{
export const CompanyInfoModal: React.FC<CompanyProps> = ({ company, modalState }: CompanyProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Modal
        //title="Modal 1000px width"
        centered
        visible={modalState}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <Row>
          <Col span={12}>{company.id}</Col>
          <Col span={12}>{company.name}</Col>
        </Row>
      </Modal>
    </>
  );
}
