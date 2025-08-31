import { RiPhpFill, RiReactjsFill } from "react-icons/ri";
import { FaDocker, FaLinux, FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { SiKubernetes, SiNextdotjs } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

const certification = [
  {
    _id: 1,
    certificate: "Devops",
    path: "../assets/mycertificates/Dev-Ops-Linux/Devops.pdf",
    icon: <VscAzureDevops />,
  },
  {
    _id: 2,
    certificate: "Linux",
    path: "../assets/mycertificates/Dev-Ops-Linux/Linux-1.pdf",
    icon: <FaLinux />,
  },
  {
    _id: 3,
    certificate: "ReactJs",
    path: "../assets/mycertificates/React-Certificate/react-certificate.pdf",
    icon: <RiReactjsFill />,
  },
  {
    _id: 4,
    certificate: "Git",
    path: "../assets/mycertificates/Git/git-train-exam.pdf",
    icon: <FaGitAlt />,
  },
  {
    _id: 5,
    certificate: "NodeJs",
    path: "../assets/mycertificates/NodeJs/NodeJs.pdf",
    icon: <FaNodeJs />,
  },
  {
    _id: 6,
    certificate: "Javascript(ES6)",
    path: "../assets/mycertificates/modernJs/ModernJs.pdf",
    icon: <DiJavascript />,
  },
  {
    _id: 7,
    certificate: "Docker",
    path: "../assets/mycertificates/Dev-Ops-Linux/Devops.pdf",
    icon: <FaDocker />,
  },
  {
    _id: 8,
    certificate: "Kubernetes(K8s)",
    path: "../assets/mycertificates/Dev-Ops-Linux/Devops.pdf",
    icon: <SiKubernetes />,
  },
  {
    _id: 9,
    certificate: "PHP MVC",
    path: "../assets/mycertificates/PHP/PHP_MVC.pdf",
    icon: <FaLinux />,
  },
  {
    _id: 10,
    certificate: "NextJs",
    path: "../assets/mycertificates/NodeJs/NodeJs.pdf",
    icon: <SiNextdotjs />,
  },
];

export default certification;
