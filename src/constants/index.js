import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    git,
    figma,
    WebOOK,
    sabis,
    AUS,
    Google,
    threejs,
    Java,
    Cplusplus,
    aus_big,
    ISC_Dubai,
    Google_Skill,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Programmer",
        icon: web,
    },
    {
        title: "Leader",
        icon: mobile,
    },
    {
        title: "Problem-Solver",
        icon: creator,
    },
    {
        title: "Bilingual",
        icon: backend,
    },
];

const technologies = [
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "threejs",
        icon: threejs,
    },
    {
        name: "Java",
        icon: Java,
    },

    {
        name: "C++",
        icon: Cplusplus,
    },
];

const experiences = [
    {
        title: "President",
        company_name: "SABIS MUN Club",
        icon: sabis,
        iconBg: "#fff",
        date: "September 2020 - June 2022",
        points: [
            "Overlook the operations of the club",
            "Develop and maintain the quality of the club.",
            "Host conferences",
            "Give the Introductory Presentation",
        ],
    },
    {
        title: "Debater",
        company_name: "SABIS Debate Club",
        icon: sabis,
        iconBg: "#fff",
        date: "April 2020 - June 2022",
        points: [
            "Work it either teams of two or three to win weekly debates",
            "Adjudicate the debate",
            "Help the newly joined members",
        ],
    },
    {
        title: "Vice-President",
        company_name: "SABIS Coding Club,",
        icon: sabis,
        iconBg: "#fff",
        date: "February 2021 - June 2022",
        points: [
            "Tasked with managing and setting up meetings.",
            "Resourcing educational material.",
            "Guide new members & help them setup the required software.",
        ],
    },
    {
        title: "Co-Founder",
        company_name: "WebOOK",
        icon: WebOOK,
        iconBg: "#fff",
        date: "November 2019 - Present",
        points: [
            "Conducted surveys & prepared the presentation.",
            "Built mock website for final presentation.",
            " Presented the idea to the Director of ISCDXB.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const education = [
    {
        name: "High School Diploma",
        description: "The International School of Choueifat",
        date: "September 2019 - June 2022",
        tags: [],
        image: ISC_Dubai,
        image2: sabis,
        source_code_link: "https://iscdubai.sabis.net/"
    },

    {
        name: "BSc Computer Science",
        description:
            "The American University of Sharjah",
        date: "September 2022 - Present",
        tags: [],
        image: aus_big,
        image2: AUS,
        source_code_link: "https://www.aus.edu/",
    },
    {
        name: "Fundamentals of Digital Marketing",
        description:
            "Google Skillshop-(Google Garage)",
        date: "December 2022 - January 2023",
        tags: [],
        image: Google_Skill,
        image2: Google,
        source_code_link: "https://www.aus.edu/",
    },
];

export { services, technologies, experiences, testimonials, education };