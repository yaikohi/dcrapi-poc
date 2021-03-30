import { FC } from 'react';
import './SiteHeader.css';
import { Layout } from 'antd';
import { Input } from 'antd';
import { useHistory } from "react-router-dom";

const { Header } = Layout;
const { Search } = Input;

const gapSize = 16;

interface SiteHeaderProps {
  setSearchInput: any
}

export const SiteHeader: FC<SiteHeaderProps> = (props) => {
  let history = useHistory();
  console.log(history)
  const handleOnSearch = () => history.push('/');

  const onSearchBarChange = (e) => {
    props.setSearchInput(e.nativeEvent.srcElement.value);
  }

  return (
    <Header className="site-layout-background center" style={{ padding: `${gapSize}px` }}>
      <Search 
        onChange={onSearchBarChange} 
        onSearch={handleOnSearch}
        className="search-bar" 
        placeholder="Bedrijfsnaam" 
        enterButton 
      />
    </Header>
  )
}

