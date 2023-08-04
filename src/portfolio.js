/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abhinav's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Abhinav's Portfolio",
    type: "website",
    url: "url",
  },
};

//Home Page
const greeting = {
  title: "Abhinav Srivastava",
  logo_name: "AbhinavSrivastava",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://docs.google.com/document/d/1oTYfyx0mTkzRigRGyfQg9Bna1osDJlHBEDdsGxJQyQI/edit",
  portfolio_repository: "https://github.com/abhinav1312",
  githubProfile: "https://github.com/abhinav1312",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/abhinav1312",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abhinav1312/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:abhinav0427@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJs and Tailwind CSS.",
        "⚡ Creating application backend in Node, Express, and Rest API.",
        "⚡ Using database technologies like MongoDb Atlas, Firebase, MySQL etc.",
        "⚡ Efficient in using javascript package managers like NPM.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux Toolkit",
          imageSrc: 'redux-icon.png',
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Tailwind CSS",
          imageSrc: 'tailwind-icon.svg',
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          imageSrc: 'mongo-icon.png',
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Firebase",
          imageSrc: 'firebase-icon.png',
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Rest API",
          imageSrc: 'restapi-icon.png',
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on AWS",
      ],
      softwareSkills: [
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/abhinav1312/",
    },
    {
      siteName: "Code Studio",
      imageSrc: 'coding-ninjas-icon.png',
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://www.codingninjas.com/studio/profile/a8c2d246-8cb6-4dd0-ba0c-d2ec2d2ea282",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vellore Institue of Technology, Bhopal",
      subtitle: "B.Tech. in Computer Science and Engineering, 8.48 CGPA",
      logo_path: "vit-logo.svg",
      alt_name: "VIT, Bhopal",
      duration: "2020-2024",
      descriptions: [
        "⚡ I am currently studying B.Tech in Computer Science and Engineering from VIT, Bhopal",
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development, Data Science and Cloud Computing",
      ],
      website_link: "https://vitbhopal.ac.in/",
    },
    {
      title: "G.N. National Public School, Gorakhpur",
      subtitle: "Higher Secondary School Certificate, 91.8%",
      logo_path: "gn-logo.jpeg",
      alt_name: "",
      duration: "2019 - 2020",
      descriptions: [
        "⚡ I completed my higher secondary (class 12th) with science stream (Physics, Chemistry, and Maths)",      
      ],
      website_link: "http://www.gnnps.in/",
    },
    {
      title: "G.N. National Public School, Gorakhpur",
      subtitle: "Higher Secondary School Certificate, 92.6%",
      logo_path: "gn-logo.jpeg",
      alt_name: "",
      duration: "2017 - 2018",
      descriptions: [
        "⚡ I completed my higher secondary (class 10th) in 2018.",      
      ],
      website_link: "http://www.gnnps.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "- Amazon Web Services",
      logo_path: "aws-icon.png",
      certificate_link:
        "https://drive.google.com/file/d/1YuvghY9d11Los43yy_OgOGtkatneopY2/view?usp=sharing",
      alt_name: "AWS",
      color_code: "#8C151599",
    },
    {
      title: "Applied Data Science",
      subtitle: "- Smart Internz",
      logo_path: "data-science-icon.png",
      certificate_link:
        "https://drive.google.com/file/d/1Z6gx6WWwKEfqE9p4CssrJ7xHHxnO9duB/view?usp=sharing",
      alt_name: "Smart Internz ADS",
      color_code: "#00000099",
    },
    {
      title: "Full Stack Web Development  djf",
      subtitle: "- Angela Yu, Udemy",
      logo_path: "fullstack-icon.png",
      certificate_link:
        "https://drive.google.com/file/d/1O2fssewVb1DisN32YJHiErZ2lLXfuvCy/view?usp=sharing",
      alt_name: "Udemy",
      color_code: "#0C9D5899",
    },
    {
      title: "React JS",
      subtitle: "- Geeks For Geeks",
      logo_path: "react-icon.svg",
      certificate_link:
        "https://drive.google.com/file/d/1DRgeYLni_B56X8PKAa6VPIRvuKcfDSRp/view?usp=sharing",
      alt_name: "Geeks For Geeks",
      color_code: "#1F70C199",
    },
    {
      title: "Web Design For Everybody",
      subtitle: "- Coursera",
      logo_path: "html-icon.png",
      certificate_link:
        "https://drive.google.com/file/d/1F0TKeMFs5Yz8bRQc5o5qRFbg7Y90_Cl1/view?usp=sharing",
      alt_name: "Coursera",
      color_code: "#D83B0199",
    },
    {
      title: "Introduction to Cyber Security",
      subtitle: "- Cisco",
      logo_path: "cisco-icon.png",
      certificate_link:
        "https://www.credly.com/badges/f7513c7f-3360-41f5-a287-786dd1b76896/linked_in_profile",
      alt_name: "Cisco",
      color_code: "#D83B0199",
    },
    {
      title: "Machine learning with python",
      subtitle: "- Coursera",
      logo_path: "machine-learning-icon.png",
      certificate_link:
        "https://drive.google.com/file/d/1Ze21XOI-w4nvOB2iDgL7L3cLK18mGaym/view?usp=sharing",
      alt_name: "IBM, Coursera",
      color_code: "#1F70C199",
    },
    {
      title: "Data data everywhere",
      subtitle: "- Google, Coursera",
      logo_path: "google-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1eov5eUaJLhxEWB9Jnww5yYKnnDn-k52l/view?usp=sharing",
      alt_name: "Google, Coursera",
      color_code: "#0C9D5899",
    },
    {
      title: "Prepare For Data Exploration",
      subtitle: "- Google, Coursera",
      logo_path: "google-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1TwkG8mGLlXgzIrVBN4m8LuK1VCARD-kR/view?usp=sharing",
      alt_name: "Google, Coursera",
      color_code: "#00000099",
    },
    {
      title: "Data Driven Decision Making",
      subtitle: "- Google, Coursera",
      logo_path: "google-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1SKlHxWt06y79KTT0R1Yp7DAuXX2-mDaX/view?usp=sharing",
      alt_name: "Google, Coursera",
      color_code: "#2A73CC",
    },

  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have had Salesforce Admin and Developer training by PWC. I have obtain 60+ badges on trailhead with 'Expeditioner' ranking and 43000+ points",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. I have expertise in creating fullstack web applications utilizing technologies such as ReactJs, TailWind CSS, NodeJs, MongoDb Atlas, Firebase, etc. I also have experience in building machine learning and deep learning models as well as cloud technologies such as AWS EC2, S3, Amplify, Elastic Beanstalk, Lambda etc",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_abinav.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, ML, AI, and Cloud.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.abcd.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "C/130/241-A Gulali Vatika Jail Road, Shahpur, Gorakhpur, Uttar Pradesh, India",
    locality: "Uttar Pradesh",
    country: "IN",
    region: "Uttar Pradesh",
    postalCode: "273006",
    streetAddress: "Gulali Vatika",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Gorakhpur,+Uttar+Pradesh/@26.7638446,83.3215103,12z/data=!3m1!4b1!4m6!3m5!1s0x3991446a0c332489:0x1ff3f97fdcc6bfa2!8m2!3d26.7605545!4d83.3731675!16zL20vMDRicXZ2?entry=ttu",
  },
  phoneSection: {
    title: "Phone no: ",
    subtitle: "(+91) 9116290771",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
