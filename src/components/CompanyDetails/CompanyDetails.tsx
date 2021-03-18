//import { CSSProperties } from 'react';

interface CompanyDetailsProps {
  companyName: string;
  companyTagline: string;
}

//const baseUrl: string = process.env.REACT_APP_API_URL;

export const CompanyDetails: React.FC<CompanyDetailsProps> = ({ companyName, companyTagline }: CompanyDetailsProps) => {

  return (
    <>
      <h1>Company Name</h1>
      <p>CompanyTagline</p>
    </>
  );
}
