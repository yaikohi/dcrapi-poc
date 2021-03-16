import { useState, useEffect } from 'react';
import { Modal, Row, Col } from 'antd';
import Company from '../../interfaces';

interface CompanyProps {
  company: Company;
}

const baseUrl: string = process.env.REACT_APP_API_URL;

export const CompanyInfoModal: React.FC<CompanyProps> = ({ company }: CompanyProps) => {

  const [visible, setVisible] = useState(false);

  return (
    <>
      <Modal
        //title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
      </Modal>
    </>
  );
}
