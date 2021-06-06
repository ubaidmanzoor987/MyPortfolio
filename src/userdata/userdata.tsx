import * as SiIcons from "react-icons/si";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as GoIcons from "react-icons/go";
import * as Vsc from "react-icons/vsc";
import profilepic from "./personal.jpg";
import cover from "./cove.jpg";
import junglework1 from "./JungleWork/img1.png";
import junglework2 from "./JungleWork/img2.png";
import junglework3 from "./JungleWork/img3.png";
import junglework4 from "./JungleWork/img4.png";
import awbtransport1 from "./awbtransport/img1.png";
import awbtransport2 from "./awbtransport/img2.png";
import awbtransport3 from "./awbtransport/img3.png";
import awbtransport4 from "./awbtransport/img4.png";
import awbtransport5 from "./awbtransport/img5.png";
import awbtransport6 from "./awbtransport/img6.png";
import awbtransport7 from "./awbtransport/img7.png";
import awbtransport8 from "./awbtransport/img8.png";
import billauto1 from "./billing automation/1.png";
import billauto2 from "./billing automation/2.png";
import reditscrap1 from "./Reddit Scrapper/0.png";
import reditscrap2 from "./Reddit Scrapper/1.png";
import reditscrap3 from "./Reddit Scrapper/2.png";
import soundscrap1 from "./Sound Cloud Scrapper/img1.png";
import soundscrap2 from "./Sound Cloud Scrapper/img2.png";
import soundscrap3 from "./Sound Cloud Scrapper/img3.png";
import confirm1 from "./confirm_order_app/1.png";
import confirm2 from "./confirm_order_app/2.png";
import confirm3 from "./confirm_order_app/3.png";
import confirm4 from "./confirm_order_app/4.png";
import confirm5 from "./confirm_order_app/5.png";
import confirm6 from "./confirm_order_app/6.png";

