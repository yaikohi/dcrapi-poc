import { CSSProperties, useState, useEffect } from 'react';
import { Card } from 'antd';

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

function CompanyGrid() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

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
      <Card title="Bedrijven">
        {items.map((company: any) => 
          <a href={company.website}>
            <Card.Grid style={gridStyle} key={company.id}>
              <img src={`${baseUrl}${company.logo}`} style={imgStyle} alt={`${company.name} logo`}></img>
            </Card.Grid>
          </a>
        )}
      </Card>
    );
  }
}

export { CompanyGrid };