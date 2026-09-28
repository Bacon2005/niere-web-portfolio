import Image from "next/image";
import * as motion from "motion/react-client";
import { Nunito_Sans } from "next/font/google";
import ProjectLink from "./projectLink";
const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400"],
});
export default function ProjectCard({
  image,
  href,
  name,
  date,
  description,
}: {
  image: string;
  href: string;
  name: string;
  date: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      className="bg-surface-2 rounded-3xl mt-8"
    >
      <Image
        src={image}
        width={500}
        height={230}
        alt="Profile"
        className="rounded-tl-3xl rounded-tr-3xl w-full h-57.5 object-cover"
      />
      <div className={`${nunito_sans.className} p-4`}>
        <div className="flex flex-row justify-between">
          <span>{name}</span> <span>{date}</span>
        </div>
        <div className="mt-2.5 mb-9">{description}</div>
        <ProjectLink
          href={href}
          label={"See Repository"}
          color={"var(--cta)"}
        />
      </div>
    </motion.div>
  );
}
