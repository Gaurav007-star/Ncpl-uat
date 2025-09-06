import React, { useEffect, useState } from "react";
import logo from "../../assets/ncpl-logo.png";
import { Link, useLocation, useNavigate } from "react-router";
import { CgMenuRightAlt } from "react-icons/cg";
import { GoArrowUpRight } from "react-icons/go";



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
  const [isInService, setIsInService] = useState(false);
  const navigate = useNavigate();
  const path = useLocation();

  useEffect(() => {
    let target = "";

    if (path.pathname === "/service") {
      target = document.getElementById("parallax-card-section");
    } else {
      target = document.getElementById("project-scroll-section");
    }

    // console.log(target);

    if (!target) return; // if element doesn't exist, skip

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInService(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [path.pathname]);

  return (
    <div
      className={`nav-bar ${
        isInService ? "block" : "sticky"
      } top-0 z-[1000] bg-white w-full h-max flex items-top max-[1025px]:items-center justify-between px-[10vw] font-clash font-medium text-primary py-5  max-[450px]:px-5`}
    >
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
      <div className="right-side max-[1025px]:hidden font-plein flex items-center mt-2 h-full gap-8">
        {links.map((item, i) => (
          <Link
            key={i}
            to={item.route}
            // onMouseEnter={() => setSelectLink(item.id)}
            // onMouseLeave={() => setSelectLink("")}
            className={`text-[20px] hover:scale-105  transition-transform duration-200 ${item.id === "contact" ? "border-primary border-2 px-3 py-2 rounded-md flex items-center gap-1" : "hover:text-black"} `}
          >
            {item.title}{item.id === "contact" &&  <GoArrowUpRight className="text-[20px]"/>}
          </Link>
        ))}
      </div>

      <div className="drawer min-[1025px]:hidden w-max">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer">
            <CgMenuRightAlt className="w-10 h-10" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-primary text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            {links.map((item, i) => (
              <Link
                key={i}
                to={item.route}
                // onMouseEnter={() => setSelectLink(item.id)}
                // onMouseLeave={() => setSelectLink("")}
                className={`text-[40px] hover:scale-105 text-white transition-transform duration-200`}
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
