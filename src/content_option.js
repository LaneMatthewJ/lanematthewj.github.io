const logotext = "MATTLANE";
const meta = {
    title: "Matt Lane",
    description: "My name is Matt Lane. I'm a Data Scientists _ Full stack devloper,currently working at Oak Ridge National Laboratory pursuing a PhD.",
};

const introdata = {
    title: "I'm Matt Lane",
    animated: {
        zeroth: "Science hooks me.",
        first: "Coding drives me.",
        second: "Testing clicks with me.",
        third: "Teaching code lights me up."
    },
    description: "I write a lot of software for scientific analysis while I pursue my PhD in Data Science at the University of Tennessee Knoxville.",
    your_img_url: "https://pasc24.pasc-conference.org/wp-content/uploads/2024/06/U9A1410-copia-1-1024x683.jpg",
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
        stack: {
            languages: ["R", "Python", "BASH"],
            frameworks: [ "High Performance Computing (HPC)", "GPU Computing", "Docker", "Apptainer" ]  
        },
        responsibilities: [
            
        ]
    },
    {
        jobtitle: "Adjunct Faculty",
        where: "University of Missouri - St. Louis",
        date: "2017-2020",
        daytoday: "Javascript, React, Express, Mobile Programming",
        responsibilities: [

        ]
    },
    {
        jobtitle: "Software Engineer",
        where: "Bayer Crop Science",
        date: "2017-2020",
        daytoday: "Javascript, React, Express, Mobile Programming",
        responsibilities: [

        ]
    },
    {
        jobtitle: "Graduate Research Assistant",
        where: "University of Missouri",
        date: "2015-2017",
        daytoday: "C++, Combinitorics, ",
        responsibilities: [

        ]
    },
    {
        jobtitle: "Outreach Educator",
        where: "Missouri Botanical Garden",
        date: "2013-2015",
        daytoday: "Science Communication",
        responsibilities: [

        ]
    },
];

const education = [{
    degree: "Doctor of Philosophy",
    topic: "Data Science and Engineering",
    where: "University of Tennessee Knoxville",
    date: "Anticipated: Dec 2025",
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
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/src/assets/portfolioImages/network_analysis_opioid_addiction.png?raw=true",
        type: "journal",
        journal: "Biological Psychiatry",
        date: "November 2024",
        link: "https://doi.org/10.1016/j.biopsych.2024.11.013",
        contributors: "Kyle Sullivan; David Kainer; Matthew Lane; Mikaela Cashman; J. Izaak Miller; Michael R. Garvin; Alice Townsend; Bryan C. Quach; Caryn Willis; Peter Kruse et al.",
        description: "",
    },
    {
        title: "Analyses of GWAS signal using GRIN identify additional genes contributing to suicidal behavior",
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/src/assets/portfolioImages/GRIN_for_GWAS.png?raw=true",
        type: "journal",
        journal: "Communications Biology",
        date: "21 October 2024",
        link: "https://doi.org/10.1038/s42003-024-06943-7",
        contributors: "Kyle A. Sullivan; Matthew Lane; Mikaela Cashman; J. Izaak Miller; Mirko Pavicic; Angelica M. Walker; Ashley Cliff; Jonathon Romero; Xuejun Qin; Niamh Mullins et al.",
        description: "",
    },
    {
        title: "Exploring the role of plant lysin motif receptor-like kinases in regulating plant-microbe interactions in the bioenergy crop Populus",
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/src/assets/portfolioImages/plant_lysin_motif_receptor_like_kinase.png?raw=true",
        type: "journal",
        journal: "Computational and Structural Biotechnology Journal",
        date: "2023",
        link: "https://doi.org/10.1016/j.csbj.2022.12.052",
        contributors: "Kevin R. Cope; Erica T. Prates; John I. Miller; Omar N.A. Demerdash; Manesh Shah; David Kainer; Ashley Cliff; Kyle Sullivan; Mikaela Cashman; Matthew Lane et al.",
        description: "",
    },

    {
        title: "A glimpse into the fungal metabolomic abyss: Novel network analysis reveals relationships between exogenous compounds and their outputs",
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/src/assets/portfolioImages/glimpse_into_fungal_metabolome.png?raw=true",
        type: "journal",
        journal: "PNAS Nexus",
        date: "29 September 2023",
        link: "https://doi.org/10.1093/pnasnexus/pgad322",
        contributers: "Matthew J Lane; Muralikrishnan Gopalakrishnan Meena; Joanna Tannous; Alyssa A Carrell; Paul E Abraham; Richard J Giannone; Jean-Michel Ané; Nancy P Keller; Jesse L Labbé; Armin G Geiger et al.",
        description: "",
    },
    {
        title: "Longitudinal Effects on Plant Species Involved in Agriculture and Pandemic Emergence Undergoing Changes in Abiotic Stress",
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/src/assets/portfolioImages/abiotic_stress_climatype.png?raw=true",
        type: "journal",
        journal: "Conference paper: PASC 2023",
        date: "26 June 2023",
        link: "https://doi.org/10.1145/3592979.3593402",
        contributors: "Mikaela Cashman; Verónica G. Melesse Vergara; John Lagergren; Matthew Lane; Jean Merlet; Mikaela Atkinson; Jared Streich; Christopher Bradburne; Raina Plowright; Wayne Joubert et al.",
        description: "",
    },
    {
        title: "Genetics of varicose veins reveals polygenic architecture and genetic overlap with arterial and venous disease",
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/src/assets/portfolioImages/vericose_veins.png?raw=true",
        type: "journal",
        journal: "Nature Cardiovascular Research",
        date: "9 January 2023",
        link: "https://doi.org/10.1038/s44161-022-00196-5",
        contributors: "Michael G. Levin; Jennifer E. Huffman; Anurag Verma; Kyle A. Sullivan; Alexis A. Rodriguez; David Kainer; Michael R. Garvin; Matthew Lane; Mikaela Cashman; J.Izaak Miller et al.",
        description: "",
    },
    {
        title: "Antiviral Strategies Against SARS-CoV-2: A Systems Biology Approach",
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/src/assets/portfolioImages/antiviral_strategies.png?raw=true",
        type: "journal",
        journal: "Methods in Molecular Biology",
        date: "2022",
        link: "https://doi.org/10.1007/978-1-0716-2111-0_19",
        contributors: "Erica T. Prates; Michael R. Garvin; Piet Jones; J. Izaak Miller; Kyle A. Sullivan; Ashley Cliff; Joao Gabriel Felipe Machado Gazolla; Manesh B. Shah; Angelica M. Walker; Matthew Lane et al.",
        description: "",
    },
        {
        title: "Lipo-Chitooligosaccharides Induce Specialized Fungal Metabolite Profiles That Modulate Bacterial Growth",
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/src/assets/portfolioImages/lcos_with_metnet.png?raw=true",
        type: "journal",
        journal: "mSystems",
        date: "20 December 2022",
        link: "https://doi.org/10.1128/msystems.01052-22",
        contributors: "Tomas Rush; Joanna Tannous; Matthew J. Lane; Muralikrishnan Gopalakrishnan Meena; Alyssa A. Carrell; Jacob J. Golan; Milton T. Drott; Sylvain Cottaz; Sébastien Fort; Jean-Michel Ané et al.",
        description: "",

    },
    {
        title: "Eyeing the patterns: Data visualization using doubly- seriated color heatmaps",
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/src/assets/portfolioImages/heatmap_chapter.png?raw=true",
        type: "journal",
        journal: "Advances in Computers",
        date: "2020",
        link: "https://doi.org/10.1016/bs.adcom.2020.03.003",
        contributors: "Matthew Lane; Alberto Maiocco; Sanjiv K.Bhatia; Sharlee Climer",
        description: "",
    }
]


