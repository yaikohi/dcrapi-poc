interface CompanyDetailsProps {
  companyName: string;
  companyTagline: string;
}

export const CompanyDetails: React.FC<CompanyDetailsProps> = ({ companyName, companyTagline }: CompanyDetailsProps) => {
  return (
    <>
      <h1>Company Name</h1>
      <p>CompanyTagline</p>
    </>
  );
}
