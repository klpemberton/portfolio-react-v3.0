export interface JobDetails {
  company: string;
  location: string;
  summary: string;
  accomplishments: string[];
}

export interface ResumeData {
  title: string;
  dates: string;
  details: JobDetails[];
}

export type AdditionalJob = Pick<ResumeData, 'title' | 'dates'> &
  Pick<JobDetails, 'company' | 'location'>;

export const JobsDataFeatured: ResumeData[] = [
  {
    title: 'Senior Front End Software Engineer',
    dates: '2020 - Present',
    details: [
      {
        company: 'Favor',
        location: 'Remote',
        summary:
          'Work with cross-functional teams to create the public-facing React experience and develop internal tooling to improve business processes. Perform code review and mentor junior engineers. Continually improve front end tooling and help define development standards and best practices.',
        accomplishments: [
          'Own the patient-facing dashboard by leading technical design, planning, implementation, and task delegation..',
          'Alongside the Staff Engineer, implemented new video telemedicine platform.',
          'Led front end implementation for new dermatology product line, including creating a new patient onboarding medical questionnaire and enabling self-service on the patient-facing dashboard.',
        ],
      },
    ],
  },
  {
    title: 'Senior Front End Software Engineer',
    dates: '2018 - 2020',
    details: [
      {
        company: 'TechStyle Fashion Group',
        location: 'Remote',
        summary:
          'For global fashion brand JustFab, upgrade the legacy ColdFusion codebase to use the new Bento microservices platform, and implement a brand-new React + Redux front end. Design and implement high-visibility KIs. Optimize existing applications for maximum speed and scalability. Provide guidance and training on new front end tools and features.',
        accomplishments: [
          'Lead Engineer for the Bento React Migration for JustFab',
          'Alongside the Staff Software Engineer, designed and implemented new Smart Filters product filtering functionality for JustFab using Vue.js.',
        ],
      },
    ],
  },
  {
    title: 'Senior Front End Developer',
    dates: '2016 - 2018',
    details: [
      {
        company: 'TransUnion',
        location: 'San Luis Obispo, CA',
        summary:
          'Coordinated front end deliverables as Project Lead. Trained junior developers on process and web development best practices. Worked independently and coordinated with multiple departments while maintaining effective communication and a shared knowledge base with the front end team. Provided front end project design and guided sprint planning for front-end initiatives.',
        accomplishments: [
          'One of only two front end developers on the Partner team, which brings in millions of dollars annually through contracts with Chase, American Express, and other large financial institutions.',
          'Led design and implementation of new features such as Multi-Bureau Credit Lock.',
          'Constantly evaluated front end workflow and made improvements in order to reduce technical debt, optimize Node/npm build process, and improve coding efficiency.',
        ],
      },
    ],
  },
  {
    title: 'Front End Developer',
    dates: '2015 - 2016',
    details: [
      {
        company: 'TransUnion',
        location: 'San Luis Obispo, CA',
        summary:
          'Collaborated with multiple departments to envision, implement, and maintain top-quality web-based credit monitoring products viewed by millions of users. Worked independently or with a team of developers on project initiatives and deliver clean, efficient, and compliant code. Ensured code compatibility and functionality across all supported desktop browsers and mobile devices. Worked closely with the quality assurance team to draft test cases for new features and to resolve bugs on existing features if/when they arose. Maintained accurate documentation and task tracking via various project management systems (JIRA, Confluence), as part of the agile development process.',
        accomplishments: [
          'Contributed to multiple new website and feature launches, such as trueidentity.com.',
          'Implemented new revenue-generating features such as dynamic ads and upsells.',
        ],
      },
    ],
  },
  {
    title: 'Front End Developer',
    dates: '2013 - 2015',
    details: [
      {
        company: 'Cook Medical',
        location: 'Bloomington, IN',
        summary:
          'Worked with visual designers, back-end developers, project stakeholders, and management to envision and implement quality business systems; wrote clean, compliant, and future-friendly code for enterprise applications and public-facing websites; ensured compatibility across all browsers, platforms, and devices and worked closely with UA team to draft unit tests and resolve bugs if/as they arise; drafted technical documentation for projects as part of the agile development process.',
        accomplishments: [
          "Contributed to the complete overhaul and relaunch of the company's flagship website, cookmedical.com",
          "Redesigned and updated the company's Physician Certification Inventory System, making it much more user-friendly and maintainable",
        ],
      },
    ],
  },
];

export const JobsDataAdditional: AdditionalJob[] = [
  {
    title: 'Freelance Web Designer/Developer',
    dates: '2011 - 2016',
    company: 'Self-Employed',
    location: 'Various',
  },
  {
    title: 'Web Design/Developer',
    dates: '2012 - 2013',
    company: 'Author Solutions',
    location: 'Bloomington, IN',
  },
  {
    title: 'Web Associate',
    dates: '2011 - 2012',
    company: 'HOPE Foundation',
    location: 'Bloomington, IN',
  },
  {
    title: 'Web Developer Intern',
    dates: '2010 - 2011',
    company: 'Smithville Communications',
    location: 'Ellettsville, IN',
  },
];
