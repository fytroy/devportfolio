import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@fytroy",
    icon: Icons.gitHub,
    link: "https://github.com/fytroy",
  },
  {
    name: "LinkedIn",
    username: "Rodney Gitonga",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/rodney-gitonga-9299a41ba/",
  },
  {
    name: "Twitter",
    username: "@itsfytroy",
    icon: Icons.twitter,
    link: "https://x.com/itsfytroy",
  },
  {
    name: "Gmail",
    username: "rodneyroygitonga",
    icon: Icons.gmail,
    link: "mailto:rodneyroygitonga@gmail.com",
  },
];