export const UserData = {
  greet: "Hi, I am ",
  name: "Ubaid Ullah Manzoor",
  summary:
    "I am Full Stack Developer having experience in building Web Apps using React JS & Python Flask, Mobile Apps using React Native and Web Scrappers using Python Selenium and .Net C#",
  about:
    "A dedicated, highly-skilled, & reputable Software Engineer & Developer with 1+ years’ extensive practical experience. With strong expertise in Development of Web (Html, CSS, JavaScript,React Js & MVC) in Front End. DesktopApplication ( JavaFx). Back-End Development With Python Flask.Highly skilled & elective Technical. Strong Software Engineering skills proficient in determining requirements & resolving technical issues quickly.",

  GithubIcon: <AiIcons.AiOutlineGithub />,
  GithubHref: "https://github.com/ubaidmanzoor987",

  linkedinIcon: <IoIcons.IoLogoLinkedin />,
  linkedinHref: "https://www.linkedin.com/in/ubaidullah-manzoor/",

  UpworkIcon: <SiIcons.SiUpwork />,
  UpworkHref: "https://www.upwork.com/freelancers/~01e6d216de55bcf559",

  profilepic: profilepic,
  myPic: cover,
  skillstats: [
    "https://wakatime.com/share/@47b8bca9-99f3-4e23-887a-0a0693a9eee5/b81ebc00-05f1-4f1b-8a96-64fce04bab75.svg",
    "https://wakatime.com/share/@47b8bca9-99f3-4e23-887a-0a0693a9eee5/3a6abcc7-2ed0-43a2-860f-180d8800ec54.svg",
  ],

  about_info: {
    FullName: "Ubaid Ullah Manzoor",
    Age: "22 Years",
    Nationality: "Pakistani",
    Languages: "English, Urdu, Chinese",
    Address: "Lahore, Pakistan",
    Freelance: "Available",
  },
  skills: {
    Python: {
      percent: 80,
    },
    ReactJS: {
      percent: 85,
    },
    "Python Flask": {
      percent: 80,
    },
    HTML: {
      percent: 100,
    },
    Javascript: {
      percent: 95,
    },
    CSS3: {
      percent: 95,
    },
  },

  work: [
    {
      ExperienceDate: "Nov,2019 - June, 2021",
      Experience: "Frontend Web Developer",
      companyname: "MeissaSoft",
      summary:
        "Worked as Web Developer & managed ongoing Web development projects.Responsible for write / review codes in React JS & Redux JS.Working closely with web designers and programmers to produce the website.Constant communication with other colleagues in the business to develop and deploy their content – and ensuring there is a clear establishment of what can be created within time-frame.",
    },
  ],

  education: [
    {
      duaration: "2018 - 2022",
      DegreeType: "Bachelors in Computer Science",
      UniversityName:
        "National College Of Business Administration & Economics (NCBA&E)",
    },
    {
      duaration: "2014 - 2016",
      DegreeType: "FSC. Pre Engineering",
      UniversityName: "BISE Lahore",
    },
    {
      duaration: "2012 - 2014",
      DegreeType: "Matric With Computer Science",
      UniversityName: "The Nation School Lahore",
    },
  ],

  socialinfo: [
    {
      icon: <BsIcons.BsPhone />,
      type: "Phone",
      address: "+92-3104327313",
    },
    {
      icon: <AiIcons.AiOutlineMail />,
      type: "Email",
      address: "ubaidmanzoor987@gmail.com",
    },
    {
      icon: <GoIcons.GoLocation />,
      type: "Address",
      address: "Lahore,Pakistan",
    },
  ],
  portfoliodata: [
    {
      icon: <AiIcons.AiOutlineZoomIn />,
      linkicon: <AiIcons.AiOutlineLink />,
      pic: junglework1,
      portfolioname: "Jungle Works",
      link: "#",
      aboutPortfolio: "The Most Effective Way of Managing Your Project.",
      pics: [junglework1, junglework2, junglework3, junglework4],
      description:
        "At Jungle Works, not only projects, but also hourly employment are possible, maximizing work efficiency for employees and time value for freelancers.",
    },
    {
      icon: <AiIcons.AiOutlineZoomIn />,
      linkicon: <AiIcons.AiOutlineLink />,
      pic: awbtransport1,
      portfolioname: "AWB Transport",
      link: "http://www.awbtransport.com",
      aboutPortfolio:
        "This is a transportation website for truck drivers where they can import/export the goods and services throught the transporation. They can apply, create their own profile",
      pics: [
        awbtransport1,
        awbtransport2,
        awbtransport3,
        awbtransport4,
        awbtransport5,
        awbtransport6,
        awbtransport7,
        awbtransport8,
      ],
      description: "Made this Website using React and Flask.",
    },
    {
      icon: <AiIcons.AiOutlineZoomIn />,
      linkicon: <AiIcons.AiOutlineLink />,
      pic: confirm1,
      portfolioname: "Confirm Order App",
      link: "http://co.abdulrehanmirza.com",
      aboutPortfolio:
        "This is a Small Application Built In Flask And React. Here Vistors can get 2 different ui's on base of Their Age.",
      pics: [confirm1, confirm2, confirm3, confirm4, confirm5, confirm6],
      description: "Made this Website using React and Flask.",
    },
    {
      icon: <AiIcons.AiOutlineZoomIn />,
      linkicon: <AiIcons.AiOutlineLink />,
      pic: reditscrap1,
      pics: [reditscrap1, reditscrap2, reditscrap3],
      portfolioname: "Reddit Scrapper",
      link: "#",
      aboutPortfolio: "Reddit data scrapping",
      description:
        "This Scapper scrapp the posts of reddit. This Scrapper is built with Python And Praw. The Result store in database.",
    },
    {
      icon: <AiIcons.AiOutlineZoomIn />,
      linkicon: <AiIcons.AiOutlineLink />,
      pic: soundscrap1,
      portfolioname: "Sound Cloud Scrapper",
      link: "#",
      aboutPortfolio: "Sound Cloud scrapped data of rappers.",
      pics: [soundscrap1, soundscrap2, soundscrap3],
      description:
        "This Application Scrapped the data of sound cloud rappers. Using Python and Selenium and beautifull Soap. and Save the resultant file in CSv Format.",
    },
    {
      icon: <AiIcons.AiOutlineZoomIn />,
      linkicon: <AiIcons.AiOutlineLink />,
      pic: billauto1,
      portfolioname: "Billing Automation",
      link: "#",
      aboutPortfolio: "Billing Automation Reader for PDF's",
      pics: [billauto1, billauto2],
      description:
        "It is an automated app that is build using c#. It read the data from PDF'S. And fill the data on website. ",
    },
  ],

  Reviews: [
    {
      clientreviews:
        "Ubaid Ullah Manzoor is very Hardworking and great worker. Outstanding experience with him. Very very highly recommended and i want to work with him again definitely.",
      clientname: "Salman Maqbool",
      designation: "Client",
    },
    {
      clientreviews: "Good Job done by Ubaid. He is expert in Python Flask",
      clientname: "Sonny Cho.",
      designation: "Client",
    },
  ],
};

export const Services = [
  {
    ReactIcon: <AiIcons.AiOutlineLaptop />,
    myservice: "Web Development",
    aboutservice: "Creating Websites using HTML,CSS, React JS, Django Flask. ",
  },
  {
    ReactIcon: <Vsc.VscDeviceMobile />,
    myservice: "Mobile App",
    aboutservice: "Developing Mobile Applications using React Native.",
  },
  {
    ReactIcon: <IoIcons.IoLogoPython />,
    myservice: "Scrapping",
    aboutservice:
      "Scrapping the data using .Net and Python Selenium and Beautiful Soap",
  },
];

export const worklogo = {
  workicon: <MdIcons.MdCardTravel />,
  educationicon: <BiIcons.BiBook />,
};
