import { ToastContainer } from "react-toastify";
import { createGlobalStyle, styled } from "styled-components";

import "../styles/variables.css";
import Layout from "@/components/Layout";
import { AuthContextProvider } from "@/context/AuthContext";
import { LoadingContext, LoadingContextProvider } from "@/context/loadingContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import { SubmitContextProvider } from "@/context/SubmitContext";
import { ThirdwebProvider } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-size: 100%;
    scroll-behavior: smooth;
    scroll-padding-top: 200px;
  }
  *:before,
  *:after,
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: var(--font-size-base) / var(--line-height-base) var(--base-font-sans-serif);
    background: var(--black);
    color: var(--white);
    font-weight: 300;
    position: relative;
    min-width: 375px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;


    &.nav-active {
      overflow: hidden !important;

      .overlay {
        visibility: visible;
        opacity: 1;
      }
    }

    
  }
  
  .overlay {
  visibility: hidden;
  opacity: 0;
  transition: all ease-in-out 0.3s;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
}

  .container {
    max-width: 1380px;
    margin: 0 auto;
    padding: 0 15px;
     @media (min-width: 768px) {
         padding: 0 20px;

    }
  }
  
  #wrapper {
    width: 100%;
    padding: 65px 10px 10px;
    position: relative;
    overflow: hidden;
    @media (min-width: 768px){
      padding: 95px 10px 10px;

    }
  }


  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul {

    list-style: none;
    padding: 0;
    margin: 0;
  }

  textarea {
    resize: vertical;
    vertical-align: top;
  }

  button,
  input[type="button"],
  input[type="reset"],
  input[type="file"],
  input[type="submit"] {
    cursor: pointer;
    font-family: inherit;
  }

  form,
  fieldset {
    margin: 0;
    padding: 0;
    border-style: none;
  }
  a {
    text-decoration: none;
    color: var(--blue);
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  button {
    transition: opacity var(--animation-speed) ease-in-out,
      background var(--animation-speed) ease-in-out,
      visibility var(--animation-speed) ease-in-out,
      border var(--animation-speed) ease-in-out,
      color var(--animation-speed) ease-in-out;
  }

  button {
    padding: 0;
    border: none;
    background: none;
    outline: none;
    font-family: var(--font-size-base);
  }
  .bold {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    @media (min-width: 767px) {
      font-size: 30px;
      line-height: 34px;
    }
  }

  table {
    width: 100%;
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    margin: 0 0 10px;
    color: var(--body-text);
    font-weight: 500;
    @media (min-width: 576px) {
      margin: 0 0 15px;

    }
  }

  h1,
  .h1 {
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    
    @media (min-width: 576px) {
      font-size: 40px;
      line-height: 44px;
      
    }
    @media (min-width: 768px) {
      font-size: 50px;
      line-height: 55px;
    }
  }

  h2,
  .h2 {
    font-size: 27px;
    line-height: 31px;
    font-weight: 700;
    
    @media (min-width: 576px) {
      font-size: 35px;
      line-height: 40px;

    }
    @media (min-width: 992px) {
      font-size: 48px;
      line-height: 49px;
    }
  }
  h3,
  .h3 {
    font-size: 28px;
    line-height: 32px;
  }
  h4,
  .h4 {
    font-size: 24px;
    line-height: 28px;
  }

.primary-heading{
      color: var(--primary);
}

.text-lg{
  @media (min-width: 768px){

    font-size: 18px;
    line-height: 22px;
  }
}
  p {
    margin: 0 0 15px;
    &:last-child {
      margin: 0;
    }
  }

  br {

    @media(max-width: 991px){
      display: none;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 20px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 15px;
    background: var(--gray-50);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 10px;
  }

  /* Handle on hover */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
   input:-webkit-autofill,
  textarea:-webkit-autofill {
    background-color: transparent !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  input:-webkit-autofill:focus,
  textarea:-webkit-autofill:focus {
    background-color: transparent !important;
  }
  figure {
    margin: 0;
  }
  /* Firefox */
  input[type="number"] {
    appearance: textfield;
  }

  .gradientWrap {
    background: var(--gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .react-loading-skeleton{
    --base-color:var(--primary);
  }

  `;
export const StyledLayout = styled.div`
  .bg {
    position: absolute;
    top: -800px;
    max-width: 1600px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`;

export const StyledUpdate = styled.div`
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 26px;
    line-height: 30px;
    text-align: center;

    @media (min-width: 576px) {
      font-size: 32px;
      line-height: 36px;
    }
  }

  p {
    text-align: center;
    margin: 0 0 26px;

    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 18px;
    }
  }

  form {
    width: 100%;
    max-width: 550px;

    .input-wrapper {
      backdrop-filter: blur(10px);
      border: 1px solid var(--dark-100);
      border-radius: 16px;
      padding: 15px;
      margin: 0 0 26px;

      @media (min-width: 576px) {
        padding: 26px;
      }
    }

    .btn-holder {
      display: flex;
      justify-content: center;
      margin: 0 0 20px;

      &:last-child {
        margin: 0;
        button {
          color: var(--white);
        }
      }
    }
  }

  @media (min-width: 768px) {
    height: calc(100vh - 105px);
  }
`;

const StyledToastContainer = styled(ToastContainer)`
  z-index: 99999;

  .Toastify__toast {
    padding: 0;
    min-height: 0;
    border-radius: 8px;
    font-family: inherit;
  }
  .Toastify__toast--default {
    background: none;
  }
  .Toastify__toast-body {
    padding: 0;
  }
  .Toastify__close-button {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
  }
`;

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  // const {loading,setLoading} = useContext(LoadingContext);
  const router = useRouter();
  const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
  });

  useEffect(() => {
    const handleRouteChangeStart = () => {
      // setLoading(true);
      disableScroll();
    };

    const handleRouteChangeComplete = () => {
      // setLoading(false);
      enableScroll();
    };
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100%";
    };

    const enableScroll = () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
    };
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    window.onload = () => {
      // setLoading(false);
    };
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      window.onload = null;
    };
  }, [router]);

  return (
    <>
      <GlobalStyle />
      <StyledToastContainer />
      <ThirdwebProvider client={client} autoConnect>
        <AuthContextProvider>
          <LoadingContextProvider>
            {isLoading && <Loader />}
            <Layout>
              <SubmitContextProvider>
                <Component {...pageProps} />
              </SubmitContextProvider>
            </Layout>
          </LoadingContextProvider>
        </AuthContextProvider>
      </ThirdwebProvider>
    </>
  );
}
