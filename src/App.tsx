import { useState } from "react";
import { useRequest } from "../src/helpers/axios";
import "./App.css";
import { CompanyGrid } from "./components/CompanyGrid/CompanyGrid";
import { SiteHeader } from "./components/SiteHeader/SiteHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Company } from "./components/Company/Company";
import { Layout } from "antd";

const { Content } = Layout;

const gapSize = 16;
const baseUrl: string = process.env.REACT_APP_API_URL;

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [companiesFetchError, setCompaniesFetchError] = useState(null);   // ! setCompaniesFetchError is unused
  let companiesFetched = false;

  const data = useRequest(`${baseUrl}/companies`);

  if (!data) {
    return null;
  }

  const companyRoutes = data.response.map((company) => {
    companiesFetched = true;
    return (
      <Route exact path={`/company/${company.id}`}>
        <Company company={company} />
      </Route>
    );
  });

  return (
    <Layout className="site-layout">
      <Router>
        <SiteHeader setSearchInput={setSearchInput} />
        <Content
          className="center"
          style={{
            margin: `${gapSize}px 0px 0px 0px`,
            padding: `0px ${gapSize}px 0px ${gapSize}px`,
            width: "100%",
          }}
        >
          <Content style={{ maxWidth: "1500px" }}>
            <Switch>
              <Route exact path="/">
                <CompanyGrid
                  companies={data.response}
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
  );
}

export default App;
