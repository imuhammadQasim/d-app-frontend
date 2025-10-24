/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-plusplus */

import {differenceInCalendarDays, differenceInDays, addHours, setHours, isBefore, format} from "date-fns";
import styled from "styled-components";

export const setCookie = (name, value, days, domain) => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = `; expires=${date.toUTCString()}`;
    }
    const domainString = domain ? `; domain=${domain}` : "";

    document.cookie = `${name}=${value || ""}${expires}; path=/${domainString}`;

    return true;
};

export const getCookie = name => {
    const nameEQ = `${name}=`;
    const ca = typeof document !== "undefined" && document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

export const clearCookie = name => {
    if (typeof document !== "undefined") {
        document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    } else {
        console.warn("clearCookie function called in a non-browser environment");
    }
    return true;
};

export const formatNumber = number => {
    return new Intl.NumberFormat().format(number);
};

export const convertPdfBase64 = file =>
    new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result);
        };
    });

// export const compressImage = (file, type = 'JPEG') =>
//   new Promise(resolve => {
//     Compress.imageFileResizer(
//       file,
//       Infinity,
//       Infinity,
//       type,
//       70,
//       0,
//       uri => {
//         resolve(uri);
//       },
//       'base64',
//     );
//   });

export const capitalize = (str = "") => {
    const arr = str.toLowerCase().split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    return str2;
};

export const getStatusIconClass = (status = "") => {
    switch (status.trim().toLowerCase()) {
        case "pending":
            return "icon-clock";
        case "processing":
            return "icon-clock";
        case "approved":
            return "icon-check-circle";
        case "rejected":
            return "icon-error-circle";
        case "cancelled":
            return "icon-times-circle";
        default:
            return "icon-warning";
    }
};

function changeTimezone(date, ianatz) {
    // suppose the date is 12:00 UTC
    const invdate = new Date(
        date.toLocaleString("en-US", {
            timeZone: ianatz,
        })
    );

    // then invdate will be 07:00 in Toronto
    // and the diff is 5 hours
    const diff = date.getTime() - invdate.getTime();

    // so 12:00 in Toronto is 17:00 UTC
    return new Date(date.getTime() - diff); // needs to substract
}

export const getDateObject = e => changeTimezone(new Date(e), "Canada/Eastern");

