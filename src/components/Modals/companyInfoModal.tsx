import { useState } from 'react';
import { Modal, Row, Col } from 'antd';
import Company from '../../interfaces';

interface CompanyProps {
  company: Company;
  modalState: boolean;
  onModalStateChange: (val: boolean) => void;
}

//const baseUrl: string = process.env.REACT_APP_API_URL;

export const CompanyInfoModal: React.FC<CompanyProps> = ({ company, modalState, onModalStateChange }: CompanyProps) => {

  return (
    <>
      <Modal
        centered
        visible={modalState}
        onOk={() => onModalStateChange(false)}
        onCancel={() => onModalStateChange(false)}
        width={1000}
      >
        <Row>
          <Col span={12}>{company.id}</Col>
          <Col span={12}>{company.id}</Col>
        </Row>
      </Modal>
    </>
  );
}
