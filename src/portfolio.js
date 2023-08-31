/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Suyash's Portfolio",
  description:
    "Passionate DevOps enthusiast specializing in crafting impactful and scalable architectures, automating critical deployments, and optimizing large infrastructures.",
  og: {
    title: "Kumar Suyash Portfolio",
    type: "website",
    url: "http://suyash.live/",
  },
};

//Home Page
const greeting = {
  title: "Kumar Suyash",
  logo_name: "KumarSuyash",
  subTitle:
    "Passionate DevOps enthusiast specializing in crafting impactful and scalable architectures, automating critical deployments, and optimizing large infrastructures.",
  resumeLink:
    "https://drive.google.com/file/d/1RNlHk5pOnV_0gfJg1VV4Wqnpmfj7JSjm/view?usp=sharing",
 
};

const socialMediaLinks = [
  

  {
    name: "Github",
    link: "https://github.com/suyashnxt",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kumar-suyash-177485161/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:suyash.next@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/Suyash_nxt/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Devops Engineering",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Automate and integrate processes for seamless development, frequent code changes through CI, and efficient release via CD",
        "⚡ Experience implementing DevOps practices tailored to project needs",
        "⚡ Automating infrastructure provisioning using tools like Terraform."
      ],
      softwareSkills: [
        {
          skillName: "Terraform",
          fontAwesomeClassname: "devicon:terraform-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "devicon:docker-wordmark",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "skill-icons:kubernetes",
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
          skillName: "Ansible",
          fontAwesomeClassname: "logos:ansible",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Designing scalable and resilient cloud infrastructure solutions.",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
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
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Mobile Developement",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing and implementing user interfaces (UI) and user experiences (UX) for Android apps",
        "⚡ Testing and debugging apps to identify and fix issues across different devices and versions",
        "⚡ Collaborating with designers, product managers, and other developers in an agile environment",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "skill-icons:androidstudio-light",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
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
      profileLink: "https://leetcode.com/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com",
    }, 
  ],
};

const degrees = {
  degrees: [
    {
      title: "Visvesvaraya Technological University",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "vtu_logo.png",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, Cloud etc.",
        "⚡ Apart from this, I have done courses on Cloud Computing, Android Stuido and Devops related tools.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college for Leadership and Extracurricular Involvement",
      ],
      website_link: "https://vtu.ac.in/en/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cloud Certified Associate Cloud Engineer",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://google.accredible.com/50f98b7f-f7ed-4962-b52b-6e2477094250?key=9c1060089661b94c785726e5a56c61db03b8cc8c13769e03ac2b6dd3000429db",
      alt_name: "GCP ACE",
      color_code: "#8C151599",
    },
    {
      title: "Essential Google Cloud Infrastructure: Foundation",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://partner.cloudskillsboost.google/public_profiles/d7eb480c-697f-40d5-95ff-44cfd58274b5/badges/3081101",
      alt_name: "GCP infra",
      color_code: "#00000099",
    },
    {
      title: "Elastic Google Cloud Infrastructure: Scaling and Automation",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://partner.cloudskillsboost.google/public_profiles/d7eb480c-697f-40d5-95ff-44cfd58274b5/badges/2646603",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Essential Google Cloud Infrastructure: Core Services",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "Google",
      color_code: "#1F70C199",
    },
    {
      title: "Google Kubernetes Engine",
      subtitle: "- GCP",
      logo_path: "google_logo.png",
      certificate_link:
        "https://partner.cloudskillsboost.google/public_profiles/d7eb480c-697f-40d5-95ff-44cfd58274b5/badges/2656201",
      alt_name: "Google",
      color_code: "#D83B0199",
    },
    {
      title: "Microservices with Spring Boot and Spring Cloud",
      subtitle: "- in28minutes, Udemy",
      logo_path: "microservices_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1SwH0WytKBx8qFuNJwf6cHayi62xzMs1g/view?usp=sharing",
      alt_name: "Udemy",
      color_code: "#1F70C199",
    },
    {
      title: "Data Dog",
      subtitle: "- Vaga Notes",
      logo_path: "datadog_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1sfKSgOQVdiZCtHdJLiW9iYHSLWZeB8_X/view?usp=sharing",
      alt_name: "Udemy",
      color_code: "#0C9D5899",
    },
    {
      title: "Docker",
      subtitle: "- Kodekloud",
      logo_path: "docker_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1S5OhUC0sA2Gbg_eixn3GBtJ0AeJcbaAE/view?usp=sharing",
      alt_name: "Udemy",
      color_code: "#00000099",
    },
    {
      title: "Kubernetes",
      subtitle: "- Jogesh Muppala",
      logo_path: "kubernetes_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1XxetYjqllyHd7MSdW1wKsQr12n7ZNuep/view?usp=sharing",
      alt_name: "Udemy",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have also worked with some well established companies mostly as Devops Engineer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "TELUS International",
          company_url: "https://www.telusinternational.com/",
          logo_path: "telus_logo.png",
          duration: "December 2022 - present ",
          location: "Remote",
          description:
            "Serving Charter Client Charter to conceive, execute, and oversee continuous integration and continuous deployment (CI/CD) pipelines, automating the delivery of software processes.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "TELUS International",
          company_url: "https://www.telusinternational.com/",
          logo_path: "telus_logo.png",
          duration: "Jan 2020 - Nov 2022",
          location: "Noida, Uttar Pradesh",
          description:
            " Involved in creating the company's DevOps strategy in a mix environment of Linux(Ubuntu, CentOS).",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "Pryce Infotech",
          company_url: "https://www.linkedin.com/in/pryce-infotech-a01a98173/?originalSubdomain=in",
          logo_path: "pryce_logo.png",
          duration: "Jun 2018 - Dec 2019",
          location: "Bangalore, Karnataka",
          description:
            "I have worked on Mobile self-service application for employees, a mobile application designed to provide an interface for display actions to manage devices and looking for tutorials and topics and manage password..",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer",
          company: "Greypad technologies",
          company_url: "https://www.greypad.com",
          logo_path: "greypad_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "Bangalore, Karnataka",
          description:
            "I have designed and developed visually appealing, user-friendly websites and web applications.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2016 - May 2017",
          location: "Bangalore, Karnataka",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2017 - May 2018",
          location: "Bangalore, Karnataka",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Devops projects and deploy them using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Research",
  description:
    "I have worked on few research papers",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Elective Course System Developed Using Fuzzy Logic",
      createdAt: "2017-03-06T16:26:54Z",
      description: "Paper Written on Elective Course System Developed Using Fuzzy Logic published in Nectra-17 ",
      url:
        "https://www.nationalconference.in/event/index.php?id=2076540",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_suyash.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Devops, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.kumarsuyash.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Hi-Tech city, Hyderabad, Telangana - 500084",
    locality: "Gachibowlir",
    country: "IN",
    region: "Hyderabad",
    postalCode: "500084",
    streetAddress: "Hi-Tech city",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76https://www.google.com/maps/place/HITEC+City,+Hyderabad,+Telangana+500081/@17.4477533,78.3765194,15z/data=!3m1!4b1!4m6!3m5!1s0x3bcb93dc8c5d69df:0x19688beb557fa0ee!8m2!3d17.4434646!4d78.3771953!16zL20vMDdwaDlu?entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
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
