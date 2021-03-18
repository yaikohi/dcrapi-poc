import { Typography } from 'antd';
const { Paragraph } = Typography;

interface CompanyEvaluationsProps {
  evaluationTitle: string;
}

export const CompanyEvaluaties: React.FC<CompanyEvaluationsProps> = ({ evaluationTitle }: CompanyEvaluationsProps) => {
  return (
    <>
      <Paragraph>
        Coming Soon
      </Paragraph>
    </>
  );
}
