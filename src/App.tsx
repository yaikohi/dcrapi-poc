import { useState, useEffect } from 'react';
import './App.css';
import { CompanyGrid } from './components/CompanyGrid/CompanyGrid';
import { Input } from 'antd';
import { Layout } from 'antd';

const { Search } = Input;
const { Header, Content  } = Layout;

const gapSize = 16;
const baseUrl: string = process.env.REACT_APP_API_URL;

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [companiesFetchError, setCompaniesFetchError] = useState(null);
  const [companiesAreLoaded, setcompaniesAreLoaded] = useState(false);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/companies`)
      .then(res => res.json())
      .then(
        (result) => {
          setcompaniesAreLoaded(true);
          setCompanies(result.response);
        },
        (error) => {
          setcompaniesAreLoaded(true);
          setCompaniesFetchError(error);
        }
      )
  }, [])

  const onSearchBarChange = (e) => {
    setSearchInput(e.nativeEvent.srcElement.value)
  }

  return (
    <Layout className="site-layout">
        <Header className="site-layout-background center" style={{ padding: `${gapSize}px` }}>
          <Search 
            onChange={onSearchBarChange} 
            className="search-bar" 
            placeholder="Bedrijfsnaam" 
            enterButton 
          />
        </Header>
        <Content className="center" style={{ margin: `${gapSize}px 0px 0px 0px`, padding: `0px ${gapSize}px 0px ${gapSize}px`, width: "100%" }}>
          <Content style={{ maxWidth: "1500px" }}>
            <CompanyGrid 
              companies={companies} 
              searchInput={searchInput} 
              companiesAreLoaded={companiesAreLoaded} 
              companiesFetchError={companiesFetchError}
            />
          </Content>
        </Content>
    </Layout>
      
  )
}

export default App;