const presentations = [
    {
        title: "Uncovering Mechanistic Links in Substance Use Disorders: Integrative Multi-Omics and Supercomputing Approaches",
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/src/assets/portfolioImages/uncovering_mechanistic_links_in_suds.png?raw=true",
        type: "conference",
        conferenceType: "poster",
        where: "ASHG 2024",
        date: "9 November 2024",
        topic: "HPC",
        link: "https://www.ashg.org/meetings/2024meeting/"
    }, 
    {
        title: "Decoding the Omics Networks of Biomass",
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/src/assets/portfolioImages/decoding_omics_of_biomass.png?raw=true",
        type: "conference",
        conferenceType: "talk",
        where: "Center For Bioenergy Innovation Annual Conference 2024",
        date: "16 July 2024",
        topic: "Multiomic Network Exploration",
        link: "https://cbi.ornl.gov/cbi-annual-meeting-features-focus-on-early-career-scientists/"
    }, 
    {
        title: "High Performance Computing Derived Biological Multiplex Network Uncovers Distinct Pathways Underlying Opioid and Nicotine Addiction",
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/src/assets/portfolioImages/hpc_derived_multiplexes_talk.png?raw=true",
        type: "conference",
        conferenceType: "talk",
        where: "PASC 2024",
        date: "5 June 2024",
        topic: "HPC",
        link: "https://pasc24.pasc-conference.org/acm-posters-student-research-competition/"
    },
    {
        title: "High Performance Computing Derived Biological Multiplex Network Uncovers Distinct Pathways Underlying Opioid and Nicotine Addiction",
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/src/assets/portfolioImages/hpc_derived_multiplexes.png?raw=true",
        type: "conference",
        conferenceType: "poster",
        where: "PASC 2024",
        date: "4 June 2024",
        topic: "HPC",
        link: "https://pasc24.pasc-conference.org/acm-posters-student-research-competition/"
    },
    {
        title: "Integrating Multi-Omics Data through Multiplex Networks",
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/src/assets/portfolioImages/integrating_multiomics_through_multiplexes.png?raw=true",
        type: "conference",
        conferenceType: "poster",
        where: "NIDA Genetics 2024",
        date: "23 May 2024",
        topic: "HPC",
        link: "https://pasc24.pasc-conference.org/acm-posters-student-research-competition/"
    },
    
]

