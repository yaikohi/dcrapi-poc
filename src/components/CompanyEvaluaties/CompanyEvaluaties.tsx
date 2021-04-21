import { Row, Col, Typography, Statistic } from 'antd';
const { Text } = Typography;

export const CompanyEvaluaties: React.FC = () => {
  return (
    <>
      <Row gutter={16}>
        <Col span={24}>
          <Statistic title="Organisatie" value={8} precision={1} />
        </Col>
      </Row>
    </>
  );
}
