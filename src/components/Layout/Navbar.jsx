import React, { useState } from "react";
import logo from "../../assets/ncpl-logo.png";
import { Link, useNavigate } from "react-router";

const links = [
  {
    id: "home",
    route: "/",
    title: "Home",
    heading: "Welcome to Our Website",
    subLinks: [
      { label: "Overview", route: "#" },
      { label: "Latest News", route: "#" },
      { label: "Announcements", route: "#" }
    ]
  },
  {
    id: "about",
    route: "/about",
    title: "About",
    heading: "Learn More About Us",
    subLinks: [
      { label: "Our Story", route: "#" },
      { label: "Team", route: "#" },
      { label: "Careers", route: "#" }
    ]
  },
  {
    id: "services",
    route: "/service",
    title: "Services",
    heading: "What We Offer",
    subLinks: [
      { label: "Web Development", route: "#" },
      { label: "Mobile Apps", route: "#" },
      { label: "Cloud Solutions", route: "#" }
    ]
  },
  {
    id: "projects",
    route: "/project",
    title: "Projects",
    heading: "Our Work",
    subLinks: [
      { label: "Case Studies", route: "#" },
      { label: "Portfolio", route: "#" },
      { label: "Testimonials", route: "#" }
    ]
  },
  {
    id: "contact",
    route: "/contact",
    title: "Contact Us",
    heading: "Get in Touch",
    subLinks: [
      { label: "Email", route: "#" },
      { label: "Phone", route: "#" },
      { label: "Locations", route: "#" }
    ]
  }
];

const Navbar = () => {
  const [selectLink, setSelectLink] = useState("");
  const navigate = useNavigate();

  return (
    <div className="nav-bar w-full h-max flex items-center justify-between px-[10vw] font-clash font-medium text-primary py-5">
      {/* left-side */}
      <div className="left-side flex items-center gap-2">
        <img
          src={logo}
          alt="logo"
          className="w-auto h-[100px] object-cover cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* right-side */}
      <div className="right-side flex items-center gap-8">
        {links.map((item, i) => (
          <Link
            key={i}
            to={item.route}
            onMouseEnter={() => setSelectLink(item.id)}
            onMouseLeave={() => setSelectLink("")}
            className="text-[20px] hover:scale-105 hover:text-black transition-transform duration-200"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
