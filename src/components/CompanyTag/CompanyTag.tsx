import { Tag } from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;

interface CompanyTagProps {
  text: String,
}

export const CompanyTag: React.FC<CompanyTagProps> = ({ text }: CompanyTagProps) => {
  return (
    <Tag>
      <Text>
        { text }
      </Text>
    </Tag>
  )
}