import React, {useState} from "react";
import {Message, StyledGetHelp} from "@/styles/GetHelp.styles";
import img from "@/assets/images/get-help-img.png";
import documentIcon from "@/assets/images/document-icon.svg";
import avatar from "@/assets/images/avatar.png";
import sendIcon from "@/assets/images/send-icon.svg";
import checkMarks from "@/assets/images/checkMarks.svg";
import Image from "next/image";
import Link from "next/link";

const GetHelp = () => {
    const [messages, setMessages] = useState([{type: "receive", message: "Hi"}]);
    const [sendMessage, setSendMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!sendMessage.trim()) {
            return;
        }

        setMessages(prev => [...prev, {type: "send", message: sendMessage}]);
        setSendMessage("");
    }

    return (
        <StyledGetHelp>
            {messages.length === 1 ? (
                <div className="before-typing">
                    <figure className="img-holder">
                        <Image src={img} alt="get-help-img" />
                    </figure>
                    <h1>How may I assist you?</h1>
                    <p className="text">
                        Facing issues? I am here to assist you every step of the way. <br /> Let me know how I can help.
                    </p>
                    <div className="input-holder">
                        <Image src={documentIcon} alt="documentIcon" className="icon" />
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Ask anything..."
                                value={sendMessage}
                                onChange={e => setSendMessage(e.target.value)}
                            />
                            <button>
                                <Image src={sendIcon} alt="sendIcon" className="icon send" />
                            </button>
                        </form>
                    </div>
                    <p className="bottom-text">
                        "Please note, you’re currently chatting with our AI Bot. For real-time assistance, <br /> please
                        email us at:&nbsp;
                        <Link href="mailto:intdd@internationaldigitaldollar.com.">
                            intdd@internationaldigitaldollar.com."
                        </Link>
                    </p>
                </div>
            ) : (
                <div className="messages-holder">
                    <div className="messages-body">
                        {messages?.map((item, i) => (
                            <Message send={item?.type === "send"} key={i}>
                                <figure className="image-holder">
                                    {item?.type === "send" ? (
                                        <Image src={img} alt="avatar" width={50} height={50} />
                                    ) : (
                                        <Image src={avatar} alt="avatar" width={50} height={50} />
                                    )}
                                </figure>
                                <div>
                                    <div className="message">
                                        <p>{item?.message}</p>
                                    </div>
                                    <div className="time-holder">
                                        <span className="time">Today (6:02 PM)</span>
                                        <Image src={checkMarks} alt="checkMarks" width={20} height={20} />
                                    </div>
                                </div>
                            </Message>
                        ))}
                    </div>
                    <div className="message-type-section">
                        <form onSubmit={handleSubmit}>
                            <div className="input-holder">
                                <Image src={documentIcon} alt="documentIcon" className="icon" />
                                <input
                                    type="text"
                                    placeholder="Ask anything..."
                                    value={sendMessage}
                                    onChange={e => setSendMessage(e.target.value)}
                                />
                                <button>
                                    <Image src={sendIcon} alt="sendIcon" className="icon send" />
                                </button>
                            </div>
                        </form>
                        <p className="bottom-text">
                            "Please note, you’re currently chatting with our AI Bot. For real-time assistance, <br />
                            please email us at:&nbsp;
                            <Link href="mailto:intdd@internationaldigitaldollar.com.">
                                intdd@internationaldigitaldollar.com."
                            </Link>
                        </p>
                    </div>
                </div>
            )}
        </StyledGetHelp>
    );
};

export default GetHelp;
