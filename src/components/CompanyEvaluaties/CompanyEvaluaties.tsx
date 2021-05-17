import { Row, Col, Typography, Statistic, Card, Rate, Tooltip } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined, InfoCircleOutlined } from '@ant-design/icons';
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

  let averageScore = 0; // average score 
  let rateScoreFinal = 0; // smileys score

  const setAverageScoreHandler = (averageTotal, evaluationsListCount) => {
    averageScore = averageTotal / evaluationsListCount;
    let rateScoreRaw = averageScore / 2;
    rateScoreFinal = rateScoreRaw;
  }

  const showEvaluations = () => {
    let evaList = [];
    let averageTotal = 0.0;
    let evaluationsListCount = 0;

    if (evaluations !== null) {

      // loop through evaluations object
      for (const key in evaluations) {
        if (Object.prototype.hasOwnProperty.call(evaluations, key)) {
          const element = evaluations[key];
          let evaluationItemScore = element.score;

          if (evaluationItemScore == "") {
            evaList.push(
              <Col xs={12} className="evaluation-item-empty" key={key}>
                <Tooltip title={element.explanation} color={"#1890ff"} arrowPointAtCenter={true}>
                  <Statistic title={key} value={"Nog niet beschikbaar"} />
                </Tooltip>
              </Col>)
            evaluationsListCount++;

          } else {
            let evaluationItemScoreParsed = parseInt(element.score); // parse score to int
            averageTotal = averageTotal + evaluationItemScoreParsed; // count all evaluation scores

            evaList.push(
              <Col xs={12} className="evaluation-item" key={key}>
                <Tooltip title={element.explanation} color={"#1890ff"} arrowPointAtCenter={true}>
                  <Statistic title={key} value={evaluationItemScoreParsed.toFixed(1)} />
                </Tooltip>
              </Col>)
            evaluationsListCount++;
          }
        }


      }

      // function to calculate average score
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

            <Rate defaultValue={0} value={rateScoreFinal} className="average-score-smileys" disabled allowHalf allowClear={false} character={({ index }) => customIcons[index + 1]} />
            <Title level={4}>AVERAGE SCORE</Title>
          </Card>
        </Col>
      </Row>
    </>
  );
}
