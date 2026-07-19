import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

interface SocialIconsProps {
  className?: string;
}

export default function SocialIcons({ className }: SocialIconsProps) {
  return (
    <div className={className || "fixed right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-5 items-center z-50"}>
      <a href="https://www.instagram.com/nexshift.media.and.events/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-80 hover:opacity-100 hover:scale-110 transition-all"><FaInstagram className="w-4 h-4 md:w-5 md:h-5" /></a>
      <a href="https://www.facebook.com/profile.php?id=61565586822619" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="opacity-80 hover:opacity-100 hover:scale-110 transition-all"><FaFacebookF className="w-4 h-4 md:w-5 md:h-5" /></a>
      <a href="#" aria-label="YouTube" className="opacity-80 hover:opacity-100 hover:scale-110 transition-all"><FaYoutube className="w-4 h-4 md:w-5 md:h-5" /></a>
      <a href="mailto:info@nexshift.com" aria-label="Gmail" className="opacity-80 hover:opacity-100 hover:scale-110 transition-all"><SiGmail className="w-4 h-4 md:w-5 md:h-5" /></a>
    </div>
  );
}
