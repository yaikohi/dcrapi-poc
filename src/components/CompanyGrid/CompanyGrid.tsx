import { useState, FC } from 'react';
import { Card, Row, Col } from 'antd';
import { CompanyInfoModal } from '../Modals/CompanyInfoModal';
import { Company } from '../../interfaces/Company';
import './CompanyGrid.css';

interface CompanyGridProps {
  companies: Array<Company>
  companiesAreLoaded: boolean
  companiesFetchError: Error | null
  searchInput: string
}

const baseUrl: string = process.env.REACT_APP_API_URL;

export const CompanyGrid: FC<CompanyGridProps> = (props) => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  function createModalOnCompanyId(companyId) {
    setSelectedCompany(props.companies.find(company => company.id === companyId));
    setModalVisible(true);
  }

  const searchInput = props.searchInput.toLowerCase()
  let companies: Array<Company> = [];
  if (props.searchInput) {
    companies = props.companies.filter(company => {
      return company.name.toLowerCase().includes(searchInput)
    })
  } else {
    companies = props.companies
  }

  if (props.companiesFetchError) {
    return <div>Error: {props.companiesFetchError.message}</div>;
  } else if (!props.companiesAreLoaded) {
    return <Card title="Bedrijven" loading={true}></Card>;
  } else if (!selectedCompany) {
    return (
      <Card title="Bedrijven">
        <Row>
          {companies.map((company: any) =>
            <Col md={6} className="company-grid-column">
              <div
                onClick={() => createModalOnCompanyId(company.id)}
                key={company.id}
              >
                <Card.Grid className="company-grid">
                  <img 
                    src={`${baseUrl}${company.logo}`} 
                    className="company-grid-logo"
                    alt={`${company.name} logo`}
                  />
                </Card.Grid>
              </div>
            </Col>
          )}
        </Row>
      </Card>
    );
  } else {
    return (
      <>
        <CompanyInfoModal
          selectedCompany={selectedCompany}
          modalState={modalVisible}
          onModalStateChange={(val) => setModalVisible(val)}
        />
        <Card title="Bedrijven">
          <Row>
            {companies.map((company: Company) =>
              <Col xs={24} sm={12} md={6}>
                <div
                  onClick={() => createModalOnCompanyId(company.id)}
                  key={company.id}
                >
                  <Card.Grid className="company-grid">
                    <img 
                      src={`${baseUrl}${company.logo}`} 
                      className="company-grid-logo" 
                      alt={`${company.name} logo`}
                    />
                  </Card.Grid>
                </div>
              </Col>
            )}
          </Row>
        </Card>
      </>
    );
  }
}