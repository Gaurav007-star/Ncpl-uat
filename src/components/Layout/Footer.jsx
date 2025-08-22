import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaMeta } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Logo from "../../assets/whiteLogo.png";
import { Link } from "react-router";

const footerData = {
  company: {
    name: "NcpL Construction",
    description:
      "Professional construction services with over 20 years of experience. Building dreams into reality with quality and excellence.",
    socials: [
      { icon: <FaMeta />, link: "#" },
      { icon: <FaSquareXTwitter />, link: "#" },
      { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/ntnl-construction-pvt-ltd/" },
      { icon: <AiFillInstagram />, link: "#" }
    ]
  },
  services: [
    "Residential Construction",
    "Commercial Buildings",
    "Renovation & Remodeling",
    "Infrastructure Projects"
  ],
  companyLinks: [
    { label: "About Us", link: "/about" },
    { label: "Our Projects", link: "/project" },
    { label: "Contact us", link: "/contact" }
  ],
  contact: [
    {
      icon: <MapPin className="w-9 h-9 " />,
      text: "P 28, Awas Vikas, Rudrapur, Udham Singh Nagar, Uttarakhand 263153"
    },
    {
      icon: <Phone className="w-4 h-4 " />,
      text: "+91 6396722144"
    },
    {
      icon: <Mail className="w-4 h-4 " />,
      text: "info@ntnlconstruction.com"
    },
    {
      icon: <Clock className="w-4 h-4 " />,
      text: "Mon - Fri: 8:00 AM - 6:00 PM"
    }
  ]
};

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-gray-300 px-[10vw] py-16">
      {" "}
      {/* Increased padding for bigger footer */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-12">
        {/* Company Info */}
        <div className="flex-1 min-w-[240px]">
          <h2 className="text-white text-2xl font-clash mb-4">
            <img src={Logo} alt="" className="w-auto h-[100px]" />
          </h2>
          <p className="font-plein text-sm leading-relaxed mb-6">
            {footerData.company.description}
          </p>
          <div className="flex gap-4">
            {footerData.company.socials.map((social, i) => (
              <Link
                key={i}
                to={social.link}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-primary hover:text-white transition"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-white text-lg font-clash mb-4">Services</h3>
          <ul className="space-y-3 font-plein text-sm">
            {footerData.services.map((service, i) => (
              <li key={i}>
                <Link to={"/service"} className="hover:text-white transition">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-white text-lg font-clash mb-4">Company</h3>
          <ul className="space-y-3 font-plein text-sm">
            {footerData.companyLinks.map((item, i) => (
              <li key={i}>
                <Link to={item.link} className="hover:text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1 min-w-[240px]">
          <h3 className="text-white text-lg font-clash mb-4">Contact Info</h3>
          <ul className="space-y-4 font-plein text-sm">
            {footerData.contact.map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="mt-12 pt-6 border-t border-gray-700 flex flex-wrap justify-between text-sm font-plein text-gray-400">
        <p>© {date} National Construction. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
