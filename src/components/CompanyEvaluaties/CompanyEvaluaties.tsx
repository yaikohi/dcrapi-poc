import { Row, Col, Typography, Statistic, Card, Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import './CompanyEvaluaties.css';

const { Title, Text } = Typography;

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

export const CompanyEvaluaties: React.FC = () => {
  return (
    <>
      <Row gutter={12} >
        <Col md={18}>
          <Row gutter={8} className="evaluaties-scores-section">
            <Col xs={12} className="evaluation-item">
              <Statistic title="Organization of Cooperation" value={8.6} />
            </Col>
            <Col xs={12} className="evaluation-item">
              <Statistic title="Adequate knowledge to students" value={8.1} />
            </Col>
            <Col xs={12} className="evaluation-item">
              <Statistic title="Organization of Cooperation" value={7.9} />
            </Col>
            <Col xs={12} className="evaluation-item">
              <Statistic title="Quality of education" value={8.4} />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Card
            hoverable
            className="center average-score-item"
            style={{
              backgroundColor: "#fff", color: "#000"
            }}
          >
            <div className="average-score-number"><Text className="evaluaties-score-number">8.8</Text>
            </div>
            <Rate defaultValue={4} style={{ color: "#00a1e1" }} disabled allowHalf allowClear={false} character={({ index }) => customIcons[index + 1]} />
            <Title level={3} style={{ color: "#000", marginTop: "15px" }}>AVERAGE SCORE</Title>
            <Text style={{ color: "#000" }}>changing the future together</Text>
          </Card>
        </Col>
      </Row>
    </>
  );
}
