const logotext = "MATTLANE";
const meta = {
    title: "Matt Lane",
    description: "My name is Matt Lane. I'm a Data Scientists _ Full stack devloper,currently working at Oak Ridge National Laboratory pursuing a PhD.",
};

const introdata = {
    title: "I'm Matt Lane",
    animated: {
        zeroth: "I love science",
        first: "I love coding",
        second: "I love TESTING code",
        third: "I love teaching others to code",
    },
    description: "I write a lot of software for scientific analysis for a day job while I pursue my PhD in Data Science at the University of Tennessee Knoxville.",
    your_img_url: "https://www.github.com/lanematthewj/lanematthewj.github.io/",
};

const dataabout = {
    title: "about me",
    aboutme_current: `Hi, my name's Matt Lane. I'm currently pursuing a PhD in Data Science at UTK while working in the Computational and Predictive Biology Group at Oak Ridge National Laboratory, working under Dr. Dan Jacobson.`,

    aboutme_projects: `Right now, my research focuses on using a mix of statistical methods, graph theory, and machine/deep learning to analyze and predict complex biological systems. Working at ORNL, I get to tackle these challenges with some of the most powerful computing systems out there: Andes, Summit, and Perlmutter.`,
    project_topics: {
        desc:`Some of the projects topics I’m currently working on include:`,
        topics: [
            "Using Explainable AI to reverse engineer massive Predictive Expression Networks for Multiplex Omics models.",
            "Developing well-documented and tested scientific software packages for publication.",
            "Creating metabolomic profile networks by extracting peaks and processing LC / GC - MS data.",
            "Exploring topological perturbation in networks to predict phenotypic effects of genetic modulation.",
            "Applying geometric deep learning for node embedding and link prediction on large, sparse networks.",
        ]
    },
    about_me_prior_work: "Before this, I earned my M.S. in Computer Science at the University of Missouri–St.Louis, working with Dr.Sharlee Climer.My research there focused on network theory techniques to analyze cerebrospinal fluid metabolites in Alzheimer’s patients.",
    prior_work: "After that, I spent some time as a software engineer at Bayer Crop Science, building software for collecting, storing, and analyzing crop data from the field. Prior to working as a software envineer, I worked for the Missouri Botanical Garden doing educational outreach. Bugs and other critters don't get as much love as they deserve.",
    volunteer_work: "Outside of research, I’m passionate about STEM education. I volunteer with the East Tennessee STEM Hub, teaching coding and robotics to local high school students and community members. Prior to moving to TN, I volunteered my time with the St. Louis BDPA chapter to teach local high school students how to code and build full stack web applications."
};

const worktimeline = [{
        jobtitle: "Doctoral Candidate",
        where: "Oak Ridge Natioanl Laboratory / UT Knoxville",
        date: "2020-2025",
        daytoday: "Python, R, Bash, Data Analysis, High Performance Computing",
    },
    {
        jobtitle: "Software Engineer",
        where: "Bayer Crop Science",
        date: "2017-2020",
        daytoday: "Javascript, React, Express, Mobile Programming",
    },
    {
        jobtitle: "Graduate Research Assistant",
        where: "University of Missouri",
        date: "2014-2017",
        daytoday: "C++, Combinitorics",
    },
    {
        jobtitle: "Outreach Educator",
        where: "Missouri Botanical Garden",
        date: "2014-2017",
        daytoday: "Science Communication",
    },
];

const education = [{
    degree: "Doctor of Philosophy",
    topic: "Data Science and Engineering",
    where: "University of Tennessee Knoxville",
    date: "Anticipated: Aug 2025",
},
{
    degree: "Master of Science",
    topic: "Computer Science",
    where: "University of Missouri St. Louis",
    date: "2017",
},
{
    degree: "Bachelor of Science",
    topic: "Biology",
    where: "University of Missouri Columbia",
    date: "2011",
},
{
    degree: "Bachelor of Arts",
    topic: "Philosophy",
    where: "University of Missouri Columbia",
    date: "2011",
},
];

const skills = [
    {
    name: "Python",
    value: 90,
    }, 
    {
        name: "Bash",
        value: 90,
    },
    {
        name: "R",
        value: 80,
    },
    {
        name: "Javascript",
        value: 75,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Express",
        value: 60,
    }
];

const services = [{
        title: "Data Analysis",
        description: ".",
    },
    {
        title: "Software Pipelines",
        description: ".",
    },
    {
        title: "Website Generation",
        description: ".",
    },
    {
        title: "Web Graphic Illustration",
        description: ".",
    },
];

const dataportfolio = [{
        img: "https://www.github.com/dkainer/RWRtoolkit",
        title: "Software geared towared the generation and exploration of multiplex networks.",
        description: "Software geared towared the generation and exploration of multiplex networks.",
        type: "software",
        link: "#",
    },
    {
        img: "./img/",
        title: "MetNet: A software for the calculation and visualization of statistically significant peaks in LC-MS data with respect to treatments.",
        description: "MetNet: A software for the calculation and visualization of statistically significant peaks in LC-MS data with respect to treatments.",
        type: "software",
        link: "#",
    },
    {
        img: "https://github.com/lanematthewj/lanematthewj.github.io/img/helloworld_c.png",
        title: "Linux Systems Programming: Bash && C",
        description: "Course material for CS2700, an introduction to how to navigate linux systems, program bash scripts, and write programs engaging with the system at large in C",
        type: "courseMaterial",
        link: "#",
    },
    {
        img: "https://github.com/lanematthewj/lanematthewj.github.io/img/helloworld_c.png",
        title: "Introduction to Web Programming: HTML, Javascript, and PHP",
        description: "This coursework contains an introduction to web development for complete beginners CS3010. This material starts out with the basics of HTML, Javascript, and PHP.",
        type: "courseMaterial",
        link: "#",
    },
    {
        img: "https://github.com/lanematthewj/lanematthewj.github.io/img/helloworld_c.png",
        title: "Advanced Web Programming with Javascript",
        description: "This contains the course material for CS4140. This material starts with learning advanced ES6 Javascript, and moves onto using React and Express frameworks for web developemtn.",
        type: "courseMaterial",
        link: "#",
    },
    {
        img: "https://github.com/lanematthewj/lanematthewj.github.io/img/helloworld_c.png",
        title: "Introduction to []",
        description: "This is a repository contining a number of introductions for single day courses. These topics range from \"what is code\", to robotics, to unit testing.",
        type: "courseMaterial",
        link: "#",
    },

];

// const contactConfig = {
//     YOUR_EMAIL: "name@domain.com",
//     YOUR_FONE: "(555)123-4567",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
//     // creat an emailjs.com account 
//     // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
//     YOUR_SERVICE_ID: "service_id",
//     YOUR_TEMPLATE_ID: "template_id",
//     YOUR_USER_ID: "user_id",
// };

const socialprofils = {
    github: "https://github.com/lanEmatthewj",
    bluesky: "https://bsky.app/profile/friendshipships.bsky.social",
    // facebook: "https://facebook.com",
    linkedin: "https://linkedin.com/in/lanematthewj",
    orcid: "https://orcid.org/0000-0002-7750-6822",
    // twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    education,
    skills,
    services,
    introdata,
    // contactConfig,
    socialprofils,
    logotext,
};