import { Navigation } from "./Navigation";

const navItems = [
  { icon: "", label: "Home", href: "/" },
  { icon: "", label: "Bonuses", href: "/bonuses" },
  { icon: "", label: "New Casinos", href: "/casinos" },
  { icon: "", label: "Free Spins", href: "/free-spins" },
  { icon: "", label: "Guides", href: "/guides" },
  { icon: "", label: "About", href: "/about" },
  { icon: "", label: "Contacts", href: "/contacts" },
];

const TheHeader = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Navigation navLinks={navItems} />
      </div>
    </header>
  );
};

export { TheHeader };
