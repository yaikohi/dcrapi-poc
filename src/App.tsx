import { useState, useEffect } from 'react';
import './App.css';
import { CompanyGrid } from './components/CompanyGrid/CompanyGrid';
import { SiteHeader } from './components/SiteHeader/SiteHeader';
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams, useHistory
} from "react-router-dom";
import { Company } from './components/Company/Company';

const { Content } = Layout;

const gapSize = 16;
const baseUrl: string = process.env.REACT_APP_API_URL;

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [companiesFetchError, setCompaniesFetchError] = useState(null);
  const [companiesFetched, setCompaniesFetched] = useState(false);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/companies`)
      .then(res => res.json())
      .then(
        (result) => {
          setCompaniesFetched(true);
          setCompanies(result.response);
        },
        (error) => {
          setCompaniesFetched(true);
          setCompaniesFetchError(error);
        }
      )
  }, [])

  const companyRoutes = companies.map((company) => {
    return (
      <Route exact path={`/company/${company.id}`}>
        <Company company={company} />
      </Route>
    )
  }) 

  return (
    <Layout className="site-layout">
      <Router>
        <SiteHeader setSearchInput={setSearchInput} />
        <Content className="center" style={{ margin: `${gapSize}px 0px 0px 0px`, padding: `0px ${gapSize}px 0px ${gapSize}px`, width: "100%" }}>
          <Content style={{ maxWidth: "1500px" }}>
            <Switch>
              <Route exact path="/">
                <CompanyGrid 
                  companies={companies} 
                  searchInput={searchInput} 
                  companiesFetched={companiesFetched} 
                  companiesFetchError={companiesFetchError}
                />
              </Route>
              {companyRoutes}
            </Switch>
          </Content>
        </Content>
      </Router>
    </Layout>  
  )
}

export default App;
