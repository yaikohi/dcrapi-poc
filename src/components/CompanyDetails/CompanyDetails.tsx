import { Typography } from 'antd';
import CSS from "csstype";

const { Paragraph, Title } = Typography;

interface CompanyDetailsProps {
  companyName: string;
  companyTagline: string;
  style?: CSS.Properties;  // allows inline CSS styling inside parent components
}

export const CompanyDetails: React.FC<CompanyDetailsProps> = ({ companyName, companyTagline }: CompanyDetailsProps) => {
  return (
    <>
      <Title>{companyName}</Title>
      <Paragraph>{companyTagline}</Paragraph>
    </>
  );
}
