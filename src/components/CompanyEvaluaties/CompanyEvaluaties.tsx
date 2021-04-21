import { Row, Col, Typography, Statistic } from 'antd';
const { Text } = Typography;

export const CompanyEvaluaties: React.FC = () => {
  return (
    <>
      <Row gutter={16}>

        <Col span={6}>
          <Statistic title="Organization of Cooperation" value={7.8} />
        </Col>
        <Col span={6}>
          <Statistic title="Quality of education" value={8.7} />
        </Col>
        <Col span={6}>
          <Statistic title="Adequate knowledge to students" value={8.1} />
        </Col>
        <Col span={6}>
          <Statistic title="Cooperation last year" value={6.3} />
        </Col>

      </Row>
    </>
  );
}
