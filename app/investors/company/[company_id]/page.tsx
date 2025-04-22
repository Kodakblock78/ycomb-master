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
    <div className="mx-auto max-w-ycdc-page">
      <section className="relative isolate z-0 border-retro-sectionBorder sm:pr-[13px] ycdcPlus:pr-0 pt-2 sm:pt-4 lg:pt-6 pb-2 sm:pb-4 lg:pb-6">
        <div className="shared-breadcrumb flex items-center pb-4">
          <a href="/home" className="shared-breadcrumb-text">Home</a>
          <span className="shared-breadcrumb-pipe">›</span>
          <a href="/companies" className="shared-breadcrumb-text">Companies</a>
          <span className="shared-breadcrumb-pipe">›</span>
          <span className="shared-breadcrumb-text">Airbnb</span>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex-grow">
            <div className="mb-5 flex flex-row items-center gap-x-5">
              <div className="h-32 w-32 shrink-0 rounded-xl">
                <img 
                  src="companies/ezes-1.png"
                  alt="Airbnb logo"
                  width={128}
                  height={128}
                  className="h-full w-full rounded-xl"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-x-3">
                  <h1 className="text-3xl font-bold">Airbnb</h1>
                </div>
                <div className="prose hidden max-w-full md:block">
                  <div className="text-xl">Book accommodations around the world.</div>
                </div>
                <div className="align-center flex flex-row flex-wrap gap-x-2 gap-y-2">
                  <a href="/companies?batch=W09" target="_blank">
                    <div className="yc-tw-Pill rounded-sm bg-[#E6E4DC] uppercase tracking-widest px-3 py-[3px] text-[12px] font-thin undefined flex flex-row items-center">
                      <div className="flex flex-row items-center gap-[6px]">
                        <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" className="inline-block h-3 w-3 text-[#E36D34]" width="1.25em" height="1.25em">
                          <title>Y Combinator Logo</title>
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g>
                              <polygon fill="#F05F22" points="0 320 320 320 320 0 0 0"></polygon>
                              <polygon fill="#FFFFFF" points="173 175.8652 173 247.0002 146 247.0002 146 175.8652 77.086 73.0002 110 73.0002 159.628 148.9972 209 73.0002 241.914 73.0002"></polygon>
                            </g>
                          </g>
                        </svg>
                        <span>W09</span>
                      </div>
                    </div>
                  </a>
                  <div className="yc-tw-Pill rounded-sm bg-[#E6E4DC] uppercase tracking-widest px-3 py-[3px] text-[12px] font-thin">
                    <div className="flex flex-row items-center justify-between">
                      <div className="mr-[6px] h-3 w-3 rounded-full bg-green-500"></div>
                      <span>Public</span>
                    </div>
                  </div>
                  <a href="/companies/industry/marketplace">
                    <div className="yc-tw-Pill rounded-sm bg-[#E6E4DC] uppercase tracking-widest px-3 py-[3px] text-[12px] font-thin">marketplace</div>
                  </a>
                  <a href="/companies/industry/travel">
                    <div className="yc-tw-Pill rounded-sm bg-[#E6E4DC] uppercase tracking-widest px-3 py-[3px] text-[12px] font-thin">travel</div>
                  </a>
                  <a href="/companies/location/san-francisco-bay-area">
                    <div className="yc-tw-Pill rounded-sm bg-[#E6E4DC] uppercase tracking-widest px-3 py-[3px] text-[12px] font-thin">San Francisco</div>
                  </a>
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
                  <div className="flex h-16 items-center">
                    <a href="/companies/airbnb#news" className="rounded-lg px-3 py-2 text-slate-700 no-underline hover:bg-[#EDEBE3]">News</a>
                  </div>
                </nav>
                <div className="image
                
                
                
                
                flex flex-row items-center px-3 leading-none text-aColor">
                  <a href="http://airbnb.com" target="_blank" className="mb-2 whitespace-nowrap md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" width="1.25em" height="1.25em" className="-mt-px inline-block h-4 w-4 text-gray-600 image
                    
                    
                    
                    
                    -hover:underline">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                    </svg>
                    <span className="inline-block image
                    
                    
                    
                    
                    -hover:underline ml-1">http://airbnb.com</span>
                  </a>
                </div>
              </div>
              <hr />
            </div>

            <section className="relative isolate z-0 border-retro-sectionBorder sm:pr-[13px] ycdcPlus:pr-0 pt-1 sm:pt-2 lg:pt-3 pb-1 sm:pb-2 lg:pb-3">
              <div className="prose max-w-full">
                <h3 className="sm:block md:hidden">Book accommodations around the world.</h3>
                <div className="prose max-w-full whitespace-pre-line">
                  Founded in August of 2008 and based in San Francisco, California, Airbnb is a trusted community marketplace for people to list, discover, and book unique accommodations around the world — online or from a mobile phone. Whether an apartment for a night, a castle for a week, or a villa for a month, Airbnb connects people to unique travel experiences, at any price point, in more than 33,000 cities and 192 countries. And with world-class customer service and a growing community of users, Airbnb is the easiest way for people to monetize their extra space and showcase it to an audience of millions.  

                  No global movement springs from individuals. It takes an entire team united behind something big. Together, we work hard, we laugh a lot, we brainstorm nonstop, we use hundreds of Post-Its a week, and we give the best high-fives in town. Headquartered in San Francisco, we have satellite offices in Dublin, London, Barcelona, Paris, Milan, Copenhagen, Berlin, Moscow, São Paolo, Sydney, and Singapore.
                </div>
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
                          src="https://bookface-images.s3.us-west-2.amazonaws.com/avatars/43dd0e2c9396adccf8b4e456d806245942afc1ed.jpg" 
                          alt="Nathan Blecharczyk"
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xl font-bold">Nathan Blecharczyk</div>
                        <div className="pt-1 text-[15px] text-gray-600">Founder/CTO</div>
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

            <section className="relative isolate z-0 border-retro-sectionBorder sm:pr-[13px] ycdcPlus:pr-0 pt-2 sm:pt-4 lg:pt-6 pb-2 sm:pb-4 lg:pb-6" id="news">
              <div>
                <div className="prose mb-4">
                  <div className="my-4 text-2xl font-bold text-[#333333] md:mt-0">Latest News</div>
                </div>
                <div>
                  {/* News items would go here */}
                  <div className="border-b py-2">
                    <div className="ycdc-with-a-color mb-1 pr-4 leading-none">
                      <a href="https://www.theverge.com/2023/5/9/23716903/airbnb-ceo-brian-chesky-rooms-ai-travel-future-of-work-summer-2023" className="prose font-medium" target="_blank">
                        Airbnb CEO Brian Chesky on taking it back to basics: 'I can't make products just for 41-year-old tech founders' - The Verge
                      </a>
                    </div>
                    <div className="text-sm">May 09, 2023</div>
                  </div>
                  {/* Repeat for other news items */}
                </div>
              </div>
            </section>
          </div>

          <div>
            <div className="ycdc-card-new space-y-1.5 sm:w-[300px]">
              <div className="mb-4 flex justify-center">
                <a href="/companies/airbnb" className="block" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://bookface-images.s3.us-west-2.amazonaws.com/logos/0d179a13051b8806e0d2e3e8d6416fa6122e6ba0.png" 
                    alt="Airbnb"
                    width={140}
                    height={140}
                    className="rounded-xl transition-opacity duration-150 hover:opacity-80 max-w-[120px] sm:max-w-[140px]"
                  />
                </a>
              </div>
              <div className="space-y-1">
                <div className="text-xl font-bold">
                  <a href="/companies/airbnb" className="hover:text-aColor" target="_blank" rel="noopener noreferrer">Airbnb</a>
                </div>
              </div>
              <div className="space-y-2 pt-4">
                <div className="flex flex-row justify-between">
                  <span>Founded:</span>
                  <span>2008</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span>Batch:</span>
                  <span className="whitespace-nowrap">W09</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span>Team Size:</span>
                  <span>6132</span>
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
                  <span>San Francisco</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span>Primary Partner:</span>
                  <a href="https://www.ycombinator.com/people/garry-tan" className="text-aColor" target="_blank" rel="noopener noreferrer">Garry Tan</a>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a href="http://airbnb.com" className="flex h-9 w-9 items-center justify-center rounded-md border border-[#EBEBEB] bg-white transition-colors duration-150 hover:bg-gray-50" target="_blank" rel="nofollow noopener noreferrer">
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
            src="https://bookface-images.s3.us-west-2.amazonaws.com/attachments/8a7236c94b4d9b78b67ce66e02cbca497e632d99.png" 
            alt="Company photo"
            width={800}
            height={600}
          />
        </div>
      </section>
    </div>
  );
};


  