/**
 * PCPA committees for the 2026-28 term, as announced in the Secretary General's letters of 12 October 2026.
 * Phone numbers and personal emails from the letters are deliberately not published.
 */
export type CommitteeMember = { name: string; company: string; area?: string };

export type Committee = {
  slug: string;
  name: string;
  icon: string;
  group: "main" | "other";
  purpose?: string;
  note?: string;
  convener?: CommitteeMember;
  coConvener?: CommitteeMember;
  members: CommitteeMember[];
  /** Download Centre reference of the announcement letter */
  doc?: string;
};

/** "Name|Company|Area" rows keep the long member lists readable. */
const people = (rows: string[]): CommitteeMember[] =>
  rows.map((r) => {
    const [name, company, area] = r.split("|");
    return { name, company, area };
  });
const one = (row: string) => people([row])[0];

export const committees: Committee[] = [
  {
    slug: "hr-it",
    name: "HR & IT Committee",
    icon: "users",
    group: "main",
    purpose: "Reviews complete membership files before final approval (the HR Membership Review step of the membership procedure) and looks after the Association's IT and digital systems.",
    convener: one("Choudhry Usman Rafique|Gharbeen (Pvt) Ltd"),
    coConvener: one("Ghulam Farid|Rise AG Pakistan (Pvt) Ltd"),
    members: people([
      "Muhammad Shahid Azeem|Agrow Mark",
      "Shahid Salim Qureshi|Orange Protection (Pvt.) Ltd",
      "Muhammad Azam Cheema|Sayban International",
      "Farrukh Saeed Durrani|Hextar Chemicals Enterprises",
      "Abdul Sattar Azhar|Wellwisher Agro Chemicals",
      "Sh. Muhammad Arif|Croplands Chemicals & Seed Services",
      "Sultan Nasir Khan|Nixalite Agro Services",
      "Muhammad Ali Zafar|Kareem Chemicals",
      "Khalid Mahmood|Burhan Agro Chemicals",
      "Muhammad Mumtaz|Flower Agro Chemicals",
      "Rana Iqrar Ali|Dharti Crop Science",
      "Sibghat Ullah Niazi|Global Crop Sciences",
      "M. Ehsan Karim|Unique Agro Sciences",
    ]),
    doc: "DL-042",
  },
  {
    slug: "finance",
    name: "Finance Committee",
    icon: "rs",
    group: "main",
    members: [],
  },
  {
    slug: "legal",
    name: "Legal Committee",
    icon: "scale",
    group: "main",
    convener: one("Asfand Riaz Gorya|Agro Zat International"),
    coConvener: one("Muhammad Mansoor Shahid|Agro One Enterprises"),
    members: people([
      "Pir Fakhar Ahmad Bodla|New Farm Agri Services (Pvt) Ltd",
      "Fida Hussain Gadi|Bio Track Enterprises",
      "M. Arif Sheikh|Croplands Chemicals",
      "Abdul Sattar Azhar|Wellwisher Agro Chemicals",
      "Rauf Akif|Eon Fertilizer",
      "Khalid Mehmood|Burhan Agro Chemicals",
      "Rao Shahid Akhtar|Saanjh Pesticides",
      "Dr. Bilal Ahmad|Paragon Chemicals",
      "Muhammad Umar Waheed|Agrofena (Pvt) Ltd",
      "Malik Riaz Hussain|Pakchem International",
      "Rana Imtiaz Ali|4F Chemicals",
      "Asif Ali Zaheer|Agricom International",
    ]),
    doc: "DL-043",
  },
  {
    slug: "fertilizer",
    name: "Fertilizer Committee",
    icon: "stack",
    group: "other",
    purpose: "Formed to resolve fertilizer registration and renewal issues and other matters with the Fertilizer Departments.",
    convener: one("Farhan Aziz|Agrow Shell|Lahore"),
    coConvener: one("Kamran Saeed|Crown Star Agro Chemicals|Shawl"),
    members: people([
      "Ahmed Yar Bhatti|EON Bio Sciences|Multan",
      "Sheraz Ahmed|Innovative Chemicals|Multan",
      "Dr. Abdul Saboor|Parbat Crop Sciences|Multan",
      "Dr. Ahmad Yar|Solex Chemicals (Pvt.) Ltd|Multan",
      "Dr. Shahid Iqbal|Commander Agro|Multan",
      "Tasawar Hussain|Suncrop Pesticides|Multan",
      "Malik Zai Ullah|Kanzo Ag|Multan",
      "Musaddiq Ahmad|Leader Ag|Multan",
      "Haji Saeed|Ali Akbar Enterprises (Pvt.) Ltd|Lahore",
      "Zeeshan Zulfiqar|N.F Biotech|Multan",
      "Rana Zafar Iqbal|Ajwa Agro|Lahore",
      "Qamar Khan|Sky Agro Chemical|Lahore",
      "Muhammad Ashraf|Royal Agro Chemicals|Lahore",
      "Kashif Arif|Agro Guard Chemicals|Lahore",
      "Muhammad Mansoor Shahid|Agro One Enterprises|Lahore",
      "Asif Iqbal Dahar|Greenly Pesticide Co|Lahore",
    ]),
    doc: "DL-044",
  },
  {
    slug: "technical",
    name: "Technical & Strategic Planning Committee",
    icon: "shield",
    group: "other",
    purpose: "Formed to address issues related to farmers and the industry.",
    convener: one("Shamsher Hussain|Innova Agri Solution|Lahore"),
    coConvener: one("Qaiser Abbas|Agrow Limited|Lahore"),
    members: people([
      "Saad Akbar Khan|Ali Akbar Enterprises (Pvt.) Ltd|Lahore",
      "Muhammad Azam Cheema|Sayban International|Lahore",
      "Dr. Mian Khalid Hameed|Tara Crop Sciences (Pvt) Ltd|Lahore",
      "Muhammad Umar Waheed|Agrofena (Pvt) Ltd|Lahore",
      "Dr. Muhammad Bilal|Paragon Chemicals|Vehari",
      "Aftab Ahmed Sheikh|UAQ Chemicals Industries|Multan",
      "Dr. Abdul Sattar Shahid|Welcare Chemicals Corporation|Sahiwal",
      "Dr. M. Shakil Ahmad|Solar AgroSciences (Pvt) Ltd|Lahore",
      "Zeeshan Zulfiqar|NF Biotech|Multan",
      "Tahir Mahmood|Agras International|Rahim Yar Khan",
      "Zafar Hussain|BS Enterprises|Vehari",
      "Ahmed Shafi|Agrimore (Pvt.) Ltd|Lahore",
      "Javed Iqbal|Gro More Enterprises|Multan",
      "Kashif Shahzad Chishti|Peart Agro Chemicals|Faisalabad",
      "Dr. Wasim Akhtar|Ayan Crop Sciences|Lahore",
    ]),
    doc: "DL-045",
  },
  {
    slug: "fund-raising",
    name: "Fund Raising Committee",
    icon: "rs",
    group: "other",
    note: "The Chief Coordinator, Regional Coordinators and Cabinet members are also part of this committee.",
    convener: one("Muhammad Azam Cheema|Sayban International|Lahore"),
    members: people([
      "Saad Akbar Khan|Ali Akbar Enterprises (Pvt.) Ltd|Lahore",
      "Shahid Salim Qureshi|Orange Protection (Pvt.) Ltd|Lahore",
      "Qaiser Abbas|Agrow Limited|Lahore",
      "Kamran Saeed|Crown Star Agro Chemicals|Multan",
      "Sh. Muhammad Arif|Croplands Chemicals & Seed Services|Bahawalpur",
      "Muhammad Umar Waheed|Agrofena (Pvt) Ltd|Lahore",
      "Zahoor Ahmad|Cynor Enterprises|Vehari",
      "Jabbar Ahmad|Saver Enterprises|Faisalabad",
      "M. Mushtaq Arshad|Super Pesticide|Bahawalpur",
      "Hafiz Nasir Ud Din|Waseela Pesticide|Rahim Yar Khan",
      "Abdul Sattar Azhar|Wellwishers Agro|Shawl",
      "Farrukh Saeed Durrani|Hextar Chemicals Enterprises|Lahore",
    ]),
    doc: "DL-046",
  },
  {
    slug: "ebiz-ai",
    name: "E-Biz & Artificial Intelligence in Agriculture Committee",
    icon: "stack",
    group: "other",
    convener: one("Muhammad Umar Waheed|Agrofena (Pvt) Ltd|Lahore"),
    coConvener: one("Zulfiqar Ali|Aims Agro Chemicals|Vehari"),
    members: people([
      "Muhammad Shafiq Sahir|Gulf Agro Chemicals & Fertilizer (Pvt) Ltd|Lahore",
      "Malik Imran|Talent Agro Sciences|Sheikhupura",
      "Rao Amjad Ali|Meezan Agro Chemicals|Multan",
      "Wajid Ali Khan|Agri Gate Chemical|Narowal",
      "Nadeem Ahmad Bajwa|Agro Shine Pesticides|Lahore",
      "M. Mushtaq Arshad|Super Pesticide|Bahawalpur",
      "Ghulam Farid|Rise AG Pakistan (Pvt) Ltd|Multan",
      "Nayyar Idrees|Agras International|Sadiqabad",
      "Farruk Shahzad Ahmad|Perfect Crop Sciences (SMC-Private) Limited|Mandi Bahauddin",
    ]),
    doc: "DL-047",
  },
  {
    slug: "value-addition",
    name: "High Value Addition Committee",
    icon: "building",
    group: "other",
    convener: one("Shahid Salim Qureshi|Orange Protection (Pvt.) Ltd|Lahore"),
    members: [],
    doc: "DL-048",
  },
];

export const chiefCoordinator = {
  person: one("Muhammad Arif Sheikh|Croplands Chemicals & Seed Services|Bahawalpur"),
  text: "Coordinates PCPA matters with officials and government departments on behalf of the Association.",
  doc: "DL-049",
};

export const committeeDocs = ["DL-042", "DL-043", "DL-044", "DL-045", "DL-046", "DL-047", "DL-048", "DL-049", "DL-037"];

export const publicVsConfidential =
  "Public pages show committee composition, approved Terms of Reference, and meeting schedule. Internal case papers, HR evidence and confidential review files remain inside the secure staff workspace.";
