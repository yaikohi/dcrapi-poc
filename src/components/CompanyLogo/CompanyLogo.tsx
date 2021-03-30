import './CompanyLogo.css';

interface CompanyLogoProps {
  logoName: string;
}

const baseUrl: string = process.env.REACT_APP_API_URL;

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ logoName }: CompanyLogoProps) => {
  return <img src={`${baseUrl}${logoName}`} className="company-logo" alt={`logo`}></img>;
}
