import { Row, Col, Typography, Statistic } from 'antd';
const { Text } = Typography;

export const CompanyEvaluaties: React.FC = () => {
  return (
    <>
      <Row gutter={8}>
        <Col span={18}>
          <Row gutter={8}>
            <Col span={12}>
              <Statistic title="Organization of Cooperation" value={7.8} />
            </Col>
            <Col span={12}>
              <Statistic title="Adequate knowledge to students" value={8.1} />
            </Col>
            <Col span={12}>
              <Statistic title="Organization of Cooperation" value={7.8} />
            </Col>
            <Col span={12}>
              <Statistic title="Quality of education" value={8.7} />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Text>No average score genenerated yet.</Text>
        </Col>
      </Row>
    </>
  );
}
