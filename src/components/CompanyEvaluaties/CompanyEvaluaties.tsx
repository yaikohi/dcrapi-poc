import { Row, Col, Typography, Statistic, Card } from 'antd';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
import './CompanyEvaluaties.css';

const { Title, Text } = Typography;

export const CompanyEvaluaties: React.FC = () => {
  return (
    <>
      <Row gutter={12} >
        <Col span={18}>
          <Row gutter={8} className="evaluaties-scores-section">
            <Col span={12} className="evaluation-item">
              <Statistic title="Organization of Cooperation" value={7.8} />
            </Col>
            <Col span={12} className="evaluation-item">
              <Statistic title="Adequate knowledge to students" value={8.1} />
            </Col>
            <Col span={12} className="evaluation-item">
              <Statistic title="Organization of Cooperation" value={7.8} />
            </Col>
            <Col span={12} className="evaluation-item">
              <Statistic title="Quality of education" value={8.7} />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            className="center"
            style={{ width: 300, backgroundColor: "#1890ff", height: "100%", textAlign: "center", color: "#fff" }}
          //cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Title level={1} style={{color: "#fff"}}>7.8</Title>
            <Title level={3}  style={{color: "#fff"}}>AVERAGE SCORE</Title>
            <Text  style={{color: "#fff"}}>AVERAGE SCORE</Text>
          </Card>
        </Col>
      </Row>
    </>
  );
}
