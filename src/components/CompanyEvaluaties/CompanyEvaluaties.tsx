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

  let averageScore = 0;

  const setAverageScoreHandler = (averageTotal, evaluationsListCount) => {
    averageScore = averageTotal / evaluationsListCount;
    //setAverageScore(aSFinal)
  }

  const showEvaluations = () => {
    let evaList = [];
    let averageTotal = 0.0;
    let evaluationsListCount = 0;
    let averageScoreFinal = 0;

    if (evaluations !== null) {

      // loop through evaluations object
      for (const key in evaluations) {
        if (Object.prototype.hasOwnProperty.call(evaluations, key)) {
          const element = evaluations[key];
          let evaluationItemScore = parseInt(element.score); // parse score to int
          averageTotal = averageTotal + evaluationItemScore; // count all evaluation scores

          evaList.push(<Col xs={12} className="evaluation-item" key={key}><Statistic style={{ textTransform: "capitalize" }} title={key} value={evaluationItemScore.toFixed(1)} /></Col>)
          evaluationsListCount++;
        }
      }

      // calculate average score
      setAverageScoreHandler(averageTotal, evaluationsListCount);

      return evaList;
    }

  }

  return (
    <>
      <Row gutter={12} >
        <Col md={18}>
          <Row gutter={8} className="evaluaties-scores-section">
            {showEvaluations()}
          </Row>
        </Col>
        <Col md={6}>
          <Card
            hoverable
            className="center average-score-item"
          >
            <div className="average-score-number"><Text className="evaluaties-score-number">{averageScore.toFixed(1)}</Text>
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