const code = [
    {
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/src/assets/portfolioImages/rwr_toolkit.png?raw=true",
        title: "RWRtoolkit",
        description: "Software geared towared the generation and exploration of multiplex networks.",
        type: "software",
        language: "R",
        topic: "Random Walk Restart, Multiplex Networks",
        date: "3 March 2025",
        link: "https://github.com/dkainer/rwrtoolkit",
    },
];

const courseMats = [
    {
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/src/assets/portfolioImages/linux_system_programming.png?raw=true",
        title: "Linux Systems Programming: Bash && C",
        description: "Course material for CS2700, an introduction to how to navigate linux systems, program bash scripts, and write programs engaging with the system at large in C",
        audience: "Computer Science Students",
        level: "University",
        topic: "Linux,C++",
        type: "courseMaterial",
        date: "June 2020",   
        meta: "bash courtesy of https://commons.wikimedia.org/wiki/File:Gnu-bash-logo.svg; C courtesy of https://commons.wikimedia.org/wiki/File:The_C_Programming_Language_logo.svg",
        link: "https://github.com/LaneMatthewJ/linuxSystemProgramming",
    },
    {
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/src/assets/portfolioImages/advanced_web_w_js.png?raw=true",
        title: "Advanced Web Programming with Javascript",
        description: "This contains the course material for CS4140. This material starts with learning advanced ES6 Javascript, and moves onto using React and Express frameworks for web developemtn.",
        audience: "Computer Science Students",
        level: "University",
        topic: "React,Express,NodeJS",
        type: "courseMaterial",
        date: "January 2020",
        meta: "React Courtesy of https://en.wikipedia.org/wiki/File:React_Logo_SVG.svg, Express courtesy of https://commons.wikimedia.org/wiki/File:Expressjs.png",
        link: "https://github.com/LaneMatthewJ/advanced_web_with_javascript",
    },
    {
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/src/assets/portfolioImages/intro_to_web_programing.png?raw=true",
        title: "Introduction to Web Programming: HTML, Javascript, and PHP",
        description: "This coursework contains an introduction to web development for complete beginners CS3010. This material starts out with the basics of HTML, Javascript, and PHP.",
        audience: "Computer Science Students",
        level: "University",
        topic: "HTML,CSS,JS,PHP",
        type: "courseMaterial",
        date: "August 2019",
        meta: "HTML: https://commons.wikimedia.org/wiki/File:HTML5_logo_and_wordmark.svg, JavaScript: https://commons.wikimedia.org/wiki/File:Unofficial_JavaScript_logo_2.svg, PHP: https://commons.wikimedia.org/wiki/File:PHP-logo.svg",
        link: "https://github.com/LaneMatthewJ/class_intro_to_web_with_php",
    },
    {
        img: "https://github.com/LaneMatthewJ/lanematthewj.github.io/blob/main/src/assets/portfolioImages/introductions_to.png?raw=true",
        title: "Introduction to []",
        description: "This is a repository contining a number of introductions for single day courses. These topics range from \"what is code\", to robotics, to unit testing.",
        audience: "Public",
        level: "Introductory",
        topic: "Python,HTML,JS",
        type: "courseMaterial",
        date: "2019",
        meta: "Python: https://commons.wikimedia.org/wiki/File:Python-logo-notext.svg, jupyter: https://commons.wikimedia.org/wiki/File:Jupyter_logo.svg, Pytest https://commons.wikimedia.org/wiki/File:Pytest_logo.svg, ",
        link: "https://github.com/LaneMatthewJ/introductions_to/tree/master.",
    },
]

const misc = [
    {
        title: "metnet-direct-auxiliary: Commercial copyright submission sponsored by ORNL, UT - Battelle, Certificate of U.S. Copyright Registration, Copyright Number: 90000309, Registration number: TXU002420465",
        type: "misc",
        authors: "M. Gopalakrishnan Meena, M.J. Lane, A.G. Geiger, and D.A. Jacobson",
        date: "2024",
        link: "https://publicrecords.copyright.gov/detailed-record/36264513."
    }, 
    {
        title: "ORNL News highlight about paper plant-microbe interaction",
        type: "misc",
        authors: "",
        date: "2024",
        link: "https://www.ornl.gov/news/fungal-bouncers-patrol-plant-microbe-relationship",
    },
    {
        title: "Using bipartite networks to determine interactions between analytes and chemical treatments: Invention Disclosure U.S. Nonprovisional Application No. 18/243,320, UTB Ref. 4963.1, WNJ Ref. 138974.209559-US",
        type: "misc",
        authors: "M.Gopalakrishnan Meena, M.J.Lane, J.Tannous, A.G.Geiger, D.A.Jacobson, T.A.Rush",
        date: "2021",
        link: "https://patentcenter.uspto.gov/applications/18243320",
    }

]

const dataportfolio = [...journalsAndBooks, ...code, ...courseMats, ...presentations, ...misc]

const socialprofils = {
    github: "https://github.com/lanEmatthewj",
    bluesky: "https://bsky.app/profile/friendshipships.bsky.social",
    linkedin: "https://linkedin.com/in/lanematthewj",
    orcid: "https://orcid.org/0000-0002-7750-6822",
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