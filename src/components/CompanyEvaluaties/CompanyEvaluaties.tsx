import { useState } from 'react';
import { Row, Col, Typography, Statistic, Card, Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import './CompanyEvaluaties.css';

interface CompanyEvaluationProps {
  evaluations: any;
}

const { Title, Text } = Typography;

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

export const CompanyEvaluaties: React.FC<CompanyEvaluationProps> = ({ evaluations }: CompanyEvaluationProps) => {

  const showData = () => {
    let evaList = [];

    for (const key in evaluations) {
      if (Object.prototype.hasOwnProperty.call(evaluations, key)) {
        const element = evaluations[key];

        evaList.push(<Col xs={12} className="evaluation-item" key={key}><Statistic title={key} value={element.score} /></Col>)

      }
    }
    return evaList;
  }

  return (
    <>
      <Row gutter={12} >
        <Col md={18}>
          <Row gutter={8} className="evaluaties-scores-section">
            {showData()}
            {/* <Col xs={12} className="evaluation-item">
              <Statistic title="Organization of Cooperation" value={evaluations.organisation} />
            </Col>
            <Col xs={12} className="evaluation-item">
              <Statistic title="Adequate knowledge to students" value={8.1} />
            </Col>
            <Col xs={12} className="evaluation-item">
              <Statistic title="Organization of Cooperation" value={7.9} />
            </Col>
            <Col xs={12} className="evaluation-item">
              <Statistic title="Quality of education" value={8.4} />
            </Col> */}

          </Row>
        </Col>
        <Col md={6}>
          <Card
            hoverable
            className="center average-score-item"
          >
            <div className="average-score-number"><Text className="evaluaties-score-number">8.8</Text>
            </div>
            <Rate defaultValue={4} className="average-score-smileys" disabled allowHalf allowClear={false} character={({ index }) => customIcons[index + 1]} />
            <Title level={4}>AVERAGE SCORE</Title>
            <Text className="bold">changing the future together</Text>
          </Card>
        </Col>
      </Row>
    </>
  );
}
