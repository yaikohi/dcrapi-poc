import { useState, FC } from 'react';
import { Card, Row, Col } from 'antd';
import { Company as CompanyType } from '../../interfaces/Company';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './CompanyGrid.css';

interface CompanyGridProps {
  companies: Array<CompanyType>
  companiesFetched: boolean
  companiesFetchError: Error | null
  searchInput: string
}

const baseUrl: string = process.env.REACT_APP_API_URL;

export const CompanyGrid: FC<CompanyGridProps> = (props) => {
  const searchInput = props.searchInput.toLowerCase()
  let companies: Array<CompanyType> = [];
  if (props.searchInput) {
    companies = props.companies.filter(company => {
      return company.name.toLowerCase().includes(searchInput)
    })
  } else {
    companies = props.companies
  }

  const companyGridComponents = companies.map((company: CompanyType) =>
    <Col xs={24} sm={12} md={6}>
      <Link to={`/company/${company.id}`} key={company.id}>
        <Card.Grid className="company-grid">
          <img 
            src={`${baseUrl}${company.logo}`} 
            className="company-grid-logo" 
            alt={`${company.name} logo`}
          />
        </Card.Grid>
      </Link>
    </Col>
  )

  if (props.companiesFetchError) {
    return <div>Error: {props.companiesFetchError.message}</div>;
  } else if (!props.companiesFetched) {
    return <Card title="Bedrijven" loading={true}></Card>;
  } else {
    return (
      <Card title="Bedrijven">
        <Row>{companyGridComponents}</Row>
      </Card>
    );
  }
}