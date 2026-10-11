import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <Link
      href={config.site.base_url}
      className="brand"
      aria-label={`${config.site.title} home`}
    >
      <Image src={config.site.logo} width={30} height={35} alt="" priority />
      <span>
        thetech<span className="brand-accent">spectra</span>
        <span className="brand-dot">.</span>
      </span>
    </Link>
  );
}
