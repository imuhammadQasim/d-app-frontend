import React, { useContext, useEffect, useRef, useState } from "react";
import { StyledHeader } from "./Header.styles";
import logo from "@/assets/images/logo.svg";
import dashboardIcon from "@/assets/images/dashboard-icon.svg";
import walletIcon from "@/assets/images/wallet-icon.svg";
import notificationIcon from "@/assets/images/notification-icon.svg";
import logoutIcon from "@/assets/images/logout-icon.svg";
import avatar from "@/assets/images/avatar.png";
import downArrow from "@/assets/images/down-arrow.svg";
import privacyIcon from "@/assets/images/privacy-icon.svg";
import termsIcon from "@/assets/images/terms-icon.svg";
import settingIcon from "@/assets/images/settings-icon.svg";
import menuIcon from "@/assets/images/menu-icon.svg";
import logoSm from "@/assets/images/logo-sm.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { clearCookie } from "@/helpers/common";
import { AuthContext } from "@/context/AuthContext";
import Toast from "../molecules/Toast";

const pages = [
  {
    icon: privacyIcon,
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    icon: termsIcon,
    label: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
  {
    icon: settingIcon,
    label: "settings",
    href: "/settings",
  },
];
const navData = [
  {
    icon: dashboardIcon,
    label: "Dashboard",
    link: "/",
  },
  {
    icon: walletIcon,
    label: "My Wallet",
    link: "/my-wallet",
  },
  {
    icon: termsIcon,
    label: "Terms & Conditions",
    link: "/terms-and-conditions",
  },
  {
    icon: privacyIcon,
    label: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    icon: notificationIcon,
    label: "Notifications",
    link: "/notifications",
  },
  {
    icon: settingIcon,
    label: "Settings",
    link: "/settings",
  },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const navRef = useRef(null);
  const [userDropDown, setUserDropDown] = useState(false);
  const { user } = useContext(AuthContext);

  function handleLogout() {
    clearCookie("intd_d");
    router.push("/login");
  }

  function handleMenu() {
    if (typeof window !== "undefined") {
      document.body.classList.toggle("nav-active");
    }
  }

  useEffect(() => {
    if (typeof window === "undefined") return;
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        document.body.classList.remove("nav-active");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleRouteChangeStart = () => {
      document.body.classList.remove("nav-active");
    };

    const handleRouteChangeComplete = () => {
      document.body.classList.remove("nav-active");
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      window.onload = null;
    };
  }, [router]);

  return (
    <StyledHeader ref={navRef}>
      <figure className="menu-icon" onClick={handleMenu}>
        <Image src={menuIcon} alt="menuIcon" />
      </figure>
      <figure className="logo-holder" onClick={() => router.push("/")}>
        <Image src={logo} alt="IntD Logo" />
      </figure>
      <figure className="logo-sm">
        <Image src={logoSm} alt="IntD Logo" />
      </figure>
      <div className="pages-holder">
        <Link href="/" className={pathname === "/" ? "page active" : "page"}>
          <Image src={dashboardIcon} alt="Dashboard Icon" />
          <span className="text">Dashboard</span>
        </Link>
        <Link
          href="/my-wallet"
          className={pathname === "/my-wallet" ? "page active" : "page"}
        >
          <Image src={walletIcon} alt="Wallet Icon" />
          <span className="text">My Wallet</span>
        </Link>
        <div className="notification">
          <Image src={notificationIcon} alt="Notification Icon" />
        </div>
        <div className="logout" onClick={() => handleLogout()}>
          <Image src={logoutIcon} alt="Logout Icon" />
        </div>
        <div
          className={userDropDown ? "user-info active" : "user-info"}
          onClick={() => setUserDropDown(!userDropDown)}
        >
          <figure className="user-image">
            <Image src={avatar} alt="avatar" width={100} height={100} />
          </figure>
          <span className="user-name">
            {user?.first_name} <br /> {user?.last_name}
          </span>
          <Image src={downArrow} alt="downArrow" className="arrow" />
          <div className="dropdown">
            <div className="head">
              <figure className="user-image">
                <Image src={avatar} alt="avatar" width={100} height={100} />
              </figure>
              <div>
                <span className="user-name">
                  {user?.first_name} {user?.last_name}
                </span>
                <span className="user-email">
                  <Link
                    style={{
                      overflowWrap: "break-word",
                      wordBreak: "break-word",
                    }}
                    href={`mailto:${user?.email}`}
                  >
                    {user?.email}
                  </Link>
                </span>
              </div>
            </div>
            {pages?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`dropdown-item ${
                  pathname === item.href ? "active" : ""
                }`}
              >
                <Image src={item.icon} alt={item.label} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="nav-links">
        <div className="head">
          <figure className="user-image">
            <Image src={avatar} alt="avatar" width={100} height={100} />
          </figure>
          <div>
            <span className="user-name">
              {`${user?.first_name ?? ""} ${user?.last_name ?? ""}`}
            </span>
            <span className="user-email">
              <Link
                style={{
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                }}
                href={`mailto:${user?.email}`}
              >
                {user?.email}
              </Link>
            </span>
          </div>
        </div>
        <ul>
          {navData?.map((item, index) => (
            <Link href={item?.link} key={index}>
              <li className={pathname === item.link ? "active" : ""}>
                <Image src={item.icon} alt={item.label} />
                <span>{item.label}</span>
              </li>
            </Link>
          ))}
        </ul>
        <button className="logout" onClick={() => handleLogout()}>
          <Image src={logoutIcon} alt="Logout Icon" />
          Logout
        </button>
      </div>
    </StyledHeader>
  );
};

export default Header;
