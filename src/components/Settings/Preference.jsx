import React, { useState, useContext } from "react";
import heroImg from "@/assets/images/settings-bg.jpg";
import pictureEditIcon from "@/assets/images/edit-icon.svg";
import verifyIcon from "@/assets/images/verify-icon.svg";
import ProfilePic from "@/assets/images/avatar.png";
import personIcon from "@/assets/images/person-icon.svg";
import editIcon from "@/assets/images/edit-icon-2.svg";
import infoIcon from "@/assets/images/info-icon-2.svg";
import passwordIcon from "@/assets/images/password-icon.svg";
import verifyIconWhite from "@/assets/images/verify-icon-white.svg";
import { StyledPreference, StyledPreferenceHero } from "./Settings.styles";
import Image from "next/image";
import UploadImg from "../molecules/UploadImg";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";

function Preference() {
  const router = useRouter();
  const [bannerImg, setBannerImg] = useState();
  const { user } = useContext(AuthContext);
  function handleBannerImg(e) {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBannerImg(imageUrl);
    }
  }

  const updatedAt = user?.updated_at;
  const formattedDate = updatedAt
    ? new Date(updatedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <StyledPreference>
      <StyledPreferenceHero image={!bannerImg ? heroImg.src : bannerImg}>
        <button type="button">
          <input
            type="file"
            id="bannerImg"
            accept="image/*"
            onChange={handleBannerImg}
          />
          <label htmlFor="bannerImg">
            <Image src={pictureEditIcon} alt="editIcon" />
            <span>Change Banner Image</span>
          </label>
        </button>
        <div className="info">
          <span className="heading">
            “Instant, Inclusive, International: <br /> The Digital Dollar”
          </span>
          <div className="user">
            <figure className="user-img">
              <Image
                src={ProfilePic}
                alt="ProfilePic"
                width={100}
                height={100}
              />
            </figure>
            <span className="user-name">
              {`${user?.first_name ?? ""} ${user?.last_name ?? ""}`}
            </span>
          </div>
        </div>
      </StyledPreferenceHero>
      <div className="user-info">
        <UploadImg onChange={(e) => e.target} noMargin />
        <div>
          <div className="user-name-holder">
            <span className="user-name">
              {`${user?.first_name ?? ""} ${user?.last_name ?? ""}`}
            </span>
            <Image src={verifyIcon} alt="verifyIcon" />
          </div>
          <span className="user-email">{user?.email}</span>
        </div>
      </div>
      <div className="account-heading">
        <span className="heading">Manage Account Preferences!</span>
        <span className="text">
          You can Update your name & password once in 30 days.
        </span>
      </div>

      <div className="preferences-holder">
        <div className="preference">
          <span className="heading">Full Name</span>
          <div className="text-holder">
            <Image src={personIcon} alt="personIcon" />
            <span className="text">{`${user?.first_name ?? ""} ${
              user?.last_name ?? ""
            }`}</span>
            <Image
              src={editIcon}
              alt="editIcon"
              className="action-icon"
              onClick={() => router.push("/update-name")}
            />
          </div>
        </div>
        <div className="preference">
          <span className="heading">Email Address:</span>
          <div className="text-holder">
            <Image src={personIcon} alt="personIcon" />
            <span className="text email">{user?.email}</span>
            <Image src={infoIcon} alt="infoIcon" />
          </div>
        </div>
        <div className="preference">
          <span className="heading">KYC Status:</span>
          <div className="text-holder">
            <Image src={verifyIconWhite} alt="verifyIconWhite" />
            <span className="text status">{user?.status}</span>
            <Image src={infoIcon} alt="infoIcon" />
          </div>
        </div>
        <div className="preference">
          <span className="heading">Password</span>
          <div className="text-holder">
            <Image src={passwordIcon} alt="passwordIcon" />
            <div className="text">
              <span className="text">********</span>
              <span className="text">
                (Last updated {formattedDate || "N/A"})
              </span>
            </div>
            <Image
              src={editIcon}
              alt="editIcon"
              className="action-icon"
              onClick={() => router.push("/update-password")}
            />
          </div>
        </div>
      </div>
    </StyledPreference>
  );
}

export default Preference;
