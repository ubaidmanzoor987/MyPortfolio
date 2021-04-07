import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as DiIcons from 'react-icons/di';
import * as MdIcons from 'react-icons/md';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as GoIcons from 'react-icons/go';
import * as Vsc from 'react-icons/vsc';
import portfolio from './portfolio.jpg';
import logo from './logo.jpeg';
import pic from './pic.jpg';
import cup from './cup.jpg'
import pen from './pen.jpg'
import usb from './usb.jpg'


export const UserData ={
        greet: 'Hi, I am ',
        name: 'Abdul Rehman Mirza',
        about: 'I am a frontend web developer. I can provide clean code and pixel perfect design I also make website more & more interactive with web animations.',

        GithubIcon: <AiIcons.AiOutlineGithub/>,
        GithubHref: "https://github.com/ar-rehman135",

        linkedinIcon: <IoIcons.IoLogoLinkedin/>,
        linkedinHref: "https://www.linkedin.com/in/abdulrehman-mirza-28810356/",

        UpworkIcon: <SiIcons.SiUpwork/>,
        UpworkHref: "https://www.upwork.com/freelancers/~015fac9949328caef1",

        profilepic: logo,
        myPic: pic,
        Commentlogo: <Vsc.VscComment/>,

        about_info: {
            FullName: 'Devid Chester',
            Age: '24 Years',
            Nationality: 'American',
            Languages: 'English, French',
            Address: '121 King Street, Melbourne, Australia',
            Freelance: 'Available'
        },
        skills:
        {
            HTML: {
                percent: 100
            },
            Javascript: {
                percent: 95
            },
            ReactJS: {
                percent: 80
            },
            CSS3: {
                percent: 95
            },
            jQuery: {
                percent: 80
            },
            Photoshop: {
                percent: 50
            },
    },
    work: [{
            ExperienceDate: '2014 - 2016',
            Experience: 'UI/UX Designer',
            companyname: 'Example Company',
            summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
        },
        {
            ExperienceDate: '2016 - 2018',
            Experience: 'Frontend Web Developer',
            companyname: 'CBA Company',
            summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
        },
        {
            ExperienceDate: '2018 - Present',
            Experience: 'Frontend Web Developer',
            companyname: 'Abc Company',
            summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.'
        }
    ],

    education: [
        {
        ExperienceDate: '2018 - 2019',
        DegreeType: 'Masters',
        UniversityName: 'Abc University',
        summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.'
    },
    {
        ExperienceDate: '2018 - 2019',
        DegreeType: 'Masters',
        UniversityName: 'Abc University',
        summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.'
    },
    {
        ExperienceDate: '2018 - 2019',
        DegreeType: 'Masters',
        UniversityName: 'Abc University',
        summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.'
    },
    ],

    socialinfo: [
        {
            icon: <BsIcons.BsPhone/>,
            type: 'Phone',
            address: '12345'
        },
        {
            icon: <AiIcons.AiOutlineMail/>,
            type: 'Email',
            address: '12345'
        },
        {
            icon: <GoIcons.GoLocation/>,
            type: 'Address',
            address: '12345'
        }
],
portfoliodata:
        [
            {
                icon: <AiIcons.AiOutlineZoomIn/>,
                linkicon: <AiIcons.AiOutlineLink/>,
                pic: portfolio,
                pics: [portfolio, pen, portfolio],
                portfolioname: 'Ultra-Notel',
                aboutPortfolio: 'A beautiful t-shirt mockup.',
                description: 'This is a Shirt Brand Portfolio',
            },
            {
                icon: <AiIcons.AiOutlineZoomIn/>,
                linkicon: <AiIcons.AiOutlineLink/>,
                pic: portfolio,
                pics: [portfolio, pen, portfolio],
                portfolioname: 'Ultra-Notel',
                aboutPortfolio: 'A beautiful t-shirt mockup.',
                description: 'Porfolio Shirt',
            },
            {
                icon: <AiIcons.AiOutlineZoomIn/>,
                linkicon: <AiIcons.AiOutlineLink/>,
                pic: portfolio,
                pics: [portfolio, pen, portfolio],
                portfolioname: 'Ultra-Notel',
                aboutPortfolio: 'A beautiful t-shirt mockup.',
                description: '',
            },
            {
                icon: <AiIcons.AiOutlineZoomIn/>,
                linkicon: <AiIcons.AiOutlineLink/>,
                pic: portfolio,
                portfolioname: 'Ultra-Notel',
                aboutPortfolio: 'A beautiful t-shirt mockup.',
                pics: [portfolio, pen, portfolio],
                description: '',
            },
            {
                icon: <AiIcons.AiOutlineZoomIn/>,
                linkicon: <AiIcons.AiOutlineLink/>,
                pic: pen,
                portfolioname: 'Ultra-Notel',
                aboutPortfolio: 'A beautiful t-shirt mockup.',
                pics: [portfolio, portfolio, portfolio],
                description: '',
            },
            {
                icon: <AiIcons.AiOutlineZoomIn/>,
                linkicon: <AiIcons.AiOutlineLink/>,
                pic: portfolio,
                portfolioname: 'Ultra-Notel',
                aboutPortfolio: 'A beautiful t-shirt mockup.',
                pics: [portfolio, portfolio, portfolio],
                description: '',
            },
            {
                icon: <AiIcons.AiOutlineZoomIn/>,
                linkicon: <AiIcons.AiOutlineLink/>,
                pic: portfolio,
                portfolioname: 'Ultra-Notel',
                aboutPortfolio: 'A beautiful t-shirt mockup.',
                pics: [portfolio, pen, portfolio],
                description: '',
            },
            {
                icon: <AiIcons.AiOutlineZoomIn/>,
                linkicon: <AiIcons.AiOutlineLink/>,
                pic: portfolio      ,
                portfolioname: 'Ultra-Notel',
                aboutPortfolio: 'A beautiful t-shirt mockup.',
                pics: [portfolio, pen, portfolio],
                description: '',
            },
            {
                icon: <AiIcons.AiOutlineZoomIn/>,
                linkicon: <AiIcons.AiOutlineLink/>,
                pic: portfolio,
                portfolioname: 'Ultra-Notel',
                aboutPortfolio: 'A beautiful t-shirt mockup.'  ,
                pics: [portfolio, pen, portfolio],
                description: '', 
            }, 
            {
                icon: <AiIcons.AiOutlineZoomIn/>,
                linkicon: <AiIcons.AiOutlineLink/>,
                pic: portfolio,
                portfolioname: 'Ultra-Notel',
                aboutPortfolio: 'A beautiful t-shirt mockup.',
                pics: [portfolio, pen, portfolio],
                description: '',
            },
            {
                icon: <AiIcons.AiOutlineZoomIn/>,
                linkicon: <AiIcons.AiOutlineLink/>,
                pic: portfolio,
                portfolioname: 'Ultra-Notel',
                aboutPortfolio: 'A beautiful t-shirt mockup.',
                pics: [portfolio, pen, portfolio],
                description: '',
            },
            {
                icon: <AiIcons.AiOutlineZoomIn/>,
                linkicon: <AiIcons.AiOutlineLink/>,
                pic: portfolio,
                portfolioname: 'Ultra-Notel',
                aboutPortfolio: 'A beautiful t-shirt mockup.',
                pics: [portfolio, pen, portfolio],
                description: '',
            }
        ],

        Reviews: [{
            clientreviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod',
            clientname: 'Susan Yost',
            designation: 'Client'
        },
        {
            clientreviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod',
            clientname: 'Sony',
            designation: 'Client'
        },
        {
            clientreviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod',
            clientname: 'Sony',
            designation: 'Client'
        }
    ],
};

export const Services = [{
    ReactIcon: <DiIcons.DiReact/>,
    myservice: 'Web Development', 
    aboutservice: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod'
},
{
    ReactIcon: <DiIcons.DiReact/>,
    myservice: 'Mobile App', 
    aboutservice: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod'
},
{
    ReactIcon: <DiIcons.DiReact/>,
    myservice: 'Scraping', 
    aboutservice: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod'
}]

export const Reviews = [

]

export const worklogo ={
    workicon: <MdIcons.MdCardTravel/>,
    educationicon: <BiIcons.BiBook/>

}
