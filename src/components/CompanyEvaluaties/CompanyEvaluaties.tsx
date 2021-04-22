import { Row, Col, Typography, Statistic, Card, Divider, Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
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
              <Statistic title="Organization of Cooperation" value={7.8} />
            </Col>
            <Col xs={12} className="evaluation-item">
              <Statistic title="Adequate knowledge to students" value={8.1} />
            </Col>
            <Col xs={12} className="evaluation-item">
              <Statistic title="Organization of Cooperation" value={7.8} />
            </Col>
            <Col xs={12} className="evaluation-item">
              <Statistic title="Quality of education" value={8.7} />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Card
            hoverable
            className="center average-score-item"
            style={{
              backgroundColor: "#1890ff", color: "#fff"
            }}
          >
            <Text className="evaluaties-score-number">7.8</Text>
            <Divider type="horizontal" style={{ backgroundColor: "#fff" }} />
            <Title level={3} style={{ color: "#fff" }}>AVERAGE SCORE</Title>
            <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
            {/* <Text style={{ color: "#fff" }}>AVERAGE SCORE</Text> */}
          </Card>
        </Col>
      </Row>
    </>
  );
}
