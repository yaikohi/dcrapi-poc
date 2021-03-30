import { List, Avatar } from 'antd';
import { Contact } from '../../interfaces/Contact'

interface CompanyContactInfoProps {
  website: string,
  contacts: Array<Contact>
}

export const CompanyContactInfo: React.FC<CompanyContactInfoProps> = ({ website, contacts }: CompanyContactInfoProps) => {
  return (
    <>
      <List.Item>
        <List.Item.Meta
          title={<a href={website}>{website}</a>}
        />
      </List.Item>
      <List
        itemLayout="horizontal"
        dataSource={contacts}
        renderItem={contact => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
              title={contact.name}
              description={contact.email.toLowerCase()}
            />
          </List.Item>
        )}
      />
    </>
  );
}
