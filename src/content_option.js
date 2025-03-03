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
    description: "I write a lot of software for scientific analysis while I pursue my PhD in Data Science at the University of Tennessee Knoxville.",
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

const services = [
    {
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
];

const journalsAndBooks =[
    {
        title: "Multi-omic network analysis identifies dysregulated neurobiological pathways in opioid addiction",
        img: "",
        type: "journal",
        journal: "Biological Psychiatry",
        date: "November 2024",
        link: "https://doi.org/10.1016/j.biopsych.2024.11.013",
        contributors: "Kyle Sullivan; David Kainer; Matthew Lane; Mikaela Cashman; J. Izaak Miller; Michael R. Garvin; Alice Townsend; Bryan C. Quach; Caryn Willis; Peter Kruse et al.",
    },
    {
        title: "Analyses of GWAS signal using GRIN identify additional genes contributing to suicidal behavior",
        img: "",
        type: "journal",
        journal: "Communications Biology",
        date: "21 October 2024",
        link: "https://doi.org/10.1038/s42003-024-06943-7",
        contributors: "Kyle A. Sullivan; Matthew Lane; Mikaela Cashman; J. Izaak Miller; Mirko Pavicic; Angelica M. Walker; Ashley Cliff; Jonathon Romero; Xuejun Qin; Niamh Mullins et al."
    },

    {
        title: "Exploring the role of plant lysin motif receptor-like kinases in regulating plant-microbe interactions in the bioenergy crop Populus",
        img: "",
        type: "journal",
        journal: "Computational and Structural Biotechnology Journal",
        date: "2023",
        link: "https://doi.org/10.1016/j.csbj.2022.12.052",
        contributors: "Kevin R. Cope; Erica T. Prates; John I. Miller; Omar N.A. Demerdash; Manesh Shah; David Kainer; Ashley Cliff; Kyle Sullivan; Mikaela Cashman; Matthew Lane et al."
    },

    {
        title: "A glimpse into the fungal metabolomic abyss: Novel network analysis reveals relationships between exogenous compounds and their outputs",
        img: "",
        type: "journal",
        journal: "PNAS Nexus",
        date: "2023-09-29",
        link: "https://doi.org/10.1093/pnasnexus/pgad322",
        contributers: "Matthew J Lane; Muralikrishnan Gopalakrishnan Meena; Joanna Tannous; Alyssa A Carrell; Paul E Abraham; Richard J Giannone; Jean-Michel Ané; Nancy P Keller; Jesse L Labbé; Armin G Geiger et al."
    },
    {
        title: "Longitudinal Effects on Plant Species Involved in Agriculture and Pandemic Emergence Undergoing Changes in Abiotic Stress",
        img: "",
        type: "journal",
        journal: "Conference paper: PASC 2023",
        date: "26 June 2023",
        link: "https://doi.org/10.1145/3592979.3593402",
        contributors: "Mikaela Cashman; Verónica G. Melesse Vergara; John Lagergren; Matthew Lane; Jean Merlet; Mikaela Atkinson; Jared Streich; Christopher Bradburne; Raina Plowright; Wayne Joubert et al."
    },
    {
        title: "Genetics of varicose veins reveals polygenic architecture and genetic overlap with arterial and venous disease",
        img: "",
        type: "journal",
        journal: "Nature Cardiovascular Research",
        date: "9 January 2023",
        link: "https://doi.org/10.1038/s44161-022-00196-5",
        contributors: "Michael G. Levin; Jennifer E. Huffman; Anurag Verma; Kyle A. Sullivan; Alexis A. Rodriguez; David Kainer; Michael R. Garvin; Matthew Lane; Mikaela Cashman; J.Izaak Miller et al."
    },
    {
        title: "Antiviral Strategies Against SARS-CoV-2: A Systems Biology Approach",
        img: "",
        type: "journal",
        journal: "Methods in Molecular Biology",
        date: "2022",
        link: "https://doi.org/10.1007/978-1-0716-2111-0_19",
        contributors: "Erica T. Prates; Michael R. Garvin; Piet Jones; J. Izaak Miller; Kyle A. Sullivan; Ashley Cliff; Joao Gabriel Felipe Machado Gazolla; Manesh B. Shah; Angelica M. Walker; Matthew Lane et al."
    },
        {
        title: "Lipo-Chitooligosaccharides Induce Specialized Fungal Metabolite Profiles That Modulate Bacterial Growth",
        img: "",
        type: "journal",
        journal: "mSystems",
        date: "20 December 2022",
        link: "https://doi.org/10.1128/msystems.01052-22",
        contributors: "Tomas Rush; Joanna Tannous; Matthew J. Lane; Muralikrishnan Gopalakrishnan Meena; Alyssa A. Carrell; Jacob J. Golan; Milton T. Drott; Sylvain Cottaz; Sébastien Fort; Jean-Michel Ané et al."

    },
    {
        title: "Eyeing the patterns: Data visualization using doubly- seriated color heatmaps",
        img: "",
        type: "journal",
        journal: "Advances in Computers",
        date: "2020",
        link: "https://doi.org/10.1016/bs.adcom.2020.03.003",
        contributors: "Matthew Lane; Alberto Maiocco; Sanjiv K.Bhatia; Sharlee Climer"
    }
]


const presentations = [

    {
        title: "Uncovering Mechanistic Links in Substance Use Disorders: Integrative Multi-Omics and Supercomputing Approaches",
        img: "",
        type: "poster",
        where: "ASHG 2024",
        date: "9 November 2024",
        topic: "HPC",
        link: "https://www.ashg.org/meetings/2024meeting/"
    }, 
    {
        title: "Decoding the Omics Networks of Biomass",
        img: "",
        type: "talk",
        where: "Center For Bioenergy Innovation Annual Conference 2024",
        date: "5 June 2024",
        topic: "Multiomic Network Exploration",
        link: "https://www.ashg.org/meetings/2024meeting/"
    }, 
    {
        title: "High Performance Computing Derived Biological Multiplex Network Uncovers Distinct Pathways Underlying Opioid and Nicotine Addiction",
        img: "",
        type: "talk",
        where: "PASC 2024",
        date: "5 June 2024",
        topic: "HPC",
        link: "https://pasc24.pasc-conference.org/acm-posters-student-research-competition/"
    },
    {
        title: "High Performance Computing Derived Biological Multiplex Network Uncovers Distinct Pathways Underlying Opioid and Nicotine Addiction",
        img: "",
        type: "poster",
        where: "PASC 2024",
        date: "4 June 2024",
        topic: "HPC",
        link: "https://pasc24.pasc-conference.org/acm-posters-student-research-competition/"
    },
    {
        title: "Integrating Multi-Omics Data through Multiplex Networks",
        img: "",
        type: "poster",
        where: "NIDA Genetics 2024",
        date: "23 May 2024",
        topic: "HPC",
        link: "https://pasc24.pasc-conference.org/acm-posters-student-research-competition/"
    },
    
]

const code = [
    {
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/img/rwrtoolkit.png?raw=true",
        title: "RWRtoolkit",
        description: "Software geared towared the generation and exploration of multiplex networks.",
        type: "software",
        date: "",
        link: "https://github.com/dkainer/rwrtoolkit",
    },
];

const courseMats = [
    {
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/img/helloworld_c.png?raw=true",
        title: "Linux Systems Programming: Bash && C",
        description: "Course material for CS2700, an introduction to how to navigate linux systems, program bash scripts, and write programs engaging with the system at large in C",
        type: "courseMaterial",
        date: "June 2020",   
        meta: "bash courtesy of https://commons.wikimedia.org/wiki/File:Gnu-bash-logo.svg; C courtesy of https://commons.wikimedia.org/wiki/File:The_C_Programming_Language_logo.svg",
        link: "https://github.com/LaneMatthewJ/linuxSystemProgramming",
    },
    {
        img: "https://github.com/lanematthewj/lanematthewj.github.io/img/helloworld_c.png",
        title: "Advanced Web Programming with Javascript",
        description: "This contains the course material for CS4140. This material starts with learning advanced ES6 Javascript, and moves onto using React and Express frameworks for web developemtn.",
        type: "courseMaterial",
        date: "January 2020",
        meta: "React Courtesy of https://en.wikipedia.org/wiki/File:React_Logo_SVG.svg, Express courtesy of https://commons.wikimedia.org/wiki/File:Expressjs.png",
        link: "https://github.com/LaneMatthewJ/advanced_web_with_javascript",
    },
    {
        img: "https://github.com/lanematthewj/lanematthewj.github.io/img/helloworld_c.png",
        title: "Introduction to Web Programming: HTML, Javascript, and PHP",
        description: "This coursework contains an introduction to web development for complete beginners CS3010. This material starts out with the basics of HTML, Javascript, and PHP.",
        type: "courseMaterial",
        date: "August 2019",
        meta: "HTML: https://commons.wikimedia.org/wiki/File:HTML5_logo_and_wordmark.svg, JavaScript: https://commons.wikimedia.org/wiki/File:Unofficial_JavaScript_logo_2.svg, PHP: https://commons.wikimedia.org/wiki/File:PHP-logo.svg",
        link: "https://github.com/LaneMatthewJ/class_intro_to_web_with_php",
    },
    {
        img: "https://github.com/lanematthewj/lanematthewj.github.io/img/helloworld_c.png",
        title: "Introduction to []",
        description: "This is a repository contining a number of introductions for single day courses. These topics range from \"what is code\", to robotics, to unit testing.",
        type: "courseMaterial",
        date: "Varying",
        meta: "Python: https://commons.wikimedia.org/wiki/File:Python-logo-notext.svg, jupyter: https://commons.wikimedia.org/wiki/File:Jupyter_logo.svg, Pytest https://commons.wikimedia.org/wiki/File:Pytest_logo.svg, ",
        link: "https://github.com/LaneMatthewJ/introductions_to/tree/master.",
    },
]

const dataportfolio = [...journalsAndBooks, ...code, ...courseMats]


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