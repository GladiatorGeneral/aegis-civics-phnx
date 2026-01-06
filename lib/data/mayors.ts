import { GovernmentLeader } from "@/lib/types";

interface RawMayor {
  name: string;
  party: "D" | "R" | "I";
  city: string;
  state: string;
  phone: string;
  address: string;
  website: string;
  imageUrl?: string;
}

const rawMayors: RawMayor[] = [
  { 
    name: "Zohran Mamdani", 
    party: "D", 
    city: "New York", 
    state: "NY", 
    phone: "311", 
    address: "City Hall, New York, NY 10007", 
    website: "https://www.nyc.gov/office-of-the-mayor",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Zohran_Mamdani_%2851187440406%29.jpg"
  },
  { 
    name: "Karen Bass", 
    party: "D", 
    city: "Los Angeles", 
    state: "CA", 
    phone: "(213) 978-0600", 
    address: "200 N Spring St, Los Angeles, CA 90012", 
    website: "https://www.lacity.gov/mayor",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Karen_Bass_official_portrait_117th_Congress.jpg"
  },
  { 
    name: "Brandon Johnson", 
    party: "D", 
    city: "Chicago", 
    state: "IL", 
    phone: "(312) 744-5000", 
    address: "121 N LaSalle St, Chicago, IL 60602", 
    website: "https://www.chicago.gov/city/en/depts/mayor.html",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Brandon_Johnson_official_portrait.jpg"
  },
  { 
    name: "John Whitmire", 
    party: "D", 
    city: "Houston", 
    state: "TX", 
    phone: "(832) 393-1000", 
    address: "901 Bagby St, Houston, TX 77002", 
    website: "https://www.houstontx.gov/mayor",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/30/John_Whitmire_Portrait.jpg" 
  },
  { 
    name: "Kate Gallego", 
    party: "D", 
    city: "Phoenix", 
    state: "AZ", 
    phone: "(602) 262-7111", 
    address: "200 W Washington St, Phoenix, AZ 85003", 
    website: "https://www.phoenix.gov/mayor",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Kate_Gallego_official_photo.jpg"
  },
  { 
    name: "Cherelle Parker", 
    party: "D", 
    city: "Philadelphia", 
    state: "PA", 
    phone: "(215) 686-2181", 
    address: "1400 JFK Blvd, Philadelphia, PA 19107", 
    website: "https://www.phila.gov/departments/mayor/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Cherelle_Parker_2022.jpg/800px-Cherelle_Parker_2022.jpg"
  },
  { 
    name: "Gina Ortiz Jones", 
    party: "D", 
    city: "San Antonio", 
    state: "TX", 
    phone: "(210) 207-7200", 
    address: "100 Military Plaza, San Antonio, TX 78205", 
    website: "https://www.sanantonio.gov/Mayor",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Under_Secretary_of_the_Air_Force_Gina_Ortiz_Jones_%281%29.jpg"
  },
  { 
    name: "Todd Gloria", 
    party: "D", 
    city: "San Diego", 
    state: "CA", 
    phone: "(619) 236-6330", 
    address: "202 C St, San Diego, CA 92101", 
    website: "https://www.sandiego.gov/mayor",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/23/Todd_Gloria_official_portrait.jpg"
  },
  { 
    name: "Eric Johnson", 
    party: "R", 
    city: "Dallas", 
    state: "TX", 
    phone: "(214) 670-4054", 
    address: "1500 Marilla St, Dallas, TX 75201", 
    website: "https://dallascityhall.com/departments/mayor/Pages/default.aspx",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/87/Eric_Johnson_official_portrait.jpg"
  },
  { 
    name: "Matt Mahan", 
    party: "D", 
    city: "San Jose", 
    state: "CA", 
    phone: "(408) 535-4800", 
    address: "200 E Santa Clara St, San Jose, CA 95113", 
    website: "https://www.sanjoseca.gov/your-government/mayor-city-council/mayor-matt-mahan",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Matt_Mahan_Official_Portrait.jpg"
  },
  { 
    name: "Kirk Watson", 
    party: "D", 
    city: "Austin", 
    state: "TX", 
    phone: "(512) 978-2100", 
    address: "301 W 2nd St, Austin, TX 78701", 
    website: "https://www.austintexas.gov/department/mayor",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Kirk_Watson_Portrait.jpg"
  },
  { 
    name: "Donna Deegan", 
    party: "D", 
    city: "Jacksonville", 
    state: "FL", 
    phone: "(904) 630-1776", 
    address: "117 W Duval St, Jacksonville, FL 32202", 
    website: "https://www.coj.net/mayor",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Donna_Deegan.jpg"
  },
  { 
    name: "Mattie Parker", 
    party: "R", 
    city: "Fort Worth", 
    state: "TX", 
    phone: "(817) 392-6111", 
    address: "200 Texas St, Fort Worth, TX 76102", 
    website: "https://www.fortworthtexas.gov/departments/mayor",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/Mattie_Parker_official_photo.jpg"
  },
  { 
    name: "Andrew Ginther", 
    party: "D", 
    city: "Columbus", 
    state: "OH", 
    phone: "(614) 645-7671", 
    address: "90 W Broad St, Columbus, OH 43215", 
    website: "https://www.columbus.gov/mayor/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Mayor_Andrew_Ginther.jpg"
  },
  { 
    name: "Vi Lyles", 
    party: "D", 
    city: "Charlotte", 
    state: "NC", 
    phone: "(704) 336-2241", 
    address: "600 E 4th St, Charlotte, NC 28202", 
    website: "https://charlottenc.gov/mayor/Pages/default.aspx",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/79/Mayor_Vi_Lyles.jpg"
  },
  { 
    name: "Daniel Lurie", 
    party: "D", 
    city: "San Francisco", 
    state: "CA", 
    phone: "(415) 554-6141", 
    address: "1 Dr Carlton B Goodlett Pl, San Francisco, CA 94102", 
    website: "https://sfmayor.org/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Daniel_Lurie_Headshot.jpg"
  },
  { 
    name: "Katie Wilson", 
    party: "D", 
    city: "Seattle", 
    state: "WA", 
    phone: "(206) 684-4000", 
    address: "600 4th Ave, Seattle, WA 98104", 
    website: "https://www.seattle.gov/mayor" 
  },
  { 
    name: "Mike Johnston", 
    party: "D", 
    city: "Denver", 
    state: "CO", 
    phone: "(720) 865-9000", 
    address: "1437 Bannock St, Denver, CO 80202", 
    website: "https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Mayors-Office",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Mike_Johnston_CO_Sen.jpg"
  },
  { 
    name: "Muriel Bowser", 
    party: "D", 
    city: "Washington", 
    state: "DC", 
    phone: "(202) 727-2643", 
    address: "1350 Pennsylvania Ave NW, Washington, DC 20004", 
    website: "https://mayor.dc.gov/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/28/Muriel_Bowser_official_portrait.jpg"
  },
  { 
    name: "Michelle Wu", 
    party: "D", 
    city: "Boston", 
    state: "MA", 
    phone: "(617) 635-4500", 
    address: "1 City Hall Square, Boston, MA 02201", 
    website: "https://www.boston.gov/departments/mayors-office",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Michelle_Wu_official_portrait.jpg"
  },
  { 
    name: "Mary Sheffield", 
    party: "D", 
    city: "Detroit", 
    state: "MI", 
    phone: "(313) 224-3400", 
    address: "2 Woodward Ave, Detroit, MI 48226", 
    website: "https://detroitmi.gov/departments/mayors-office",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Mary_Sheffield_Official.jpg"
  },
  { 
    name: "Tishaura Jones", 
    party: "D", 
    city: "St. Louis", 
    state: "MO", 
    phone: "(314) 622-3201", 
    address: "1200 Market St, St. Louis, MO 63103", 
    website: "https://www.stlouis-mo.gov/government/departments/mayor/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tishaura_Jones_2017.jpg"
  },
  { 
    name: "Hillary Schieve", 
    party: "I", 
    city: "Reno", 
    state: "NV", 
    phone: "(775) 334-2000", 
    address: "1 E 1st St, Reno, NV 89501", 
    website: "https://www.reno.gov/government/city-council/mayor",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Hillary_Schieve.jpg"
  },
  { 
    name: "Keith Wilson", 
    party: "D", 
    city: "Portland", 
    state: "OR", 
    phone: "(503) 823-4120", 
    address: "1221 SW 4th Ave, Portland, OR 97204", 
    website: "https://www.portland.gov/wheeler" 
  },
  { 
    name: "Tim Keller", 
    party: "D", 
    city: "Albuquerque", 
    state: "NM", 
    phone: "(505) 768-3000", 
    address: "1 Civic Plaza NW, Albuquerque, NM 87102", 
    website: "https://www.cabq.gov/mayor",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/82/Tim_Keller_%28politician%29_official_portrait.jpg"
  },
  { 
    name: "Regina Romero", 
    party: "D", 
    city: "Tucson", 
    state: "AZ", 
    phone: "(520) 791-4201", 
    address: "255 W Alameda St, Tucson, AZ 85701", 
    website: "https://www.tucsonaz.gov/mayor",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/62/Regina_Romero_official_portrait.jpg"
  },
  { 
    name: "Quinton Lucas", 
    party: "D", 
    city: "Kansas City", 
    state: "MO", 
    phone: "(816) 513-3500", 
    address: "414 E 12th St, Kansas City, MO 64106", 
    website: "https://www.kcmo.gov/city-hall/mayor-quinton-lucas",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Quinton_Lucas.jpg"
  },
  { 
    name: "Erin Mendenhall", 
    party: "D", 
    city: "Salt Lake City", 
    state: "UT", 
    phone: "(801) 535-7704", 
    address: "451 S State St, Salt Lake City, UT 84111", 
    website: "https://www.slc.gov/mayor/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Erin_Mendenhall_official.jpg"
  },
  { 
    name: "Freddie O'Connell", 
    party: "D", 
    city: "Nashville", 
    state: "TN", 
    phone: "(615) 862-6000", 
    address: "1 Public Square, Nashville, TN 37201", 
    website: "https://www.nashville.gov/departments/mayor",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Freddie_O%27Connell_official_portrait.jpg"
  },
  { 
    name: "Eileen Higgins", 
    party: "D", 
    city: "Miami", 
    state: "FL", 
    phone: "(305) 250-5300", 
    address: "3500 Pan American Dr, Miami, FL 33133", 
    website: "https://www.miamigov.com/Government/Mayor-Francis-Suarez",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/98/Eileen_Higgins.jpg"
  },
  { 
    name: "Indya Kincannon", 
    party: "D", 
    city: "Knoxville", 
    state: "TN", 
    phone: "(865) 215-2040", 
    address: "400 Main St, Knoxville, TN 37902", 
    website: "https://knoxvilletn.gov/government/mayor/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/88/Indya_Kincannon.jpg"
  },
  { 
    name: "Bobby Dyer", 
    party: "R", 
    city: "Virginia Beach", 
    state: "VA", 
    phone: "(757) 385-4581", 
    address: "2401 Courthouse Dr, Virginia Beach, VA 23456", 
    website: "https://www.vbgov.com/government/mayor/Pages/default.aspx",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Bobby_Dyer.jpg"
  },
  { 
    name: "Danny Avula", 
    party: "D", 
    city: "Richmond", 
    state: "VA", 
    phone: "(804) 646-7970", 
    address: "900 E Broad St, Richmond, VA 23219", 
    website: "https://www.rva.gov/mayor",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/67/Danny_Avula_Portrait.jpg"
  },
  { 
    name: "Ken Welch", 
    party: "D", 
    city: "St. Petersburg", 
    state: "FL", 
    phone: "(727) 893-7201", 
    address: "175 5th St N, St. Petersburg, FL 33701", 
    website: "https://www.stpete.org/mayor/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Ken_Welch_official_portrait.jpg"
  },
  { 
    name: "Jane Castor", 
    party: "D", 
    city: "Tampa", 
    state: "FL", 
    phone: "(813) 274-8251", 
    address: "315 E Kennedy Blvd, Tampa, FL 33602", 
    website: "https://www.tampagov.net/mayor",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Jane_Castor_official_portrait.jpg"
  },
  { 
    name: "Rex Richardson", 
    party: "D", 
    city: "Long Beach", 
    state: "CA", 
    phone: "(562) 570-6801", 
    address: "411 W Ocean Blvd, Long Beach, CA 90802", 
    website: "https://www.longbeach.gov/mayor/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Rex_Richardson.jpg"
  },
];

