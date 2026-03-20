import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import { FooterSignature } from "@/components/ui/FooterSignature";

export default function Footer() {
  return (
    <footer className="relative pt-12 pb-40 overflow-hidden border-t bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
      <div className="container flex flex-col items-center gap-6 px-6 mx-auto">
        {/* Massive Signature with Hover Effect */}
        <FooterSignature />

        <div className="z-10 flex gap-6">
          <SocialLink
            href="https://github.com/sourabhnateria"
            icon={<Github size={20} />}
          />
          <SocialLink
            href="https://www.linkedin.com/in/sourabhnateria/"
            icon={<Linkedin size={20} />}
          />
          <SocialLink
            href="https://x.com/sourabh_nateria"
            icon={<Twitter size={20} />}
          />
          <SocialLink
            href="https://www.instagram.com/nateriasourabh/"
            icon={<Instagram size={20} />}
          />
          <SocialLink
            href="mailto:sourabhnateria.cse@gmail.com"
            icon={<Mail size={20} />}
          />
        </div>
        <p className="z-10 text-sm text-center text-slate-500">
          © {new Date().getFullYear()} Sourabh Nateria. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 transition-all bg-white rounded-full shadow-sm dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md"
    >
      {icon}
    </a>
  );
}
