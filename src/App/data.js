import linkedin from "./images/linkedin-logo.png";
import github from "./images/github-logo.png";
const data = {
  en: {
    header: {
      name: "Jovaras Leonavicius",
      title: "Front-end Developer",
    },
    links: {
      title: "Links",
      items: [
        {
          img: linkedin,
          text: "Jovaras Leonavicius",
          url: "https://www.linkedin.com/in/jovaras-leonavi%C4%8Dius-2a5920227",
          alt: "linkedin logo",
        },
        {
          img: github,
          text: "JovarasLeo",
          url: "https://github.com/JovarasLeo",
          alt: "github logo",
        },
      ],
    },
    about: {
      title: "About me",
      body: "After trying out medical science, business management, and sales I finally found my passion in programming. More precisely, front-end development, even though programming (or anything computer-related) is nothing new to me as I have always loved that field. In mid-2021, I finally made up my mind to enroll in front-end studies and since then I have been focusing on front-end development projects. These projects feel more like a hobby than a job to me and I am happy to spend countless hours working on them while also improving myself.",
    },
    education: {
      title: "Education",
      schools: [
        {
          name: "CodeAcademy",
          period: "2021 - 2022 (440 hours)",
          degree: "Front-end development",
        },
        {
          name: "Vilnius University of Applied Sciences (VIKO)",
          period: "2016 - 2019",
          degree: "Bachelor's degree in Biomedicine",
        },
        {
          name: "Primary and Secondary education",
          period: "2003 - 2015",
          degree: "High school degree",
        },
      ],
    },
    personalSkills: {
      title: "Personal skills",
      pills: [
        { skill: "Communication" },
        { skill: "Problem solving" },
        { skill: "Critical thinking" },
        { skill: "Analytical thinking" },
        { skill: "Creativity" },
      ],
    },
    technicalSkills: {
      title: "Technical skills",
      pills: [
        { skill: "CSS" },
        { skill: "HTML" },
        { skill: "Javascript" },
        { skill: "Node.js" },
        { skill: "React.js" },
        { skill: "Next.js framework" },
        { skill: "CMS ( e.g. Sanity.io )" },
      ],
    },
    job: {
      title: "Experience",
      experience: [
        {
          company: "A.Leonavi??ien??s company",
          title: "Manager",
          period: "2020 - present",
          achievements: [
            "Took initiative to implement a digital workflow: keeping track of the goods, orders, prices which overall increases efficiency and accuracy.",
            "Upgraded the IT infrastructure of the company. Setting up new computers for accounting and digital systems for the rest of the team.",
          ],
          body: "I have always been involved in retail trade family business. In late 2020 I was employed and joined the team to help overcome multiple challenges caused by the pandemic.",
        },

        {
          company: "VPC",
          title: "Clinical laboratory practitioner",
          period: "2018-2019",
          achievements: [
            "Carried out research for my Bachelor's Thesis on upgrading laboratory's workflow to increase efficiency and accuracy of testing.",
            "Successfully integrated into personnel and became a valuable member of the team.",
          ],
          body: "Worked as a practitioner in a national pathology laboratory. Became a trustworthy and valuable member of the team. Did multiple perioperative pathology tests. Spent hours learning new techniques to evaluate and prepare pathology samples for later trials.",
        },
        {
          company: "Centro Poliklinika",
          title: "Clinical laboratory practitioner",
          period: "2017-2018",
          achievements: [
            "Learned to do a variety of medical tests.",
            "Become acquainted with the laboratory's workflow and technologies used for medical testing.",
          ],
          body: "Worked as a practitioner in a general clinical trials laboratory for half a year. Spent most of the time communicating with personnel and patients. Managed to apply all my theoretical knowledge into practice.",
        },
      ],
    },
    contacts: [
      {
        title: "Contacts",
        content: [
          { href: "tel: +37065786824", text: "+37065786824" },
          {
            href: "mailto: jovarasleonavicius@gmail.com",
            text: "jovarasleonavicius@gmail.com",
          },
        ],
      },
      {
        title: "Social Media",
        content: [
          {
            href: "https://www.linkedin.com/in/jovaras-leonavi??ius-2a5920227",
            text: "Linkedin/jovaras-leonavi??ius",
          },
          {
            href: "https://github.com/Jovarasleo",
            text: "Github/Jovarasleo",
          },
        ],
      },
    ],
  },
  lt: {
    header: {
      name: "Jovaras Leonavi??ius",
      title: "???Front-end??? Programuotojas",
    },
    links: {
      title: "Nuorodos",
      items: [
        {
          img: linkedin,
          text: "Jovaras Leonavi??ius",
          url: "https://www.linkedin.com/in/jovaras-leonavi%C4%8Dius-2a5920227",
          alt: "linkedin logotipas",
        },
        {
          img: github,
          text: "JovarasLeo",
          url: "https://github.com/JovarasLeo",
          alt: "github logotipas",
        },
      ],
    },
    about: {
      title: "Apie mane",
      body: "??gij??s patirties sveikatos prie??i??ros moksluose, verslo valdyme ir prekyboje galiausiai atradau save IT srityje. Nors programavimu ir viskuo, kas susij?? su kompiuteriais, domiuosi vis?? gyvenim??, svetaini?? k??rimas bei jam naudojamos technologijos man padar?? ??sp??d?? ir tai pasirod?? tinkama sritis savirealizacijai. B??tent tod??l 2021 m. vasar?? galiausiai nusprend??iau ??stoti ?? ???Front-end??? studijas ???Codeacademy??? ir nuo tada did??i??j?? savo laiko dal?? praleidau mokydamasis ir darydamas ??vairius projektus. ???Front-end??? aplikacij?? k??rimas man labiau primena hob?? nei darb??, kuriam mielai skiriu vis?? savo laisv?? laik?? tokiu b??du tobulindamas savo ??g??d??ius.",
    },
    education: {
      title: "I??silavinimas",
      schools: [
        {
          name: "CodeAcademy",
          period: "2021 - 2022 (440 val.)",
          degree: "???Front-end??? (vartotojo s??sajos) programavimas",
        },
        {
          name: "Vilniaus kolegija",
          period: "2016 - 2019",
          degree: "Biomedicinos profesinio bakalauro laipsnis",
        },
        { name: "Vidurinis i??silavinimas", period: "2003 - 2015" },
      ],
    },
    personalSkills: {
      title: "Asmeniniai ??g??d??iai",
      pills: [
        { skill: "Komunikabilumas" },
        { skill: "Problem?? sprendimas" },
        { skill: "Kritinis m??stymas" },
        { skill: "Analitinis m??stymas" },
        { skill: "K??rybi??kumas" },
      ],
    },
    technicalSkills: {
      title: "Techniniai ??g??d??iai",
      pills: [
        { skill: "CSS" },
        { skill: "HTML" },
        { skill: "Javascript" },
        { skill: "Node.js" },
        { skill: "React.js" },
        { skill: "Next.js karkasas" },
        { skill: "TVS ( pvz. Sanity.io )" },
      ],
    },
    job: {
      title: "Patirtis",
      experience: [
        {
          company: "A.Leonavi??ien??s ??mon??",
          title: "Vadybininkas",
          period: "2020 - dabar",
          achievements: [
            "??miausi iniciatyvos ??mon??s skaitmenizavimui: automatizuotas preki??, u??sakym??, kain?? sekimas, kuris padidina darbo efektyvum?? bei tikslum??.",
            "Atnaujinau ??mon??s IT infrastrukt??r??. ??diegiau naujus kompiuterius, skirtus buhalterijai, bei skaitmenines sistemas likusiam personalui.",
          ],
          body: "Visada buvau ??sitrauk??s ?? ma??menin??s prekybos ??eimos versl??, 2020 m. pabaigoje prisijungiau prie komandos, kad gal????iau pad??ti ??veikti daugyb?? pandemijos sukelt?? sunkum??.",
        },
        {
          company: "Valstybinis patologijos centras (VPC)",
          title: "Klinikin??s laboratorijos praktikantas",
          period: "2018-2019",
          achievements: [
            "Ra??ydamas baigiam??j?? darb?? atlikau vidin?? laboratorijos veiklos tyrim?? ir ??vertinau, kaip joje b??t?? galima patobulinti bei modernizuoti darbo eig??.",
            "S??kmingai integravausi ?? personal?? ir tapau komandos dalimi.",
          ],
          body: "Tapau patikimu ir naudingu komandos nariu. Atlikau daugyb?? tarpoperacini?? ir interoperacini?? tyrim??. I??mokau nauj?? technik??, padedan??i?? paruo??ti patologin?? med??iag?? tolimesniems tyrimams.",
        },
        {
          company: "Centro poliklinika",
          title: "Klinikin??s laboratorijos praktikantas",
          period: "2017-2018",
          achievements: [
            "I??mokau atlikti daugyb?? medicinini?? tyrim??.",
            "Susipa??inau su laboratorijos darbo eiga ir technologijomis, naudojamomis atlikti medicininius testus.",
          ],
          body: "Pus?? met?? atlikin??jau laboranto praktik?? klinikini?? tyrim?? laboratorijoje Vilniuje - centro poliklinikoje. Tur??jau puiki?? mokom??j?? patirt?? bendraujant su pacientais ir galimyb?? pritaikyti visas ??inias praktikoje kurias ??gyjau studij?? metu.",
        },
      ],
    },
    contacts: [
      {
        title: "Kontaktai",
        content: [
          { href: "tel:+37065786824", text: "+37065786824", target: "_self" },
          {
            href: "mailto: jovarasleonavicius@gmail.com",
            text: "jovarasleonavicius@gmail.com",
            target: "_self",
          },
        ],
      },
      {
        title: "Medijos",
        content: [
          {
            href: "https://www.linkedin.com/in/jovaras-leonavi??ius-2a5920227",
            text: "Linkedin/jovaras-leonavi??ius",
            target: "_blank",
          },
          {
            href: "https://github.com/Jovarasleo",
            text: "Github/Jovarasleo",
            target: "_blank",
          },
        ],
      },
    ],
  },
};
export default data;
