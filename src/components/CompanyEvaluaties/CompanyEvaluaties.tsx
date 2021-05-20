import { useRequest } from '../../helpers/axios';
import { Row, Col, Typography, Statistic, Card, Rate, Tooltip } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
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

    let averageScore = 0;

    const evaluations = useRequest(`${baseUrl}/reviews/${company}`);
    if (!evaluations) {
        return null;
    }
    const evaluationsRaw = evaluations.response;

    const AverageScoreCard = () => {

        if (!evaluations.length) {
            const avgScore = evaluations.response[0];

            if (avgScore.averageScore > 0) {
                averageScore = avgScore.averageScore;
                const rateScoreFinal = averageScore / 2; // smileys score

                return (<Card
                    hoverable
                    className="center average-score-item"
                >
                    <div className="average-score-number">
                        <Text className="evaluaties-score-number">{averageScore}</Text>
                    </div>
                    <Rate defaultValue={0} value={rateScoreFinal} className="average-score-smileys" disabled allowHalf allowClear={false} character={({ index }) => customIcons[index + 1]} />
                    <Title level={4}>AVERAGE SCORE</Title>
                </Card>)
            } else {
                return
            }
        }

    }

    const showEvaluations = () => {
        let evaList = [];
        let evaluationsListCount = 0;
        let checkIfEmpty = evaluationsRaw;

        // array exists and is not empty
        if (Array.isArray(checkIfEmpty) && checkIfEmpty.length) {

            let listLocation = evaluationsRaw[0].review;
            // loop through evaluations object
            for (const key in listLocation) {

                if (Object.prototype.hasOwnProperty.call(listLocation, key)) {
                    const element = listLocation[key];
                    let evaluationItemScore = element.score;

                    if (evaluationItemScore !== "") {
                        let evaluationItemScoreParsed = parseInt(element.score); // parse score to int

                        evaList.push(
                            <Col xs={12} className="evaluation-item" key={key}>
                                <Tooltip title={element.explanation} color={"#1890ff"} arrowPointAtCenter={true}>
                                    <Statistic title={key} value={evaluationItemScoreParsed} />
                                </Tooltip>
                            </Col>)

                    } else {
                        evaList.push(
                            <Col xs={12} className="evaluation-item-empty" key={key}>
                                <Tooltip title={element.explanation} color={"#1890ff"} arrowPointAtCenter={true}>
                                    <Statistic title={key} value={"Geen evaluaties beschikbaar"} />
                                </Tooltip>
                            </Col>)
                    }
                }
                evaluationsListCount++;
            }

        } else {
            evaList.push(<Paragraph>Geen evaluaties beschikbaar</Paragraph>)
        }

        return evaList;
    }

    return (
        <Row gutter={12} >
            <Col md={18}>
                <Row gutter={8} className="evaluaties-scores-section">
                    {showEvaluations()}
                </Row>
            </Col>
            <Col md={6}>
                {AverageScoreCard()}
            </Col>
        </Row>
    );
}
