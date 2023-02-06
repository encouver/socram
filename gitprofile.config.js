// gitprofile.config.js

const config = {
  github: {
    username: 'encouver', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'marcosjramirezr',
    twitter: 's0cram',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'encouver',
    dev: 'encouver',
    stackoverflow: '', // format: userid/username
    website: '',
    phone: '',
    email: 'marcospha@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'TypeScript',
    'Java',
    'Python',
    'Angular',
    'React.js',
    'Node.js',
    'SpringBoot',
    'SQLServer',
    'Solidity',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'AWS',
    'Azure'
  ],
  experiences: [
    {
      company: 'Metalsa',
      position: 'Software Developer',
      from: 'February 2019',
      to: 'Present',
      companyLink: 'https://www.metalsa.com/',
    },
    {
      company: 'BSD Enterprise',
      position: 'Sofware Developer',
      from: 'September 2016',
      to: 'February 2019',
      companyLink: 'http://www.bsdenterprise.com/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2015',
    //   to: '2019',
    // },
    {
      institution: 'Central University of Venezuela',
      degree: 'Computer Science',
      from: '2006',
      to: '2014',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'BeforeMint',
      description:
        'Powerful. Tools. Web3.',
      imageUrl: 'https://beforemint.xyz/static/media/logoSocial.6043169121f44188195e.png',
      link: 'https://beforemint.xyz',
    },
    {
      title: 'IotSmart',
      description:
        'The power of simplicity transforming the way we manage data in a new era of interconnected things, visualization and decision making.',
      imageUrl: 'https://iotsmart.io/assets/LOGOCONTACT/logo_icon.svg',
      link: 'https://iotsmart.io',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'encouver', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      'winter',
      // 'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
