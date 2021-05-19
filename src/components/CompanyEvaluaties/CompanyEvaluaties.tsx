import { useEffect, useState } from 'react';
import { Row, Col, Typography, Statistic, Card, Rate, Tooltip } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined, InfoCircleOutlined } from '@ant-design/icons';
import './CompanyEvaluaties.css';
const { Paragraph } = Typography;

const baseUrl: string = process.env.REACT_APP_API_URL;
interface CompanyEvaluationProps {
  company: any;
}
const { Title, Text } = Typography;

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

export const CompanyEvaluaties: React.FC<CompanyEvaluationProps> = ({ company }: CompanyEvaluationProps) => {

  const [evaluationsAvailable, setEvaluationsAvailable] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}/reviews/` + company)
      .then(res => res.json())
      .then(
        (data) => {
          //setCompanyEvaluations(data);
          console.log(data.response);
        },
        (error) => {
          console.log(error);
        }
      )
  }, [])


  let averageScore = 0; // average score 
  let rateScoreFinal = 0; // smileys score

  const setAverageScoreHandler = (averageTotal, evaluationsListCount) => {
    averageScore = averageTotal / evaluationsListCount;
    let rateScoreRaw = averageScore / 2;
    rateScoreFinal = rateScoreRaw;
  }

  const AverageScoreCard = () => {
    // averageScore = averageTotal / evaluationsListCount;
    // let rateScoreRaw = averageScore / 2;
    // rateScoreFinal = rateScoreRaw;
    return (<Card
      hoverable
      className="center average-score-item"
    >
      <div className="average-score-number">
        <Text className="evaluaties-score-number">{averageScore.toFixed(1)}</Text>
      </div>
      <Rate defaultValue={0} value={rateScoreFinal} className="average-score-smileys" disabled allowHalf allowClear={false} character={({ index }) => customIcons[index + 1]} />
      <Title level={4}>AVERAGE SCORE</Title>
    </Card>)
  }


  // const showEvaluations = () => {
  //   let evaList = [];
  //   let averageTotal = 0.0;
  //   let evaluationsListCount = 0;
  //   let checkIfEmpty = evaluations.response;

  //   // array exists and is not empty
  //   if (Array.isArray(checkIfEmpty) && checkIfEmpty.length) {

  //     let listLocation = checkIfEmpty[0].review;
  //     // loop through evaluations object
  //     for (const key in listLocation) {
  //       if (Object.prototype.hasOwnProperty.call(listLocation, key)) {
  //         const element = listLocation[key];
  //         let evaluationItemScore = element.score;

  //         if (evaluationItemScore !== "") {
  //           let evaluationItemScoreParsed = parseInt(element.score); // parse score to int
  //           averageTotal = averageTotal + evaluationItemScoreParsed; // count all evaluation scores

  //           evaList.push(
  //             <Col xs={12} className="evaluation-item" key={key}>
  //               <Tooltip title={element.explanation} color={"#1890ff"} arrowPointAtCenter={true}>
  //                 <Statistic title={key} value={evaluationItemScoreParsed.toFixed(1)} />
  //               </Tooltip>
  //             </Col>)

  //         } else {
  //           evaList.push(
  //             <Col xs={12} className="evaluation-item-empty" key={key}>
  //               <Tooltip title={element.explanation} color={"#1890ff"} arrowPointAtCenter={true}>
  //                 <Statistic title={key} value={"Geen evaluaties beschikbaar"} />
  //               </Tooltip>
  //             </Col>)
  //         }
  //       }
  //       evaluationsListCount++;
  //     }

  //     // function to calculate average score
  //     setAverageScoreHandler(averageTotal, evaluationsListCount);
  //   } else {
  //     evaList.push(<Paragraph>Geen evaluaties beschikbaar</Paragraph>)
  //   }

  //   return evaList;

  // }

  // const EvaluationsList = evaluations.response[0];
  // const EvaluationsReviews = EvaluationsList.review;
  // console.log(EvaluationsReviews);

  return (
    <Row gutter={12} >
      <Col md={18}>
        <Row gutter={8} className="evaluaties-scores-section">
          {/* {EvaluationsList.map((item, index) => (
            <p>{item.quality}!</p>
          ))} */}
          <Col xs={12} className="evaluation-item" key={1}>
            <Tooltip title={"Test tooltip"} color={"#1890ff"} arrowPointAtCenter={true}>
              <Statistic title={"Title"} value={9} />
            </Tooltip>
          </Col>

        </Row>
      </Col>
      <Col md={6}>
        {AverageScoreCard()}
      </Col>
    </Row>
  );
}
