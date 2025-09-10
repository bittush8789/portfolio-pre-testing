import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandMedium, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Bittu Sharma",
    stack: ["DevOps Engineer", "MLOps Engineer", "AI Engineer"],
    bio: "Hello, I’m Bittu Sharma, a DevOps & MLOps Engineer with a deep passion for emerging technologies. I’m eager to leverage my expertise and skills to assist the organization in delivering top-quality software products.!"
}



const ProjectInfo = [
    {
        title: "DevSecOps-CI-CD-Pipeline",
        desc: "This project is a Java-based full-stack blogging application. I implemented the project and set up an EKS cluster using Infrastructure as Code (IaC) tools like Terraform. I also configured Jenkins, SonarQube, and Nexus using Ansible playbooks.I utilized Git for version control and stored my source code on GitHub. For packaging the application, I used the Maven build tool. Vulnerability scanning was performed with SonarQube and Trivy, and Nexus was used to store artifacts.Docker was employed to build the application's Docker image, which was then pushed to Docker Hub. Jenkins was used to create a pipeline using Groovy language. The Kubernetes (K8s) cluster, created on AWS in the form of EKS using Terraform, facilitated the deployment.Additionally, I set up monitoring for the application, covering both system-level metrics and website-level metrics.",
        image: "DevSecOps.png",
        // live: true,
        technologies: ["Java", "AWS", "Jenkins", "SonarQube", "Trivy","Nexus","Terraform","Docker","Kubernetes","Prometheus","Grafana"],
        link: "https://bittublog.hashnode.dev/production-ready-devsecops-cicd-pipeline",
        github: "https://github.com/bittush8789/Production-Ready-DevSecOps-CI-CD-Pipeline"
    },
    {
        title: "K8s-Volting-app",
        desc: "Led the deployment of scalable applications on AWS EC2 using Kubernetes and Argo CD for streamlined management and continuous integration. Orchestrated deployments via Kubernetes dashboard, ensuring efficient resource utilization and seamless scaling.",
        image: "Kubernetes.png",
        live: false,
        technologies: ["AWS", "Docker", "Kubernetes", "ArgoCD", "Promethous", "Grafana"],
        link: "https://github.com/bittush8789/K8s-Volting-app",
        github: "https://github.com/bittush8789/K8s-Volting-app"
    },

    {
        title: "Terraform Implementation",
        desc: "I developed organized and reusable resource management using Terraform modules. By streamlining deployments with the terraform apply command, I incorporated EC2 instances, S3 buckets, and DynamoDB tables within the modules to address diverse infrastructure needs. Utilizing variable inputs allowed for adaptability and easy customization across different environments, including development, QA, and production. Additionally, I ensured efficient resource cleanup through secure tear-downs with the terraform destroy command.",
        image: "Terraform.png",
        technologies: ["AWS", "Terraform"],
        link: "https://github.com/bittush8789/Terraform_Mega_Project",
        github: "https://github.com/bittush8789/Terraform_Mega_Project"
    },  
    

]


const SkillInfo = [
    {
        title: "DevOps",
        skills: ["Docker", "kubernetes","Jenkins", "GitLab", "CircleCI", "Ansible", "Terraform", "AWS", "Linux","Prometheus","Grafana"
        ]
    },
    {
        title: "MLOps",
        skills: ["AWS Sagemaker", "kubeflow", "MLflow", "MySQL", "MongoDB", "Airflow", "DVC","LangChain"]
    },
    {
        title: "Backend Development",
        skills: ["Python", "Java", "Django", "Flask", "FastAPI"]
    },
    {
        title: "Tools",
        skills: ["Git","Jira", "Postman", "ChatGPT", "Copilot","Gemini"]
    }
]
const socialLinks = [
    { link: "https://github.com/bittush8789", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/bittu-kumar-54ab13254/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/bittush8789", icon: IconBrandInstagram }, 
    { link: "https://medium.com/@bittush9534", icon: IconBrandMedium },
    { link: "https://bittublog.hashnode.dev/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Associate Analyst",
        company: "EXL Service.com india Pvt ltd",
        date: "April 2024 - Present",
        desc: "As an Associate Analyst, I collect and clean data to ensure accuracy, analyze it using tools like Excel, Python to find useful insights, and create reports and visualizations to present my findings. I collaborate with team members and clients to support various projects, develop models for forecasting, and implement data-driven solutions. I also conduct research on industry trends, document my analysis processes, and continuously improve my skills through training and workshops.",
        skills: ["Python", "Docker", "Kubernetes", "DevOps", "Linux", "AWS", "Troubleshooting"]
    },
    {
        role: "Machine Learning intern",
        company: "InternsElite",
        date: "Sep 2023 - Nov 2023",
        desc: " As a machine learning intern, I am developing and training machine learning models using various techniques, clean and preprocess datasets, implement feature engineering to enhance model performance, and collaborate with senior data scientists to design experiments. Additionally, I'll optimize code for efficiency, participate in deploying models into production environments, and document the entire process. I’ll also explore and experiment with new machine learning techniques to tackle complex problems.",
        skills: ["Python", "Tenserflow", "Keras", "PyTorch", "AWS", "Git","SQL","MongoDB"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "linux",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "jenkins",
    "ansible",
    "terraform",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "circleci",
    "githubaction",
    "airflow",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
    "k8s",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };