import { Row, Col, Typography, Statistic, Card } from 'antd';
import './CompanyEvaluaties.css';

const { Text } = Typography;
const { Meta } = Card;

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
            //style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
