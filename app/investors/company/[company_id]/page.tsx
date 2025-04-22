export default function Page({ params }: { params: { company_id: string } }) {
    const companies = [
      { kp: "ezes-1", name: "EZE'S", category: "Retail", Established: "2024", img: "/EZE'S.png" },
      { kp: "ezes-2", name: "EZE'S", category: "Retail", Established: "2024", img: "/EZE'S.png" },
      { kp: "ezes-3", name: "EZE'S", category: "Retail", Established: "2024", img: "/EZE'S.png" },
      { kp: "ezes-4", name: "EZE'S", category: "Retail", Established: "2024", img: "/EZE'S.png" },
    ];
  
    const company = companies.find(c => c.kp === params.company_id)
  
    if (!company) return <div>Company not found</div>
  
    return (
      <div>
        <h1>{company.name}</h1>
        <p>Category: {company.category}</p>
        <p>Established: {company.Established}</p>
        <img src={company.img} alt={company.name} width={200} />
      </div>
    )
  }
  