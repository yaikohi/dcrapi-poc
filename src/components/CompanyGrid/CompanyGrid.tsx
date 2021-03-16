import { CSSProperties, useState, useEffect } from 'react';
import { Card } from 'antd';
import { CompanyInfoModal } from '../Modals/companyInfoModal';

const gridStyle: CSSProperties = {
  width: '25%',
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

  const companyInfo =
  {
    id: companySelected,
    name: "Testing",
  }

  function FetchCompanyId(props) {

    setCompanySelected(props);//set company id
    setVisible(true);
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
  } else {
    return (
      <>
        <CompanyInfoModal company={companyInfo} modalState={visible} onModalStateChange={(val) =>setVisible(val)} />
        <Card title="Bedrijven">
          {items.map((company: any) =>
            <a  
              onClick={() => {FetchCompanyId(company.id);}} 
              key={company.id} >
              <Card.Grid style={gridStyle}>
                <img src={`${baseUrl}${company.logo}`} style={imgStyle} alt={`${company.name} logo`}></img>
              </Card.Grid>
            </a>
          )}
        </Card>
      </>
    );
  }
}