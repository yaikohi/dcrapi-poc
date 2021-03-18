//import { CSSProperties } from 'react';
import { List, Avatar } from 'antd';

interface CompanyContactInfoProps {
  contactInfo: string;
}

const data = [
  {
    title: 'Email',
  },
  {
    title: 'Blabla',
  },
  {
    title: 'Blahhblahblah',
  },
];

//const baseUrl: string = process.env.REACT_APP_API_URL;

export const CompanyContactInfo: React.FC<CompanyContactInfoProps> = ({ contactInfo }: CompanyContactInfoProps) => {

  return (
    <>
      <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Contact information should be here."
        />
      </List.Item>
    )}
  />,
    </>
  );
}