const partyLookup: Record<RawMayor["party"], "Democrat" | "Republican" | "Independent"> = {
  D: "Democrat",
  R: "Republican",
  I: "Independent",
};

// Filter out exact duplicates on name+city+state to avoid duplicate keys/entries.
const seenMayorKeys = new Set<string>();
const uniqueMayors = rawMayors.filter((mayor) => {
  const key = `${mayor.name}|${mayor.city}|${mayor.state}`;
  if (seenMayorKeys.has(key)) return false;
  seenMayorKeys.add(key);
  return true;
});

function makeId(mayor: RawMayor): string {
  // Include name to avoid collisions when the same city/state has multiple entries (historical or current).
  const slug = `${mayor.city}-${mayor.state}-${mayor.name}`.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();
  return `m-${slug}`;
}

export const mayors: GovernmentLeader[] = uniqueMayors.map((mayor) => ({
  id: makeId(mayor),
  type: "mayor",
  name: mayor.name,
  title: `Mayor of ${mayor.city}, ${mayor.state}`,
  state: mayor.state,
  office: mayor.address,
  party: partyLookup[mayor.party],
  imageUrl: mayor.imageUrl,
  contact: {
    phone: mayor.phone,
    website: mayor.website,
  },
  committees: [],
  metrics: {
    billsSponsored: 0,
    billsPassed: 0,
    voteAttendance: 0,
    bipartisanshipScore: 0,
  },
  nextElection: "2029",
  recentActivity: [],
}));
