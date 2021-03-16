import { useState, useEffect, Component } from 'react';
import { Modal, Row, Col } from 'antd';
import Company from '../../interfaces';

interface CompanyProps {
  company: Company;
}
interface ModalState{
    modalState: boolean,
}

const baseUrl: string = process.env.REACT_APP_API_URL;

//export default class Profile extends Component<ModalState, CompanyProps>{
export const CompanyInfoModal: React.FC <CompanyProps> = ({ company }: CompanyProps)  =>{
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Modal
        //title="Modal 1000px width"
        centered
        visible={true}
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
