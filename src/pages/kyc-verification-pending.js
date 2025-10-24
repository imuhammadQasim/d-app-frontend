import React from "react";
import Process from "@/components/Process";
import {useRouter} from "next/router";
import successGif from "@/assets/images/request-successful-gif.gif";

const VerificationPending = () => {
    const router = useRouter();
    const pendingVerification = {
        gif: {successGif},
        heading: "Account Request Pending...",
        text: "Your account request is being processed. You will be notified \nwithin 48 hours. Please check back later.",
        btnText: "Logout",
        onClick: () => {
            router.push("/login");
        },
    };
    return (
        <div>
            <Process data={pendingVerification} />
        </div>
    );
};

export default VerificationPending;
