import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  UTD,
  ASU,
  NASA,
  FMC,
  python,
  sql,
  java,
  numpy,
  pandas,
  pytorch,
  django,
  sl,
  mb,
  slit,
  epl,
  tmdb,
  frs,
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
    title: "Machine Learning Engineer",
    icon: web,
  },
  {
    title: "Computer Vision Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "AI Research Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Numpy",
    icon: numpy,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "SL",
    icon: sl,
  },
  {
    name: "MB",
    icon: mb,
  },
  {
    name: "SLIT",
    icon: slit,
  },
];

const experiences = [
  {
    title: "Machine Learning Intern",
    company_name: "StaRLing Lab @ University of Texas, Dallas",
    icon: UTD,
    iconBg: "#383E56",
    date: "April 2023 - July 2023",
    points: [
      "Built an unsupervised ML model using K-Means and GMM to classify 160,000+ TCP flows, improving F1-score by 17% through hyperparameter tuning and class imbalance handling.",
      "Applied PCA and t-SNE for dimensionality reduction and cluster visualization, boosting anomaly detection precision and reducing false positives by 20%.",
      "Engineered automated data pipelines to parse and preprocess .netflow files, extracting key traffic features (e.g., packet count, byte rate, protocol) for model training and evaluation.",
    ],
  },
  {
    title: "Robotics/Machine Learning Intern",
    company_name: "Interactive Robotics Lab @ Arizona State University",
    icon: ASU,
    iconBg: "#E6DEDD",
    date: "March 2024 - March 2025",
    points: [
      "Trained neural networks in PyTorch on MNIST and FashionMNIST datasets, achieving 96%+ test accuracy and reducing model size by 30% through architecture tuning and batch normalization for faster real-time inference.",
      "Developed CNNs with Conv2D and ReLU layers to classify 28×28 grayscale images with >92% accuracy; contributed to real-time digit recognition for wearable robotics systems, improving processing speed by 40%",
      "Implemented custom PyTorch Dataset and DataLoader classes to efficiently preprocess and batch image data, enabling scalable training and reducing epoch runtime by 25%.",
    ],
  },
  {
    title: "Thermal Engineer and Mission Assurance Specialist",
    company_name: "NASA L’Space",
    icon: NASA,
    iconBg: "#383E56",
    date: "September 2024 - December 2024",
    points: [
      "Contributed to the design of a lunar habitat concept using lava tubes, drafting 3+ system architecture documents and improving thermal stability estimates by 25% through insulation modeling.",
      "Developed 5+ safety and compliance reports for thermal control systems, reducing projected failure risk by 30% under lunar surface conditions.",
      "Collaborated with interdisciplinary teams to align thermal system designs with NASA safety standards, ensuring integration across structural, environmental, and mission assurance subsystems.",
    ],
  },
  {
    title: "Machine Learning Analytics Intern",
    company_name: "Fresenius Medical Care",
    icon: FMC,
    iconBg: "#E6DEDD",
    date: "May 2025 - August 2025",
    points: [
      "Supported development of ML models to improve 90-day Home Hemodialysis (HD) patient retention, contributing to a projected 15–20% reduction in early drop-offs through risk score modeling.",
      "Engineered reusable data pipelines and structured documentation to standardize preprocessing, reducing feature engineering time by 40% and accelerating model development across 3+ predictive analytics initiatives.",
      "Helped design and build a data catalog from scratch to organize critical healthcare features across patient cohorts, streamlining data accessibility for analytics, modeling, and cross-team collaboration.",
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

const projects = [
  {
    name: "English Premier League Predictor",
    description:
      "Machine learning model that predicts English Premier League match outcomes using historical team performance data, web scraping, and a Random Forest Classifier—enabling match result forecasting.",
    tags: [
      { name: "BeautifulSoup", color: "blue-text-gradient" },
      { name: "Pandas", color: "green-text-gradient" },
      { name: "Scikit-Learn", color: "pink-text-gradient" },
    ],
    image: epl, // make sure to import epl.png in your assets
    source_code_link: "https://github.com/Raghav2128/English-Premier-League-Predictor",
  },
  {
    name: "Face Recognition Attendance System",
    description:
      "Real-time face recognition system that logs attendance using webcam input, facial encoding, and automated timestamping—built with OpenCV and face_recognition to ensure fast, accurate identity verification.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Face_Recognition", color: "green-text-gradient" },
      { name: "NumPy", color: "pink-text-gradient" },
    ],
    image: frs, // make sure to import tmdb.png in your assets
    source_code_link: "https://github.com/Raghav2128/Face-Recognition-Attendance",
  },
  {
    name: "Movie Recommender System",
    description:
      "Content-based movie recommendation app that suggests similar films using cosine similarity and metadata, featuring a Streamlit UI with poster retrieval powered by the TMDb API.",
    tags: [
      { name: "Streamlit", color: "blue-text-gradient" },
      { name: "Pandas", color: "green-text-gradient" },
      { name: "Scikit-Learn", color: "pink-text-gradient" },
    ],
    image: tmdb, // make sure to import tmdb.png in your assets
    source_code_link: "https://github.com/Raghav2128/Movie-Recommender-System",
  },
];

export { services, technologies, experiences, testimonials, projects };
