export interface ClubInfo {
  name: string;
  shortName: string;
  district: string;
  rotaryYear: string;
  motto: string;
  tagline: string;
  founded: number;
  location: string;
  institution: string;
  sponsorClub: string;
  socials: {
    instagram: string;
    linkedin: string;
    email: string;
  };
}

export const CLUB: ClubInfo = {
  name: "Rotaract Club of Karpagam Academy of Higher Education",
  shortName: "Rotaract KAHE",
  district: "Rotary District 3206",
  rotaryYear: "2026–27",
  motto: "Service Above Self",
  tagline: "Rise with Purpose, Soar with Impact",
  founded: 2015,
  location: "Coimbatore, Tamil Nadu, India",
  institution: "Karpagam Academy of Higher Education",
  sponsorClub: "Rotary Club of Coimbatore",
  socials: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    email: "rotaractkahe@example.com",
  },
};

export interface StatItem {
  id: string;
  value: string;
  label: string;
  highlight?: boolean;
}

export const STATS: StatItem[] = [
  { id: "years", value: "5+", label: "Years of Active Service" },
  { id: "district", value: "3206", label: "Rotary District", highlight: true },
  { id: "avenues", value: "5", label: "Avenues of Service" },
  { id: "projects", value: "50+", label: "Projects Delivered", highlight: true },
  { id: "members", value: "23", label: "Active Board Members" },
];

export interface ProjectItem {
  id: string;
  title: string;
  avenue: string;
  summary: string;
  year: string;
  status: "Active" | "Completed" | "Planning";
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "dpp-branding",
    title: "District Priority Projects & Media Branding",
    avenue: "Special Portfolios",
    summary: "Strategic district-level initiative executing priority social outreach campaigns and digital media documentation.",
    year: "RY 2026–27",
    status: "Active",
  },
  {
    id: "community-plate",
    title: "Community Outreach & Sustenance Drive",
    avenue: "Community Service",
    summary: "Grassroots service drive addressing community nutrition, healthcare assistance, and public welfare across Coimbatore.",
    year: "RY 2026–27",
    status: "Completed",
  },
  {
    id: "prof-summit",
    title: "Leadership & Professional Career Conclave",
    avenue: "Professional Development",
    summary: "Industry interaction workshops providing technical skills, interview preparation, and corporate mentorship to collegiate youth.",
    year: "RY 2026–27",
    status: "Planning",
  },
];

export interface EventItem {
  id: string;
  title: string;
  date: string;
  formattedDate: string;
  avenue: string;
  status: "done" | "active" | "planning";
  location: string;
  description: string;
}

export const EVENTS: EventItem[] = [
  {
    id: "ev-1",
    title: "Annual Installation of the Board of Directors",
    date: "2026-07-15",
    formattedDate: "July 15, 2026",
    avenue: "Club Service",
    status: "done",
    location: "Auditorium, KAHE",
    description: "Official collaring and charter celebration for Rotary Year 2026–27 leadership.",
  },
  {
    id: "ev-2",
    title: "Camp Bloodline — Campus Voluntary Donation Drive",
    date: "2026-08-20",
    formattedDate: "August 20, 2026",
    avenue: "Community Service",
    status: "done",
    location: "Main Health Center, KAHE",
    description: "University-wide blood donation camp organized in coordination with regional blood banks.",
  },
  {
    id: "ev-3",
    title: "Rotaract Youth Leadership Summit",
    date: "2026-11-15",
    formattedDate: "November 15, 2026",
    avenue: "Professional Development",
    status: "active",
    location: "Conference Hall B, KAHE",
    description: "District-wide skill workshops, public speaking forums, and leadership development sessions.",
  },
  {
    id: "ev-4",
    title: "KAHE Rotaract Annual Cultural & Community Fest",
    date: "2027-02-10",
    formattedDate: "February 10, 2027",
    avenue: "Club Service",
    status: "planning",
    location: "Open Air Amphitheatre, KAHE",
    description: "Flagship annual festival bringing together district clubs for cultural and service showcases.",
  },
];

export interface PresidentItem {
  id: string;
  year: string;
  name: string;
  role: string;
  theme?: string;
  milestone?: string;
  isCurrent?: boolean;
}

