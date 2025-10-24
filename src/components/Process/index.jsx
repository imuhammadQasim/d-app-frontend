import React, {useContext, useEffect, useState} from "react";
import {StyledProcess, StyledProgressBar} from "./Process.styles";
import noteIcon from "@/assets/images/note-icon.svg";
import Image from "next/image";
import Button from "../Button";
import processGif from "@/assets/images/inProcess-gif.gif";
import successGif from "@/assets/images/request-successful-gif.gif";
import errorGif from "@/assets/images/error-gif.gif";
import {SubmitContext} from "@/context/SubmitContext";

const Process = ({data}) => {
    const [progress, setProgress] = useState(0);
    const {setProcess} = useContext(SubmitContext);

    useEffect(() => {
        if (data?.inProcess) {
            setProgress(0); // Reset progress

            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 90) {
                        clearInterval(interval);
                        return prev;
                    }
                    return prev + 10; // Increment progress
                });
            }, 100);

            return () => clearInterval(interval); // Cleanup on unmount
        } else {
            setProgress(100); // Complete progress when request is done
        }
    }, [data?.inProcess]);

    function handleBtnClick(onClick) {
        setProcess(false);
        onClick();
    }

    return (
        <StyledProcess>
            <div className="container">
                <div className="gif-holder">
                    {data?.type === "success" ? (
                        <Image src={successGif} alt="gif" />
                    ) : data?.type === "error" ? (
                        <Image src={errorGif} alt="gif" />
                    ) : (
                        <Image src={processGif} alt="gif" />
                    )}
                </div>
                <span className="heading">{data?.heading}</span>
                <span className="text">{data?.text}</span>
                {data?.error && (
                    <div className="error">
                        <Image src={noteIcon} alt="noteIcon" />
                        <span>Password reset request error (ERROR 404)</span>
                    </div>
                )}
                {data?.inProcess ? (
                    <StyledProgressBar $progress={`${progress}%`} />
                ) : (
                    <>
                        {data?.btnText && (
                            <div className="btn-holder">
                                <Button
                                    width="350px"
                                    variant={data?.variant}
                                    onClick={() => handleBtnClick(data?.onClick)}>
                                    {data?.btnText}
                                </Button>
                            </div>
                        )}
                        {data?.backBtn && (
                            <div className="back-btn" onClick={data?.backBtn}>
                                <button>Go Back!</button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </StyledProcess>
    );
};

export default Process;
