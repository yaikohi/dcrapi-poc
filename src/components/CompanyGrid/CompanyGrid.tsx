import { CSSProperties, useState, useEffect } from 'react';
import { Card, Modal, Button } from 'antd';
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

function CompanyGrid() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(false);

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
        <Modal
          title="Modal 1000px width"
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={1000}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>

        <Card title="Bedrijven">
          {items.map((company: any) =>
            <a onClick={() => setVisible(true)} key={company.id}>
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

export { CompanyGrid };