export const PRESIDENTS: PresidentItem[] = [
  {
    id: "pres-2627",
    year: "RY 2026–27",
    name: "Rtr. Mohammed Safwaan",
    role: "President",
    theme: "Rise with Purpose, Soar with Impact",
    milestone: "Expansion of District Priority Projects, Digital Media Architecture, and 50+ Club Initiatives",
    isCurrent: true,
  },
  {
    id: "pres-2526",
    year: "RY 2025–26",
    name: "Rtr. Karthick Chandrasekar",
    role: "Immediate Past President",
    theme: "[TODO Theme 2025–26]",
    milestone: "Campus-wide blood donation drives, community health outreach, and district recognitions",
  },
  {
    id: "pres-2425",
    year: "RY 2024–25",
    name: "Rtr. [TODO Past President Name]",
    role: "Past President",
    theme: "[TODO Theme 2024–25]",
    milestone: "Establishment of specialized avenue mentorship programs and inter-collegiate conclaves",
  },
  {
    id: "pres-charter",
    year: "RY 2015–16",
    name: "Rtr. [TODO Charter President Name]",
    role: "Charter President",
    theme: "Charter Year & Inception",
    milestone: "Official chartering of the Rotaract Club of Karpagam Academy of Higher Education under District 3206",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  image: string | null;
  tenure: string;
}

export const TEAM: TeamMember[] = [
  { name: "Rtr. Mohammed Safwaan", role: "President", department: "Secretariat & Executive", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. Bharani Krishna", role: "Secretary", department: "Secretariat & Executive", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. Karthick Chandrasekar", role: "Immediate Past President", department: "Secretariat & Executive", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. Giri S", role: "Vice President", department: "Secretariat & Executive", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. Rineesha A", role: "Joint Secretary", department: "Secretariat & Executive", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. Vishnu Prasath", role: "Special Aide & Membership Chair", department: "Secretariat & Executive", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. Roshitha B", role: "Treasurer", department: "Special Portfolios", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. L Mohammed Sajad", role: "Sergeant-at-Arms", department: "Special Portfolios", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. S. Shahinthaneem", role: "Chair – All Avenues", department: "Special Portfolios", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. Vishal", role: "Chair – District Priority Project", department: "District Priority Projects", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. Kiruthik M N", role: "Director – District Priority Projects", department: "District Priority Projects", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. Sudeep K", role: "Chair – Club Service", department: "Avenues of Service", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. Akshita", role: "Director – Club Service", department: "Avenues of Service", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. Akhash Ram N", role: "Chair – Community Service", department: "Avenues of Service", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. A. Udit", role: "Director – Community Service", department: "Avenues of Service", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. Mohamed Jamseeth", role: "Chair – International Service", department: "Avenues of Service", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. Ann Thomas", role: "Director – International Service", department: "Avenues of Service", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. Anu Lakshmi S", role: "Chair – Professional Development", department: "Avenues of Service", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. Meenakshi K", role: "Director – Professional Service", department: "Avenues of Service", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. V Aakash", role: "Chair – Social Media & Editor", department: "Media & PR", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. Deepak", role: "Chair – Web Service & TRF", department: "Media & PR", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. Yokesh B R", role: "Chair – Public Relations", department: "Media & PR", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. Vikas", role: "Chair – Blood Donor Wing", department: "Campus Outreach", image: null, tenure: "RY 2026–27" },
  { name: "Rtr. Assmitha B", role: "Chair – Campus Engagement", department: "Campus Outreach", image: null, tenure: "RY 2026–27" },
];

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
}

export const JOURNAL_ENTRIES: JournalArticle[] = [
  {
    id: "art-1",
    title: "Decade of Dedication: Reflecting on Service Above Self in Coimbatore",
    category: "Club History",
    date: "October 2026",
    readTime: "4 min read",
    excerpt: "Examining ten years of grassroots community engagement, university partnerships, and youth development at Karpagam Academy of Higher Education.",
  },
  {
    id: "art-2",
    title: "Mobilizing Collegiate Youth for District Priority Impact",
    category: "Leadership",
    date: "September 2026",
    readTime: "5 min read",
    excerpt: "How structured avenue roles and real-time operational coordination allow student leaders to execute high-stakes service projects.",
  },
  {
    id: "art-3",
    title: "The Architecture of Meaningful Community Service",
    category: "Community Impact",
    date: "August 2026",
    readTime: "3 min read",
    excerpt: "Moving beyond one-time charity events toward sustained civic interventions that empower local institutions.",
  },
];
