import './App.css';
import { CompanyGrid } from './components/CompanyGrid/CompanyGrid';
import { Input } from 'antd';
import { Layout } from 'antd';

const { Search } = Input;
const { Header, Content  } = Layout;

const gapSize = 16;

function App() {
  return (
    <Layout className="site-layout">
        <Header className="site-layout-background center" style={{ padding: `${gapSize}px` }}>
          <Search className="search-bar" placeholder="Bedrijfsnaam" enterButton />
        </Header>
        <Content style={{ margin: `${gapSize}px` }}>
          <CompanyGrid />
        </Content>
    </Layout>
      
  )
}

export default App;
