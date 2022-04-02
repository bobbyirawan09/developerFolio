/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bobby Irawan",
  title: "Hi all, I'm Bobby",
  subTitle: emoji(
    "Passionate Android developer. Mainly focus on UI/UX and code structure. Looking for a sense of life in Android Development."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1gwWsTsuvmXPuIMbjZY57kPjXmp-fKMWM/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bobbyirawan09",
  linkedin: "https://www.linkedin.com/in/bobby-irawan/",
  gmail: "bobbyirawan09@gmail.com",
  medium: "https://medium.com/@bobirawan",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Petra Christian University",
      logo: require("./assets/images/pcuLogo.png"),
      subHeader: "Bachelor of Computer Science (S.Kom)",
      duration: "August 2015 - August 2019",
      desc: "Major in Information Technology, focused in Mobile Development",
      descBullets: [
        "Join many organization, from small (less than 50 people) to big (over 200 people) scale",
        "Cumulative GPA 3.58/4.0"
      ]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fulltime - Sr. Android Engineer",
      company: "Stockbit",
      companylogo: require("./assets/images/stockbitLogo.jpeg"),
      date: "July 2021 – Present",
      descBullets: [
        "Create a Diet program for our project that had legacy code",
        "Looking for the best Android Developer to join our awesome team"
      ]
    },
    {
      role: "Freelance - Android Developer",
      company: "Logol",
      companylogo: require("./assets/images/logolLogo.png"),
      date: "May 2020 – Feb 2022",
      descBullets: [
        "Redesign the whole application. All pages in Logol driver application are changed to the new design",
        "Maintaining the application. Every update for the app both bug fixing and business requirement purposes"
      ]
    },
    {
      role: "Fulltime - Android Developer",
      company: "Bibit",
      companylogo: require("./assets/images/bibitLogo.png"),
      date: "Sept 2020 – July 2021",
      descBullets: [
        "Developed biometric login feature on Bibit application",
        "Increase code coverage from 0% to 62% and counting",
        "Developed CI/CD in Bibit Android project"
      ]
    },
    {
      role: "Fulltime - Android Developer",
      company: "Pegipegi",
      companylogo: require("./assets/images/pegipegiLogo.png"),
      date: "Sept 2019 – April 2020",
      descBullets: [
        "Help in implementing loading animation on the flight search list using Lottie",
        "In charge of developing flight buy baggage feature"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/troveskinLogo.png"),
      projectName: "TroveSkin",
      projectDesc: "Create product detail page, user profile detail page and follow feature",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.troveskin.com/"
        },
        {
          name: "Visit Playstore",
          url: "https://play.google.com/store/apps/details?id=com.trove&hl=en"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logolLogo.png"),
      projectName: "Logol",
      projectDesc: "Maintain, Revamp and keep update Logol driver application",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.logol.co.id/"
        },
        {
          name: "Visit Playstore",
          url: "https://play.google.com/store/apps/details?id=logol.driver"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "irawanbobby09@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  blogSection,
  talkSection,
  contactInfo
};
