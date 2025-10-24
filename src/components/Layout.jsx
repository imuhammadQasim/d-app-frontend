import React, {useEffect} from "react";
import Header from "./Header";
import {usePathname} from "next/navigation";
import bg from "@/assets/images/body-img.png";
import {StyledLayout} from "@/pages/_app";
import Image from "next/image";

const Layout = ({children}) => {
    const pathname = usePathname();
    const layout = [
        "/",
        "/my-wallet",
        "/buy-intd",
        "/settings",
        "/update-name",
        "/update-password",
        "/transfer-details",
        "/donate-money",
        "/privacy-policy",
        "/terms-and-conditions",
        "/initiate-investment",
        "/get-help",
    ];
    const showLayout = layout.includes(pathname);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                document.body.classList.add("scrolled");
            } else {
                document.body.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <StyledLayout>
            {showLayout ? (
                <div id="wrapper">
                    <span className="overlay" />
                    <Image src={bg} alt="bg" className="bg" />
                    <Header />
                    <div>{children}</div>
                </div>
            ) : (
                <div>{children}</div>
            )}
        </StyledLayout>
    );
};

export default Layout;