export const convertToCurrencyFormat = (amount = "0") =>
    `$${Number(amount)
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

export const shortenString = (str, len = 10) => {
    if (!str) return null;
    if (str.length > len) {
        return `${str.substring(0, len)}...`;
    }
    return str;
};

export const convertReadable = (amount = 0) =>
    `${
        Math.abs(amount) > 999
            ? `${Math.sign(amount) * (Math.abs(amount) / 1000).toFixed(1)}K`
            : Math.sign(amount) * Math.abs(amount)
    }`;

export const convertToBase64 = file =>
    new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result);
        };
    });

export const getVisitNo = visit => {
    switch (visit) {
        case 1:
            return `${String(visit)}st`;
        case 2:
            return `${String(visit)}nd`;
        case 3:
            return `${String(visit)}rd`;
        default:
            return `${String(visit)}th`;
    }
};
export const generatePsscode = length => {
    let zero = "";
    for (let index = 1; index < length; index++) {
        zero += "0";
    }
    const firstVal = 1 + zero;
    const secondVal = 9 + zero;
    return Math.floor(Number(firstVal) + Math.random() * Number(secondVal));
};

export const getOfferDetailsAppView = ({
    offer_type,
    // eslint-disable-next-line no-unused-vars
    offer_details: {
        minimum_amount,
        minimum_visit,
        maximum_amount,
        plastk_points_value,
        plastk_points,
        initial_offer,
        every_day_offer,
    },
    stores,
    duration: {startDate, endDate},
}) => {
    if (!stores.length || !offer_type || !plastk_points_value || !startDate || !endDate) return "";
    try {
        switch (offer_type) {
            case "dollarBased":
                return (
                    <>
                        <p>
                            Spend at least {convertToCurrencyFormat(minimum_amount, 0)} and receive{" "}
                            {plastk_points_value} plastk points. Offer valid between{" "}
                            {`${format(
                                getDateObject(new Date(startDate).toString()),
                                "MMM do yyyy hh:mm a"
                            )} To ${format(getDateObject(new Date(endDate).toString()), "MMM do yyyy hh:mm a")}`}
                        </p>
                        <p>*Terms And Conditions Apply</p>
                    </>
                );

            case "repeatVisit":
                return (
                    <>
                        <p>
                            Visit {minimum_visit} times and receive {plastk_points_value} plastk points on the{" "}
                            {(() => {
                                switch (+String(minimum_visit).split("")[String(minimum_visit).split("").length - 1]) {
                                    case 1:
                                        return `${String(minimum_visit)}st`;
                                    case 2:
                                        return `${String(minimum_visit)}nd`;
                                    case 3:
                                        return `${String(minimum_visit)}rd`;
                                    default:
                                        return `${String(minimum_visit)}th`;
                                }
                            })()}{" "}
                            visit. Offer valid between{" "}
                            {`${format(
                                getDateObject(new Date(startDate).toString()),
                                "MMM do yyyy hh:mm a"
                            )} to ${format(getDateObject(new Date(endDate).toString()), "MMM do yyyy hh:mm a")}`}
                        </p>
                        <p>*Terms And Conditions Apply</p>
                    </>
                );

            case "percentBased":
                return (
                    <>
                        <p>
                            Spend ${minimum_amount} or more and receive {plastk_points}% in plastk points, up to a
                            maximum of{" "}
                            {plastk_points_value % 1 !== 0
                                ? convertToCurrencyFormat(plastk_points_value, 2, false)
                                : convertToCurrencyFormat(plastk_points_value, 0, false)}
                            points. Offer valid between{" "}
                            {`${format(
                                getDateObject(new Date(startDate).toString()),
                                "MMM do yyyy hh:mm a"
                            )} to ${format(getDateObject(new Date(endDate).toString()), "MMM do yyyy hh:mm a")}`}
                        </p>
                        <p>*Terms And Conditions Apply</p>
                    </>
                );
            case "initialOffer":
                return (
                    <>
                        <p>
                            Visit {minimum_visit} times and receive {plastk_points_value} plastk points on the &nbsp;
                            {(() => {
                                switch (+String(minimum_visit).split("")[String(minimum_visit).split("").length - 1]) {
                                    case 1:
                                        return `${String(minimum_visit)}st`;
                                    case 2:
                                        return `${String(minimum_visit)}nd`;
                                    case 3:
                                        return `${String(minimum_visit)}rd`;
                                    default:
                                        return `${String(minimum_visit)}th`;
                                }
                            })()}{" "}
                            visit. Offer valid between
                            {`${format(
                                getDateObject(new Date(startDate).toString()),
                                "MMM do yyyy hh:mm a"
                            )} to ${format(getDateObject(new Date(endDate).toString()), "MMM do yyyy hh:mm a")}`}
                        </p>
                        <p>*Terms And Conditions Apply</p>

                        {/* {Object.values(initial_offer).map((val, index) => (
              <p key={index + 1}>
                {`${getVisitNo(index + 1)} visit- ${val}% in Plastk Reward Points up to`}&nbsp;
                {`${((val / 100) * maximum_amount * 200).toFixed(0)}`}&nbsp;Points
              </p>
            ))}
            {every_day_offer && (
              <p>
                {`Everyday visit- ${every_day_offer}% in Plastk Reward Points up to`}&nbsp;
                {`${((every_day_offer / 100) * maximum_amount * 200).toFixed(0)}`}&nbsp;Points
              </p>
            )} */}
                    </>
                );
            default:
                return (
                    <>
                        <p>Wrong Offer Type ....</p>
                        <p>Offer valid between ---- ----</p>
                        <p>*Terms And Conditions Apply</p>
                    </>
                );
        }
    } catch (e) {
        return (
            <>
                <p>{e.message}</p>
                <p>Offer valid between ---- ----</p>
                <p>*Terms And Conditions Apply</p>
            </>
        );
    }
};
const validateImage = url =>
    new Promise((resolve, reject) => {
        const img = new Image(url);
        // eslint-disable-next-line no-multi-assign
        img.onerror = img.onabort = async function () {
            reject();
        };
        img.onload = function () {
            resolve();
        };
        img.src = url;
    });

const checkValidImageProtocol = url => {
    if (/(http(s?)):\/\//i.test(url)) {
        return true;
    }
    return false;
};

const checkValidImageExtension = url => {
    if (["png", "PNG", "jpg", "JPG", "jpeg", "JPEG"].includes(url.split(/[#?]/)[0].split(".").pop().trim())) {
        return true;
    }
    return false;
};

export const checkInValidImage = async url => {
    try {
        await validateImage(url);
        return !(checkValidImageExtension(url) && checkValidImageProtocol(url));
    } catch (ex) {
        return true;
    }
};

export const convertToFormData = obj => {
    const formData = new FormData();

    Object.keys(obj).forEach(key => {
        if (key === "bankInfo" || (key === "inheritanceInfo" && typeof obj[key] === "object")) {
            formData.append(key, JSON.stringify(obj[key]));
        } else {
            formData.append(key, obj[key]);
        }
    });
    return formData;
};
export const convertDateToISO = dateStr => {
    const [day, month, year] = dateStr.split("/");
    return `${year}-${month}-${day}`;
};
// Format the date
const getOrdinalSuffix = day => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
};
export const formatDateWithSuffix = dateObj => {
    const date = new Date(dateObj);

    const day = format(date, "d"); // get the day without leading zeros
    const monthYear = format(date, "MMMM, yyyy"); // get the month and year
    const ordinalSuffix = getOrdinalSuffix(parseInt(day)); // get the ordinal suffix
    return `${day}${ordinalSuffix} ${monthYear}`;
};

// Calculate the number of days left
export const daysLeft = dateObj => {
    const date = new Date(dateObj);
    const daysLeft = differenceInCalendarDays(date, new Date());

    return daysLeft < 10 ? `0${daysLeft} days` : `${daysLeft.toString()} days`;

    // return formatDistanceToNow(date, {addSuffix: false});
};

export const bas64toFile = async (dataUrl, fileName) => {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    return new File([blob], fileName, {type: "image/jpg"});
};

export const checkAge = birthdate => {
    let birthDate = new Date(birthdate);
    if (isNaN(birthDate)) {
        return "Invalid date format. Please enter a valid date.";
    }

    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();
    let dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    // Check if age is at least 18
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

export const removeSpaces = (str = "") => {
    return str.replace(/ /g, "");
};

export const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

export const GeoCode = async value => {
    try {
        const {results} = typeof window !== "undefined" && (await new window.google.maps.Geocoder().geocode(value));

        if (!results) {
            throw Error("Unable to load maps");
        }
        const {address_components, geometry, place_id, formatted_address, types} = results[0];
        const address = {};
        // eslint-disable-next-line no-shadow
        address_components?.forEach(({short_name, types}) => {
            if (types.includes("administrative_area_level_1")) {
                address.state = short_name;
            } else if (types.includes("administrative_area_level_2")) {
                address.county = short_name;
            } else if (types.includes("locality")) {
                address.city = short_name;
            } else address[types[0]] = short_name;
        });

        return {
            ...address,
            types,
            place_id,
            latlng: {
                lat: geometry?.location?.lat(),
                lng: geometry?.location?.lng(),
            },
            formatted_address,
        };
    } catch (err) {
        throw Error(err?.message ?? "Unable to load maps");
    }
};

export const formatDate = date => {
    const offset = date.getTimezoneOffset();
    const localDate = new Date(date.getTime() - offset * 60 * 1000);
    return localDate.toISOString().split("T")[0];
};
export const calculateTotalNights = (startDate, endDate) => {
    // Parse the start and end dates into Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Ensure the provided dates are valid
    if (isNaN(start) || isNaN(end)) {
        return "Invalid date format. Please provide valid dates.";
    }

    // Adjust check-in time to 3 PM (15:00) on the start date
    setHours(start, 15, 0, 0, 0); // Set check-in to 3 PM on the start date

    // Adjust check-out time to 11 AM (11:00) on the next day of the end date
    end.setDate(end.getDate()); // Move the checkout date to the next day
    setHours(end, 11, 0, 0, 0); // Set the checkout time to 11 AM on the next day

    // Ensure the check-out time is after the check-in time
    if (isBefore(end, start)) {
        return "Check-out time should be after check-in time.";
    }

    // Calculate the difference in days (inclusive of both dates)
    const totalNights = differenceInDays(end, start);

    return totalNights;
};







