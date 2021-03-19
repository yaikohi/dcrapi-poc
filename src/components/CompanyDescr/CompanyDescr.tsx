import { Typography } from 'antd';
const { Paragraph } = Typography;

interface CompanyDescrProps {
  companyDescr: string;
}

export const CompanyDescr: React.FC<CompanyDescrProps> = ({ companyDescr }: CompanyDescrProps) => {
  return <Paragraph>{companyDescr}</Paragraph>;
}
