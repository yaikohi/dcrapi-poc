import { CSSProperties, useState, useEffect } from 'react';
import { Card, Row, Col } from 'antd';
import { CompanyInfoModal } from '../Modals/CompanyInfoModal';

const gridStyle: CSSProperties = {
  width: '100%',
  textAlign: 'center',
};

const imgStyle: CSSProperties = {
  maxWidth: "100%",
  height: "150px",
  objectFit: "contain"
};

const baseUrl: string = process.env.REACT_APP_API_URL;

export function CompanyGrid() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [companySelected, setCompanySelected] = useState(null);
  const [visible, setVisible] = useState(false);

  function fetchOnCompanyId(companyId) {
    setCompanySelected(items.find(item => item.id === companyId)); //set company id
    setVisible(true); // view modal
  }

  useEffect(() => {
    fetch(`${baseUrl}/companies`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.response);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Card title="Bedrijven" loading={true}></Card>;
  } else if (!companySelected) {
    return (
      <Card title="Bedrijven">
        <Row>
          {items.map((company: any) =>
            <Col md={6}>
              <a
                onClick={() => fetchOnCompanyId(company.id)}
                key={company.id}
              >
                <Card.Grid style={gridStyle}>
                  <img src={`${baseUrl}${company.logo}`} style={imgStyle} alt={`${company.name} logo`}></img>
                </Card.Grid>
              </a>
            </Col>
          )}
        </Row>
      </Card>
    );
  } else {
    return (
      <>
        <CompanyInfoModal
          companySelected={companySelected}
          modalState={visible}
          onModalStateChange={(val) => setVisible(val)}
        />
        <Card title="Bedrijven">
          <Row>
            {items.map((company: any) =>
              <Col md={6}>
                <a
                  onClick={() => fetchOnCompanyId(company.id)}
                  key={company.id}
                >
                  <Card.Grid style={gridStyle}>
                    <img src={`${baseUrl}${company.logo}`} style={imgStyle} alt={`${company.name} logo`}></img>
                  </Card.Grid>
                </a>
              </Col>
            )}
          </Row>
        </Card>
      </>
    );
  }
}