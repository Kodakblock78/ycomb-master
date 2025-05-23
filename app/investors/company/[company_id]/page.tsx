export default function Page({ params }: { params: { company_id: string } }) {
  const companies = [
    {
      kp: "ezes-1",
      name: "EZE'S",
      category: "Retail",
      Established: "2024",
      img: "/EZE'S.png",
      pills: ["Retail", "Fashion", "Utrecht", "Privately Held"],
    },
    {
      kp: "ezes-2",
      name: "EZE'S",
      category: "Retail",
      Established: "2024",
      img: "/EZE'S.png",
      pills: ["Retail", "Fashion", "Utrecht", "Privately Held"],
    },
    {
      kp: "ezes-3",
      name: "EZE'S",
      category: "Retail",
      Established: "2024",
      img: "/EZE'S.png",
      pills: ["Retail", "Fashion", "Utrecht", "Privately Held"],
    },
    {
      kp: "ezes-4",
      name: "EZE'S",
      category: "Retail",
      Established: "2024",
      img: "/EZE'S.png",
      objective: "Make choosing your shoes easy as EZE'S",
      team_size: 5,
      location: "Utrecht",
      status: "Prive",
      website_link: "http://ezes.nl",
      primary_partner: "Ezekiel Forko",
      founder_image: "/ezekielprofiel.jpeg",
      description:
        "Founded in 2023 by siblings Ezekiel and Bethany Forko, EZE’s is all about creating shoes that blend style and comfort. Driven by Ezekiel’s vision and Bethany’s design talent, we craft footwear that empowers you to step confidently into every adventure. EZE’s isn’t just about shoes—it’s about expressing individuality and embracing bold steps, one pair at a time.",
      pills: ["Retail", "Fashion", "Utrecht", "Privately Held"],
    },
  ];

    
    const company = companies.find(c => c.kp === params.company_id)
  
    if (!company) return <div>Company not found</div>
    
    function buttonCreator(array: string[]) {
      array.forEach((item) => {
        const button = document.createElement("p");
        button.innerText = item;
        button.className = "yc-tw-Pill rounded-sm bg-[#E6E4DC] uppercase tracking-widest px-3 py-[3px] text-[12px] font-thin";
        document.body.appendChild(button);
      }
    )
    } 


        return (
          
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <section className="relative isolate z-0 border-retro-sectionBorder sm:pr-[13px] ycdcPlus:pr-0 pt-2 sm:pt-4 lg:pt-6 pb-2 sm:pb-4 lg:pb-6">
        <div className="shared-breadcrumb flex items-center pb-4">
          <a href="/home" className="shared-breadcrumb-text">Home</a>
          <span className="shared-breadcrumb-pipe">›</span>
          <a href="/companies" className="shared-breadcrumb-text">Companies</a>
          <span className="shared-breadcrumb-pipe">›</span>
          <span className="shared-breadcrumb-text">{company.name}</span>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex-grow">
            <div className="mb-5 flex flex-row items-center gap-x-5">
              <div className="h-32 w-32 shrink-0 rounded-xl">
                <img 
                  src={company.img}
                  alt="Airbnb logo"
                  width={128}
                  height={128}
                  className="h-full w-full rounded-xl"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-x-3">
                  <h1 className="text-3xl font-bold">{company.name}</h1>
                </div>
                <div className="prose hidden max-w-full md:block">
                  <div className="text-xl">{company.objective}</div>
                </div>
                <div className="align-center flex flex-row flex-wrap gap-x-2 gap-y-2">
                  {company.pills.map((pill, index) => (
                    <p key={index} className="yc-tw-Pill rounded-sm bg-[#E6E4DC] uppercase tracking-widest px-3 py-[3px] text-[12px] font-thin">{pill}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="my-8 mb-4">
              <hr />
              <div className="flex flex-col justify-between md:flex-row">
                <nav className="flex justify-start space-x-8">
                  <div className="flex h-16 items-center">
                    <a href="/companies/airbnb" className="rounded-lg px-3 py-2 text-slate-700 no-underline hover:bg-[#EDEBE3] font-bold">Company</a>
                  </div>
                  <div className="flex h-16 items-center">
                    <a href="/companies/airbnb/jobs" className="rounded-lg px-3 py-2 text-slate-700 no-underline hover:bg-[#EDEBE3]">Jobs</a>
                    <span className="ycdc-badge ml-0 px-1.5 font-bold no-underline">0</span>
                  </div>

                </nav>
                <div className="image
                
                
                
                
                flex flex-row items-center px-3 leading-none text-aColor">
                  <a href={company.website_link} target="_blank" className="mb-2 whitespace-nowrap md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" width="1.25em" height="1.25em" className="-mt-px inline-block h-4 w-4 text-gray-600 image
                    
                    
                    
                    
                    -hover:underline">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                    </svg>
                    <span className="inline-block image
                    
                    
                    
                    
                    -hover:underline ml-1">{company.website_link}</span>
                  </a>
                </div>
              </div>
              <hr />
            </div>

            <section className="relative isolate z-0 border-retro-sectionBorder sm:pr-[13px] ycdcPlus:pr-0 pt-1 sm:pt-2 lg:pt-3 pb-1 sm:pb-2 lg:pb-3">
              <div className="prose max-w-full">
                <h3 className="sm:block md:hidden">Book accommodations around the world.</h3>
                <div className="prose max-w-full whitespace-pre-line">
                  {company.description}</div>
              </div>
            </section>

            <section className="relative isolate z-0 border-retro-sectionBorder sm:pr-[13px] ycdcPlus:pr-0 pt-2 sm:pt-4 lg:pt-6 pb-2 sm:pb-4 lg:pb-6">
              <div className="prose">
                <div className="my-4 text-2xl font-bold text-[#333333] md:mt-0">Active Founders</div>
              </div>
              <div className="max-w-[800px]">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Founder cards would go here */}
                  {/* Example for one founder */}
                  <div className="ycdc-card-new w-full space-y-1.5">
                    <div className="image
                    
                    
                    
                    
                    flex gap-4">
                      <div className="aspect-square h-24 shrink-0 overflow-hidden rounded-xl">
                        <img 
                          src={company.founder_image} 
                          alt={company.primary_partner}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xl font-bold">{company.primary_partner}</div>
                        <div className="pt-1 text-[15px] text-gray-600"></div>
                        <div className="mt-2 flex gap-2">
                          <a href="https://twitter.com/nathanblec" className="flex h-8 w-8 items-center justify-center rounded-md border border-[#EBEBEB] bg-white transition-colors duration-150 hover:bg-gray-50" target="_blank" rel="nofollow">
                            <img src="/images/social/x-logo.svg" alt="Twitter account" className="h-4 w-4" />
                          </a>
                          <a href="https://www.aedin.com/in/blecharczyk/" className="flex h-8 w-8 items-center justify-center rounded-md border border-[#EBEBEB] bg-white transition-colors duration-150 hover:bg-gray-50" target="_blank" rel="nofollow">
                            <div className="inline-block h-4 w-4 bg-contain bg-image-aedin">&nbsp;</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Repeat for other founders */}
                </div>
              </div>
            </section>

           
          </div>

          <div>
            <div className="ycdc-card-new space-y-1.5 sm:w-[300px]">
              <div className="mb-4 flex justify-center">
                <a href="/companies/airbnb" className="block" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={company.img} 
                    alt={company.name}
                    width={140}
                    height={140}
                    className="rounded-xl transition-opacity duration-150 hover:opacity-80 max-w-[120px] sm:max-w-[140px]"
                  />
                </a>
              </div>
              <div className="space-y-1">
                <div className="text-xl font-bold">
                  <a href="/companies/airbnb" className="hover:text-aColor" target="_blank" rel="noopener noreferrer">{company.name}</a>
                </div>
              </div>
              <div className="space-y-2 pt-4">
                <div className="flex flex-row justify-between">
                  <span>Founded:</span>
                  <span>{company.Established}</span>
                </div>
            
                <div className="flex flex-row justify-between">
                  <span>Team Size</span>
                  <span>{company.team_size}</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span>Status:</span>
                  <span className="flex items-center">
                    <div className="mr-[6px] h-2 w-2 rounded-full bg-green-500"></div>
                    Public
                  </span>
                </div>
                <div className="flex flex-row justify-between">
                  <span>Location:</span>
                  <span>{company.location}</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span>Primary Partner:</span>
                  <a href="https://www.ycombinator.com/people/garry-tan" className="text-aColor" target="_blank" rel="noopener noreferrer">{company.primary_partner}</a>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a href={company.website_link} className="flex h-9 w-9 items-center justify-center rounded-md border border-[#EBEBEB] bg-white transition-colors duration-150 hover:bg-gray-50" target="_blank" rel="nofollow noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" width="1.25em" height="1.25em" className="-mt-px inline-block h-4 w-4 text-[#333]">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                    </svg>
                  </a>
                  {/* Other social as would go here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate z-0 border-retro-sectionBorder sm:pr-[13px] ycdcPlus:pr-0 pt-2 sm:pt-4 lg:pt-6 pb-2 sm:pb-4 lg:pb-6">
        <div className="prose">
          <h4>
            <div className="my-4 text-2xl font-bold text-[#333333] md:mt-0">YC Sign Photo</div>
          </h4>
          <img 
            src=""
            alt="Company photo"
            width={800}
            height={600}
          />
        </div>
      </section>
    </div>
  );
};


  