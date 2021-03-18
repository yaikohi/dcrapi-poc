import { Typography } from 'antd';
const { Paragraph, Title } = Typography;

interface CompanyDetailsProps {
  companyName: string;
  companyTagline: string;
}

export const CompanyDetails: React.FC<CompanyDetailsProps> = ({ companyName, companyTagline }: CompanyDetailsProps) => {
  return (
    <>
      <Title>Company Name</Title>
      <Paragraph>CompanyTagline</Paragraph>
    </>
  );
}
