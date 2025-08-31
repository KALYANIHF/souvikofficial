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
    path: "mycertificates/Devops.pdf",
    icon: <VscAzureDevops />,
  },
  {
    _id: 2,
    certificate: "Linux",
    path: "mycertificates/Linux-1.pdf",
    icon: <FaLinux />,
  },
  {
    _id: 3,
    certificate: "ReactJs",
    path: "mycertificates/react-certificate.pdf",
    icon: <RiReactjsFill />,
  },
  {
    _id: 4,
    certificate: "Git",
    path: "mycertificates/git-train-exam.pdf",
    icon: <FaGitAlt />,
  },
  {
    _id: 5,
    certificate: "NodeJs",
    path: "mycertificates/NodeJs.pdf",
    icon: <FaNodeJs />,
  },
  {
    _id: 6,
    certificate: "Javascript(ES6)",
    path: "mycertificates/ModernJs.pdf",
    icon: <DiJavascript />,
  },
  {
    _id: 7,
    certificate: "Docker",
    path: "mycertificates/Dev-Ops-Linux/Devops.pdf",
    icon: <FaDocker />,
  },
  {
    _id: 8,
    certificate: "Kubernetes(K8s)",
    path: "mycertificates/Devops.pdf",
    icon: <SiKubernetes />,
  },
  {
    _id: 9,
    certificate: "PHP MVC",
    path: "mycertificates/PHP_MVC.pdf",
    icon: <FaLinux />,
  },
  {
    _id: 10,
    certificate: "NextJs",
    path: "mycertificates/NodeJs.pdf",
    icon: <SiNextdotjs />,
  },
];

export default certification;
