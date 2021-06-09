import { FC } from 'react';
import './SiteHeader.css';
import { Layout } from 'antd';
import { Input } from 'antd';
import { useHistory } from "react-router-dom";
import CSS from "csstype";

const { Header } = Layout;
const { Search } = Input;

const gapSize = 30;
const headerStyle: CSS.Properties = {
 padding: `${gapSize}px`, 
 margin:`${gapSize}px`, 
 backgroundColor:'#ffffffff',
 display: "flex",
 justifyContent: "center",
 alignItems: "center",
}
interface SiteHeaderProps {
  setSearchInput: any
}

export const SiteHeader: FC<SiteHeaderProps> = (props) => {
  let history = useHistory();
  const handleOnSearch = () => history.push('/');

  const onSearchBarChange = (e) => {
    props.setSearchInput(e.nativeEvent.srcElement.value);
  }

  return (
    <Header style={headerStyle}>
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

