import { Row, Col, Typography, Statistic, Card, Rate, Tooltip } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined, InfoCircleOutlined } from '@ant-design/icons';
import './CompanyEvaluaties.css';
const { Paragraph } = Typography;
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
    let checkIfEmpty = evaluations.response;

    // array exists and is not empty
    if (Array.isArray(checkIfEmpty) && checkIfEmpty.length) {

      let listLocation = evaluations.response[0].review;

      // loop through evaluations object
      for (const key in listLocation) {
        if (Object.prototype.hasOwnProperty.call(listLocation, key)) {
          const element = listLocation[key];
          let evaluationItemScore = element.score;

          console.log(element);

          if (evaluationItemScore == "") {
            evaList.push(
              <Col xs={12} className="evaluation-item-empty" key={key}>
                <Tooltip title={element.explanation} color={"#1890ff"} arrowPointAtCenter={true}>
                  <Statistic title={key} value={"Geen evaluaties beschikbaar"} />
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

      console.log(evaList);

      // function to calculate average score
      setAverageScoreHandler(averageTotal, evaluationsListCount);
      return evaList;
    }

    // if (evaluations.length > 0) {

    //   // loop through evaluations object
    //   for (const key in evaluations.repsonse) {
    //     if (Object.prototype.hasOwnProperty.call(evaluations, key)) {
    //       const element = evaluations[key];
    //       let evaluationItemScore = element.score;

    //       if (evaluationItemScore == "") {
    //         evaList.push(
    //           <Col xs={12} className="evaluation-item-empty" key={key}>
    //             <Tooltip title={element.explanation} color={"#1890ff"} arrowPointAtCenter={true}>
    //               <Statistic title={key} value={"Geen evaluaties beschikbaar"} />
    //             </Tooltip>
    //           </Col>)
    //         evaluationsListCount++;

    //       } else {
    //         let evaluationItemScoreParsed = parseInt(element.score); // parse score to int
    //         averageTotal = averageTotal + evaluationItemScoreParsed; // count all evaluation scores

    //         evaList.push(
    //           <Col xs={12} className="evaluation-item" key={key}>
    //             <Tooltip title={element.explanation} color={"#1890ff"} arrowPointAtCenter={true}>
    //               <Statistic title={key} value={evaluationItemScoreParsed.toFixed(1)} />
    //             </Tooltip>
    //           </Col>)
    //         evaluationsListCount++;
    //       }
    //     }
    //   }

    //   //console.log(evaluations.response.length);

    //   // function to calculate average score
    //   setAverageScoreHandler(averageTotal, evaluationsListCount);

    // } else {
    //   evaList.push(<Paragraph>Geen evaluaties beschikbaar</Paragraph>)
    // }

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
