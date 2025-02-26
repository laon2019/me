import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "조규범",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "안녕하세요, 창의적인 프론트엔드 개발자 조규범입니다.",
  summary:
    "코로나로 인해 **제주도**에서 **일자리가 부족**할 때, 저는 **jeju_jobbest 팀**을 만들어 **청년들**을 지원하고 **SNS**로 소통했습니다. 더 많은 청년과 연결하기 위해 **사이트 개설**을 고민하며 **프로그래밍의 필요성**을 깨닫고 **개발자**의 꿈을 키웠습니다. **군 복무** 중 **사이버대학교 컴퓨터공학과**에 진학한 후, 전역 후 **서울**로 올라와 **개발자**로서의 **방향성**을 잡고 **프로그래밍 실력**을 키워가고 있습니다.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js", 
    "Typescript",
    "Node.js",
    "Zustand",
    "Recoil",
    "React Query",
    "Storybook",
    "Chakra UI",
    "Styled Components",
    "Vercel",
    "Netlify",
    "AWS",
    "Git",
    "Redux",
    "Tailwind CSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/laon2019",
        icon: Icons.github,

        navbar: true,
      },
      Velog: {
        name: "Velog",
        url: "https://velog.io/@laon2019/posts",
        icon: Icons.velog,

        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@laon5987",
        icon: Icons.medium,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/%EA%B7%9C%EB%B2%94-%EC%A1%B0-799295311/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:laon5987@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "업사이트",
      href: "https://www.upsight.co.kr/",
      badges: ["인턴"],
      location: "Remote",
      title: "프론트엔드 개발자",
      logoUrl: "/upsight.png",
      start: "2024.08",
      end: "2024.11",
      description:
        `
저는 **코드 최적화**를 통해 기존 **700줄**의 코드를 **400줄**로 줄이며 **유지보수성**을 향상시켰습니다. 또한 프로젝트 요구사항 문서(PRD)를 작성하여 팀 간의 **의사소통 시간**을 **30% 단축**시켰습니다. **유저 다이어그램**과 **흐름도**를 설계하여 **작업 속도**를 **20% 향상**시키기도 했습니다.

**경쟁사 분석**을 통해 **3주** 동안 **12개 경쟁사 웹사이트**를 분석하고, **4개의 사용자 페르소나**와 **7가지 주요 기능**을 도출하여 **고객의 니즈**를 반영했습니다. 추가적으로, **네이버맵 API**와 **구글맵 API**를 연동하여 **지도 기능**을 구현하였고, **문서 관리 페이지**와 **도면 관리 페이지**를 **CRUD** 방식으로 개발하여 사용자의 **편의성**을 높였습니다.
`,
    },
    {
      company: "업사이트",
      href: "https://www.upsight.co.kr/",
      badges: ["정규직"],
      location: "Remote",
      title: "프론트엔드 개발자",
      logoUrl: "/upsight.png",
      start: "2024.12",
      end: "",
      description:
        `
캐싱을 통해 서버 부하를 감소시켜 요청 수를 줄이고 클라우드 비용을 **50% 절감**했습니다. 또한, 백오피스 기획 및 개발을 통해 사용자 니즈를 반영한 **효율적인 관리 시스템**을 설계하고 개발하였습니다. 더불어, 팀원들과의 기술 공유를 위해 2주마다 **기술 발표**를 주도적으로 기획 및 실행하였고, 발표 내용을 바탕으로 **기술 블로그** 작성을 정례화하여 지식을 체계적으로 공유하고 있습니다.
`  },
  ],
  education: [
    {
      school: "한양사이버대학교",
      href: "https://www.hycu.ac.kr/user/index.do",
      degree: "컴퓨터공학과",
      logoUrl: "/hycu.png",
      start: "2021.03",
      end: "2025.08",
    },
    {
      school: "한국정보교육원",
      href: "https://www.keduit.com/",
      degree: "자바(JAVA)기반 클라우드 융합 플랫폼 개발자 양성 과정 이수",
      logoUrl: "/keduit.jpg",
      start: "2022.09",
      end: "2023.03",
    },
    {
      school: "제주고등학교",
      href: "https://school.jje.go.kr/jeju/main.do",
      degree: "졸업",
      logoUrl: "/jeju.png",
      start: "2015.03",
      end: "2018.01",
    },
  ],
  projects: [
    {
      title: "엔피맵+",
      href: "https://nfimap-plus.co.kr",
      dates: "2024.11 - ",
      active: true,
      description:
        "엔피맵+는 엔피아들을 위한 다양한 콘텐츠를 제공하는 플랫폼입니다. 기획자와 디자이너와의 협업을 통해 이틀 만에 조회수 2,000건을 달성했으며, X(구 트위터)에서 게시물 조회수 4만 건 이상을 기록했습니다.",
      technologies: [
        "React",
        "Typescript",
        "Chakra UI",
        "KAKAO API"
      ],
      links: [
        {
          type: "엔피맵+",
          href: "https://nfimap-plus.co.kr",
        },
        {
          type: "노션",
          href: "https://www.notion.so/N-Fimap-1229015ef423804bb577d58c0fc801d9",
        },
        {
          type: "X",
          href: "https://x.com/nfimap",
        },
      ],
      image: "/nfimap+.gif",
    },
    {
      title: "엔피맵",
      href: "https://nfimap.co.kr",
      dates: "2024.09 - ",
      active: true,
      description:
        "엔피맵(N.FIMAP)은 N.Flying과 관련된 콘서트 및 이벤트 정보를 제공하는 플랫폼입니다. 누적 사용자 10,000명 이상을 기록했으며, 하루 평균 방문자 수는 50명 이상을 달성했습니다.",
      technologies: [
        "React",
        "Typescript",
        "Chakra UI",
        "Naver API",
        "SPOTIFY API",
      ],
      links: [
        {
          type: "엔피맵",
          href: "https://nfimap.co.kr",
        },
        {
          type: "노션",
          href: "https://www.notion.so/N-Fimap-1229015ef423804bb577d58c0fc801d9",
        },
        {
          type: "X",
          href: "https://x.com/nfimap",
        },
      ],
      image: "/nfimap.gif",
    },
    {
      title: "아트씨리얼",
      href: "",
      dates: "2024.01 - 2024.05",
      active: true,
      description:
        "아트씨리얼은 예술가들을 위한 플랫폼 프로젝트입니다. 9년 차 프론트엔드 개발자와 1년 차 백엔드 개발자와 협업하여 진행했으며, 프로젝트를 통해 다양한 기술을 적용하고 협업 과정을 깊이 이해하는 데 큰 도움이 되었습니다. 특히, 문제 해결 경험을 통해 많은 성장을 이루었습니다.",
      technologies: [
        "React.js",
        "Typescript",
        "React-Query",
      ],
      links: [
        {
          type: "깃허브",
          href: "https://github.com/Art-SeeReal/FE_Repo",
        },
      ],
      image: "/artseereal.gif",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
