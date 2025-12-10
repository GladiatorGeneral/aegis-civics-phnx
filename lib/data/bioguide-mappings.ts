/**
 * Bioguide ID Mappings for Congressional Members
 * Format: "State-Name" -> bioguideId
 * 
 * These IDs are used to fetch real data from Congress.gov API
 * Find bioguideIds at: https://bioguide.congress.gov/
 */

export const senatorBioguideIds: Record<string, string> = {
  // Alabama
  'AL-Katie Boyd Britt': 'B001326',
  'AL-Tommy Tuberville': 'T000278',
  
  // Alaska
  'AK-Lisa Murkowski': 'M001153',
  'AK-Dan Sullivan': 'S001198',
  
  // Arizona
  'AZ-Mark Kelly': 'K000367',
  'AZ-Ruben M. Gallego': 'G000574',
  
  // Arkansas
  'AR-John Boozman': 'B001236',
  'AR-Tom Cotton': 'C001095',
  
  // California
  'CA-Alex Padilla': 'P000145',
  'CA-Adam B. Schiff': 'S001150',
  
  // Colorado
  'CO-Michael F. Bennet': 'B001267',
  'CO-John W. Hickenlooper': 'H001079',
  
  // Connecticut
  'CT-Richard Blumenthal': 'B001277',
  'CT-Christopher Murphy': 'M001169',
  
  // Delaware
  'DE-Lisa Blunt Rochester': 'B001303',
  'DE-Christopher A. Coons': 'C001088',
  
  // Florida
  'FL-Rick Scott': 'S001217',
  'FL-Ashley Moody': 'M001216',
  
  // Georgia
  'GA-Jon Ossoff': 'O000174',
  'GA-Raphael Warnock': 'W000790',
  
  // Add more as needed - this is a starter set
};

export const houseBioguideIds: Record<string, string> = {
  // Sample House members - these would need to be populated for all 435 members
  'AL-1-Barry Moore': 'M001212',
  'AL-2-Shomari Figures': 'F000480',
  'AL-3-Mike Rogers': 'R000575',
  'AL-4-Robert Aderholt': 'A000055',
  'AL-5-Dale Strong': 'S001221',
  'AL-6-Gary Palmer': 'P000609',
  'AL-7-Terri Sewell': 'S001185',
  
  'AK-At Large-Nicholas Begich': 'B001298',
  
  'AZ-1-David Schweikert': 'S001183',
  'AZ-2-Elijah Crane': 'C001137',
  'AZ-3-Yassamin Ansari': 'A000400',
  'AZ-4-Greg Stanton': 'S001211',
  'AZ-5-Andy Biggs': 'B001302',
  'AZ-6-Juan Ciscomani': 'C001139',
  'AZ-8-Abraham Hamadeh': 'H001096',
  'AZ-9-Paul Gosar': 'G000565',
  
  'CA-11-Nancy Pelosi': 'P000197',
  
  // Add more as needed
};

/**
 * Get bioguideId for a senator by state and name
 */
export function getSenatorBioguideId(state: string, name: string): string | null {
  const key = `${state}-${name}`;
  return senatorBioguideIds[key] || null;
}

/**
 * Get bioguideId for a house member by state, district, and name
 */
export function getHouseBioguideId(state: string, district: string, name: string): string | null {
  const key = `${state}-${district}-${name}`;
  return houseBioguideIds[key] || null;
}
