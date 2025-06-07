import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Mattia",
  lastName: "Biancini",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Computer Science Student",
  avatar: "/images/avatar.png",
  email: "biancinimattia14@gmail.com",
  location: "Switzerland/Lugano", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MattiaBiancini",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mattia-biancini-a879731a7/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/Garnet1404",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at <Logo icon={false} style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: false,
    title: "Introduction",
    description: (
      <>
        Hi, I'm {person.firstName}, a passionate design engineer with a knack for creating
        intuitive user experiences. I thrive at the intersection of design and technology, where I
        can bring ideas to life through innovative design solutions. My journey has taken me from
        studying software engineering to leading design projects that enhance user engagement and
        streamline workflows. When I'm not designing, you can find me exploring new technologies or
        working on personal projects that push the boundaries of what's possible in design.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "InSport Rane Rosse",
        timeframe: "November 2023 - Present",
        role: "Swimming Coach (FINA Junior & Senior)",
        description: (
          <>
            Participated in the following events:
          </>
        ),
        achievements: [
          <>
            Spring Italian Championships 2025 (Criteria)
          </>,
          <>
            Summer Italian Championships 2024 
          </>,
          <>
            Spring Italian Championships 2024 (Criteria)
          </>,
          <>
            Spring Regional Championships 2025
          </>,
          <>
            Summer Regional Championships 2024
          </>,
          <>
            Spring Regional Championships 2024
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/work/insport.jpeg",
            alt: "InSport - Lifesaving Spring Italian Championships 2025",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "ASA Cinisello Balsamo",
        timeframe: "September 2022 - July 2023",
        role: "Swimming Coach (Under 13)",
        description: (
          <>
            Participated in the following events:
          </>
        ),
        achievements: [
          <>
            Summer Regional Championships 2023
          </>,
          <>
            Spring Regional Championships 2023
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Università della Svizzera italiana (USI)",
        timeframe: "September 2024 - Present",
        description: <>Master in Informatics (Double Degree Program)</>,
        location: <>Lugano (CH)</>,
        vote: <>-/10.0</>,
      },
      {
        name: "Università degli Studi di Milano - Bicocca",
        timeframe: "September 2023 - Present",
        description: <>Master in Computer Science</>,
        location: <>Milan (IT)</>,
        vote: <>-/110</>,
      },
      {
        name: "Università degli Studi di Milano - Bicocca",
        timeframe: "September 2021 - July 2023",
        description: <>Bachelor in Computer Science</>,
        location: <>Milan (IT)</>,
        vote: <>102/110</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Java",
        description: <>Experienced in Java programming, with a focus on OOP.</>,
        icon: "java",
      },
      {
        title: "Python",
        description: <>Experienced in Python programming, with a focus on data analysis and machine learning.</>,
        icon: "python",
      },
      {
        title: "MySQL",
        description: <>Skilled in MySQL database management and query optimization.</>,
        icon: "mysql",
      },
      {
        title: "JavaScript",
        description: <>Proficient in JavaScript for web development, including frameworks like React.</>,
        icon: "javascript",
      },
      {
        title: "AndroidStudio",
        description: <>Experienced in Android app development using Android Studio.</>,
        icon: "android",
      },
      {
        title: "Docker",
        description: <>Familiar with Docker for containerization and deployment.</>,
        icon: "docker",
      },
    ],
  },
};

const projects = {
  path: "/projects",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,

};

const swimming = {
  path: "/swimming",
  label: "Swimming",
  title: "Swimming Activities",
  description: `Explore swimming activities by ${person.name}`,
  // Create new swimming pages by adding a new .mdx file to app/swimming/posts
  // All swimming posts will be listed on the /swimming route
};

const contacts = {
  path: "/contacts",
  label: "Contacts",
  title: `Contacts – ${person.name}`,
  description: `A collection of contact information for ${person.name}`,
};

export { person, social, home, about, projects, swimming, contacts };
