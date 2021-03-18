import { CSSProperties } from 'react';

interface CompanyLogoProps {
  logoName: string;
}

const imgStyle: CSSProperties = {
  maxWidth: "200px",
  objectFit: "contain"
};

const baseUrl: string = process.env.REACT_APP_API_URL;

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ logoName }: CompanyLogoProps) => {

  return (
    <>
      <img src={`${baseUrl}${logoName}`} style={imgStyle} alt={`logo`}></img>
    </>
  );
}
