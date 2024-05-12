import minishell from '../../assets/minishell.gif'
import marcador from '../../assets/marcador.gif'
// import incep from '../../assets/incep.gif'

import { IoCodeSlashOutline } from "react-icons/io5";
import { SiGnubash, SiDocker } from 'react-icons/si';
import { IconType } from 'react-icons';

const incep = "https://raw.githubusercontent.com/youssefjoundi/Inception-42/master/Screenshot%20from%202023-10-05%2002-07-34.png";

interface Option {
    icon: IconType;
    iconTitle: string;
    title: string;
    text: string;
    link: string
    img: string
}

const options : Option[] = [
    {
        icon: SiGnubash,
        iconTitle: "bash",
        title: "Minishell",
        text: "minishell",
        link: "https://github.com/andlukass/minishell",
        img: minishell,
    },
    {
        icon: IoCodeSlashOutline,
        iconTitle: "WebDev",
        title: "Marcador De Truco",
        text: "marcador",
        link: "https://github.com/andlukass/marcadorDeTruco",
        img: marcador,
    },
    {
        icon: SiDocker,
        iconTitle: "Docker",
        title: "Inception",
        text: "incep",
        link: "https://github.com/andlukass/inception",
        img: incep,
    },
]

export default options;