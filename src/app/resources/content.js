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
  phone: "+41 78 305 41 49",
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
    link: "https://www.linkedin.com/in/mattia-biancini/",
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
  headline: <>Mens sana in corpore sano</>,
  featured: {
    display: true,
    title: <>Master Thesis: <strong className="ml-4">Performance Variability</strong></>,
    href: "/projects/performance-variability",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role} based in Lugano, Switzerland.
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
            Summer Lifesaving Italian Championships 2025 (Criteria)
          </>,
          <>
            Spring Lifesaving Italian Championships 2025 (Women & Man)
          </>,
          <>
            Spring Lifesaving Italian Championships 2025 (Criteria)
          </>,
          <>
            Summer Lifesaving Italian Championships 2024 (Criteria)
          </>,
          <>
            Spring Lifesaving Italian Championships 2024 (Criteria)
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
            src: "/images/work/insport/insport.jpeg",
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
      // {
      //   title: "AndroidStudio",
      //   description: <>Experienced in Android app development using Android Studio.</>,
      //   icon: "android",
      // },
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
  projects: [
    {
      title: "Formula 1 Visualization",
      technologies: [
        {
          name: "python",
          link: "https://www.python.org/",
        },
        {
          name: "polars",
          link: "https://pola.rs/",
        },
        {
          name: "bokeh",
          link: "https://bokeh.org/",
        },
        {
          name: "figma",
          link: "https://www.figma.com/",
        },
      ],
      opensource: true,
      description: (
        <>
          Formula1Visualization is a project focused on data analysis 
          and visualization of Formula 1 racing data. The repository likely 
          includes datasets related to Formula 1, scripts or notebooks for 
          data cleaning and preprocessing, and a variety of visualizations 
          to explore and present insights about races, drivers, teams, or 
          performance trends. The goal is to provide meaningful, interactive, 
          or illustrative visual analytics for Formula 1 enthusiasts or 
          data science practitioners interested in motorsport data.
        </>
      ),
      link: "https://github.com/sAndreotti/Formula1Visualization",
      icon: "github",
      developers: [
        {
          name: "sAndreotti",
        },
        {
          name: "gbrsni",
        },
        {
          name: "steq28",
        },
      ],
    },
    {
      title: "Data Managment Asteroids",
      technologies: [
        {
          name: "python",
          link: "https://www.python.org/",
        },
        {
          name: "jupyter",
          link: "https://jupyter.org/",
        },
        {
          name: "pandas",
          link: "https://pandas.pydata.org/",
        },
        {
          name: "matplotlib",
          link: "https://matplotlib.org/",
        },
        {
          name: "shap",
          link: "https://shap.readthedocs.io/",
        },
      ],
      opensource: true,
      description: (
        <>
          DataManagementAsteroids is a project that uses a real-world asteroid dataset 
          to study the impact of data cleaning techniques. The repository includes raw 
          and "dirty" datasets, Jupyter notebooks for analysis, and scripts for 
          preprocessing and evaluating the effects of various data management strategies. 
          The goal is to demonstrate how data cleaning can affect downstream data analysis 
          or machine learning tasks in the context of asteroid-related data.
        </>
      ),
      link: "https://github.com/MattiaBiancini/DataManagementAsteroids",
      icon: "github",
      developers: [
        {
          name: "LolloMagicMagia",
        },
        {
          name: "ghero2000",
        },
      ],
    },
    {
      title: "Indoor Navigation",
      technologies: [
        {
          name: "android",
          link: "https://www.android.com/",
        },
      ],
      opensource: true,
      description: (
        <>
          IndoorNavigation is an Android application designed to assist users in navigating indoor spaces of <a href="https://www.unimib.it/"> UNIMIB</a> university campus. This was a project developed under
          the supervision of professors <a href="https://www.unimib.it/daniela-micucci">Daniela Micucci</a> and <a href="https://www.unimib.it/davide-ginelli">Davide Ginelli</a> as our bachelor thesis.
          The app utilizes indoor positioning techniques to provide accurate navigation within the university buildings,
          helping students and visitors find their way to classrooms, offices, and other facilities.
        </>
      ),
      link: "https://gitlab.com/unimib-wayfinding/indoor-navigation-biancini-gargiulo",
      icon: "gitlab",
      developers: [
        {
          name: "Zeptogram",
        }
      ],

    },
    {
      title: "Image Compression",
      technologies: [
        {
          name: "python",
          link: "https://www.python.org/",
        },
      ],
      opensource: true,
      description: (
        <>
          ImageCompression is a project that implements a DCT 2 algorithm for image compression.
          The repository includes in part1 the implementation of the DCT 2 algorithm and the 
          comparison with the DCT2 algorithm from the scipy library.
          In part2, the project focuses on the implementation of a JPEG compression algorithm,
          including a program that compresses an image using the JPEG algorithm and shows the
          difference between the original and compressed images.
          The goal is to demonstrate the effectiveness of the DCT 2 algorithm in compressing images
          and to provide a practical implementation of JPEG compression techniques.
        </>
      ),
      link: "https://github.com/Zeptogram/ImageCompression",
      icon: "github",
      developers: [
        {
          name: "Zeptogram",
        }
      ],

    },
    {
      title: "PC Builder",
      technologies: [
        {
          name: "android",
          link: "https://www.android.com/",
        },
      ],
      opensource: true,
      description: (
        <>
          PC Builder is an Android application designed to help users build their own custom PCs.
          The app provides a user-friendly interface for selecting components, checking compatibility,
          and visualizing the final build. It includes a database of components, such as CPUs, GPUs,
          motherboards, and peripherals, allowing users to explore different configurations and
          make informed decisions based on their needs and budget. The goal is to simplify the PC building
          process for both beginners and experienced users, providing a comprehensive tool for planning and
          executing custom PC builds.
        </>
      ),
      link: "https://github.com/umbyf117/PCBuilder",
      icon: "github",
      developers: [
        {
          name: "umbyf117",
        }
      ],

    },
    {
      title: "Linear System Library",
      technologies: [
        {
          name: "python",
          link: "https://www.python.org/",
        },
      ],
      opensource: true,
      description: (
        <>
          Linear System Library is a project that provides a library for solving linear systems of equations.
          The repository includes implementations of various algorithms for solving linear systems,
          such as Gaussian elimination, LU decomposition, and iterative methods.
          The goal is to provide a comprehensive library for solving linear systems,
          which can be used in various applications, such as numerical simulations, optimization problems, 
          and data analysis.
        </>
      ),
      link: "https://github.com/MattiaBiancini/LinearSystemLibrary",
      icon: "github",
      developers: [
        {
          name: "Zeptogram",
        }
      ],

    },
    {
      title: "Species Comparison",
      technologies: [
        {
          name: "python",
          link: "https://www.python.org/",
        }
      ],
      opensource: false,
      description: (
        <>
          The project consists of the elaboration of phylogenetic trees in
          to which the distance between species is calculated and for each quartet the
          closest species pair is identified. The goal is to provide a comprehensive tool for
          analyzing evolutionary relationships and visualizing species comparisons.
        </>
      ),
      link: "",
      icon: "",
      developers: [],
    },
    {
      title: "URI Parser",
      technologies: [
        {
          name: "prolog",
          link: "https://www.swi-prolog.org/",
        },
        {
          name: "lisp",
          link: "https://lisp-lang.org/",
        }
      ],
      opensource: false,
      description: (
        <>
          URI Parser is a project that implements a parser for Uniform Resource Identifiers (URIs)
          in both Prolog and common Lisp. The goal is to provide a flexible and extensible parser
          that can handle various URI formats and use cases.
        </>
      ),
      link: "",
      icon: "",
      developers: [],
    },
    {
      title: "My Website",
      technologies: [
        {
          name: "JavaScript",
          link: "https://www.javascript.com/",
        },
        {
          name: "TypeScript",
          link: "https://www.typescriptlang.org/",
        },
        {
          name: "React",
          link: "https://reactjs.org/",
        },
        {
          name: "CSS",
          link: "https://www.w3.org/Style/CSS/",
        },
        {
          name: "HTML",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
      ],
      opensource: false,
      description: (
        <>
          This is my personal portfolio website, built with React and TypeScript. 
          It showcases my projects, skills, and experiences in a modern and responsive design.
          The website is designed to be user-friendly and visually appealing, 
          providing a platform to highlight my work and connect with others.
        </>
      ),
      link: "https://github.com/MattiaBiancini/mattiabiancini",
      icon: "github",
      developers: [],
    },
    {
      title: "RPGarnet",
      technologies: [
        {
          name: "Java",
          link: "https://www.java.com/",
        },
      ],
      opensource: true,
      description: (
        <>
          RPGarnet is a Minecraft plugin that adds RPG elements to the game. 
          It allows players to create and manage their own RPG adventures within 
          the Minecraft world, complete with quests, NPCs, and custom items.
        </>
      ),
      link: "https://github.com/MattiaBiancini/RPGarnet",
      icon: "github",
      developers: [],
    },
  ]

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
  image: "/images/contact.jpg",
  contacts: [
    {
      name: person.phone,
      icon: "phone",
    },
    {
      name: person.email,
      icon: "email",
    },
    {
      name: person.location,
      icon: "globe",
    }
  ]
};

export { person, social, home, about, projects, swimming, contacts };
