"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Loader from "./Loader";
import Image from "next/image";
import Img from "@/public/menuBonuses2.png";

type NavLink = {
  class: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  subMenu?: NavLink[];
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLinkClick = () => {
    setIsLoading(true);

    // Simulate some delay to show the loader (remove this in actual usage)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
              onClick={handleLinkClick}
            >
              <div className="flex items-center justify-center">
                {isLoading ? (
                  <Loader />
                ) : (
                  <>
                    {link.icon}
                    <span>{link.label}</span>
                  </>
                )}
              </div>
            </Link>

            {hasSubMenu && (
              <div className={`sub-menu flex justify-between ${link.class}`}>
                <div className="sub-menu-items">
                  {link.subMenu!.map((subLink) => (
                    <Link key={subLink.label} href={subLink.href}>
                      <div className="sub-menu-item" onClick={handleLinkClick}>
                        <div className="">
                          {isLoading ? (
                            <Loader />
                          ) : (
                            <span>{subLink.label}</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="sub-menu-image">
                  <Image src={Img} alt="bonuses" width={280} loading="lazy" />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export { Navigation };