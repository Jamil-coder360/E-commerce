import { useState } from "react";

const navItems = [
  {
    section: "Manage My Account",
    links: ["My Profile", "Address Book", "My Payment Options"],
  },
  {
    section: "My Orders",
    links: ["My Returns", "My Cancellations"],
  },
  {
    section: "My WishList",
    links: [],
  },
];

export default function AccountSidebar() {
  const [active, setActive] = useState("My Profile");

  return (
    <div className="w-60 py-6 px-2">
      {navItems.map(({ section, links }) => (
        <div key={section} className="mb-6">
          {/* Section Heading */}
          <button
            onClick={() => {
              if (links.length === 0) setActive(section);
            }}
            className={`w-full text-left text-base font-semibold mb-2 px-2 transition-colors ${
              links.length === 0 && active === section
                ? "text-red-400"
                : "text-gray-900 hover:text-red-400"
            }`}
          >
            {section}
          </button>

          {/* Sub Links */}
          {links.length > 0 && (
            <ul className="flex flex-col gap-1 pl-6">
              {links.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => setActive(link)}
                    className={`w-full text-left text-sm px-2 py-1 rounded transition-colors ${
                      active === link
                        ? "text-red-400 font-medium"
                        : "text-gray-400 hover:text-red-400"
                    }`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
