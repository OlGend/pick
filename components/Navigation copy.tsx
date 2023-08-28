"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Loader from "./Loader";
import Image from "next/image";
import Img from "@/public/menuBonuses2.png";
import { useTranslation } from "react-i18next";

type NavLink = {
  class: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  subMenu?: NavLink[];
};

type Props = {
  navLinks: NavLink[];
  onLinkClick: () => void;
};

const Navigation = ({ navLinks, onLinkClick }: Props) => {
  // Получите функцию перевода
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleLinkClick = () => {
    setIsLoading(true);

    // Simulate some delay to show the loader (remove this in actual usage)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const toggleSubMenu = (label: string) => {
    if (openSubMenu === label) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(label);
    }
  };

  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        const hasSubMenu = link.subMenu && link.subMenu.length > 0;

        return (
          <div key={link.label} className="navigation-item">
            <Link
              href={link.href}
              className={isActive ? "active" : ""}
              onClick={() => {
                handleLinkClick();
                // onLinkClick();
              }}
            >
              <div className="flex items-center justify-center">
                {isLoading ? (
                  <Loader />
                ) : (
                  <>
                    {link.icon}
                    <span>{t(link.label)}</span>
                  </>
                )}
              </div>
            </Link>
            {hasSubMenu && (
              <button onClick={() => toggleSubMenu(link.label)}>Toggle</button> // Кнопка для переключения
            )}
          
          </div>
        );
      })}
    </>
  );
};

export { Navigation };
