import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logoSvg from "@/assets/logo.svg";

const Footer = () => {
  const footerLinks = {
    products: [
      { label: "Online Surveys", href: "/products/online-surveys" },
      { label: "Product Testing", href: "/products/product-testing" },
    ],
    solutions: [
      { label: "Research", href: "/products/online-surveys" },
      { label: "Participants", href: "/pax" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  };

  const socialIcons = [
    { name: "X", icon: "𝕏" },
    { name: "Facebook", icon: "f" },
    { name: "Threads", icon: "@" },
    { name: "LinkedIn", icon: "in" },
    { name: "Instagram", icon: "📷" },
  ];

  return (
    <footer className="bg-footer-bg text-footer-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo and Tagline */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoSvg} alt="Canvassing logo" className="w-10 h-10 object-contain" />
              <span className="font-display font-bold text-xl text-white">Canvassing</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              The trusted marketplace connecting researchers with verified participants for surveys and product testing.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <h4 className="font-semibold text-white">Connect</h4>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Mail className="w-4 h-4" />
                <span>hello@canvassing.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Phone className="w-4 h-4" />
                <span>+234-XXX-XXXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mt-10">
          {socialIcons.map((social) => (
            <a
              key={social.name}
              href="#"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors text-sm"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
          <p className="text-sm text-white/60">
            © 2025 Canvassing. All rights reserved. Built with ❤️ in Africa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
