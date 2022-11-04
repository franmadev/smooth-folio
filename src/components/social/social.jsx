import { SiLinkedin, SiDiscord, SiTwitter, SiGithub } from "react-icons/si";
function Social() {
  return (
    <section className="flex mx-auto justify-center gap-4">
      <a
        href="https://www.linkedin.com/in/francisco-marambio-bovadilla-a0b966211/"
        target="_blank"
        rel="noreferrer"
      >
        <SiLinkedin size="1.5rem" />
      </a>
      <a href="https://discord.gg/xXYrYsyZus" target="_blank" rel="noreferrer">
        <SiDiscord size="1.5rem" />
      </a>
      <a href="https://twitter.com/FranmaDev" target="_blank" rel="noreferrer">
        <SiTwitter size="1.5rem" />
      </a>
      <a href="https://github.com/franmadev" target="_blank" rel="noreferrer">
        <SiGithub size="1.5rem" />
      </a>
    </section>
  );
}

export default Social;
