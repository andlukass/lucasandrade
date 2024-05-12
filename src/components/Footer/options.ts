import { SiGithub, SiGmail, SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import { IconType } from 'react-icons';


interface Option {
    icon: IconType;
    text: string;
    link: string
}

const options : Option[] = [
    {
        icon: SiInstagram,
        text: "instagram",
        link: "https://www.instagram.com/andlukas",
    },
    {
        icon: SiLinkedin,
        text: "linkedin",
        link: "https://www.linkedin.com/in/andlukas/",
    },
    {
        icon: SiWhatsapp,
        text: "whatsapp",
        link: "https://wa.me/+351920286831/",
    },
    {
        icon: SiGithub,
        text: "github",
        link: "https://github.com/andlukass",
    },
    {
        icon: SiGmail,
        text: "email",
        link: "mailto:lopess.andrade@gmail.com",
    }
]

export default options;