import Toast from "@/components/molecules/Toast";
import { getCookie, setCookie } from "@/helpers/common";
import authService from "@/services/authService";
import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!getCookie(process.env.NEXT_PUBLIC_CRM_TOKEN_COOKIE)
  );

  const [loading, setLoading] = useState(false);
  const [initializing, setInitializing] = useState(true);

  const verifyEmail = async (payload) => {
    try {
      setLoading(true);
      const res = await authService.verifyEmail(payload);
      if (!res?.token) {
        throw new Error(res?.message);
      } else {
        setCookie(process.env.NEXT_PUBLIC_CRM_TOKEN_COOKIE, res?.token);
        Toast({ type: "success", message: res.message });
        setLoading(false);
        return true;
      }
    } catch (err) {
      setLoading(false);
      Toast({ type: "error", message: err.message });
    }
  };

  const onLogin = async ({ email, password }, rememberMe = false) => {
    setLoading(true);
    try {
      const res = await authService.login({
        email,
        password,
      });
      if (!res?.token) {
        Toast({ type: info, message: res?.message });
      }

      setIsLoggedIn(true);
      setCookie(process.env.NEXT_PUBLIC_CRM_TOKEN_COOKIE, res?.token, {
        path: "/",
        maxAge: rememberMe ? 7 * 24 * 60 * 60 : undefined,
        secure: true,
        sameSite: "Strict",
      });

      const userDetails = await authService.fetchUserDetails();
      if (userDetails) {
        setUser(userDetails?.user);
      }
      let redirected = false;

      if (userDetails?.user?.status === "VERIFY_EMAIL") {
        router.push("/verify-email");
        Toast({ type: "info", message: "Please Verify Your Email" });
        redirected = true;
      } else if (userDetails?.user?.status === "KYC_VERIFICATION_INITIATED") {
        router.push("/kyc-verification");
        Toast({ type: "info", message: "Please Verify Your KYC" });
        redirected = true;
      } else if (
        userDetails?.user?.status === "KYC_VERIFIED" &&
        userDetails?.user?.is_paid === false
      ) {
        router.push("/payment-method");
        Toast({ type: "info", message: "Please set up your payment method." });
        redirected = true;
      } else if (
        userDetails?.user?.status === "ACTIVE" &&
        userDetails?.user?.is_paid
      ) {
        router.push("/");
        Toast({ type: "success", message: "Login Successfully" });
        redirected = true;
      }

      if (!redirected) {
        router.push("/");
        Toast({ type: "success", message: "Login Successfully" });
      }
      return true;
    } catch ({ message }) {
      setIsLoggedIn(false);
      Toast({ type: "error", message });
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initAuth = async () => {
      const token = getCookie(process.env.NEXT_PUBLIC_CRM_TOKEN_COOKIE);
      if (token) {
        try {
          const userDetails = await authService.fetchUserDetails();
          if (userDetails?.user) {
            setUser(userDetails.user);
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
            setUser(null);
          }
        } catch (err) {
          console.error("Error rehydrating user:", err);
          setIsLoggedIn(false);
          setUser(null);
        }
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
      setInitializing(false); // 👈 mark done
    };

    initAuth();
  }, []);

  const refreshUser = async () => {
    const token = getCookie(process.env.NEXT_PUBLIC_CRM_TOKEN_COOKIE);
    if (!token) {
      setIsLoggedIn(false);
      setUser(null);
      return;
    }
    try {
      const userDetails = await authService.fetchUserDetails();
      if (userDetails?.user) {
        setUser(userDetails.user);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (err) {
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  const contextValue = {
    loading,
    verifyEmail,
    onLogin,
    isLoggedIn,
    user,
    setUser,
    initializing,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
