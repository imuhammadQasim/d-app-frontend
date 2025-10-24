import { clearCookie, getCookie } from "./common";

let trigger = false;
const debounceInterval = 1000;
let debounceTimeout;

function debounceFetch(url, requestOptions) {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }

  return new Promise((resolve) => {
    debounceTimeout = setTimeout(() => {
      fetch(url, requestOptions).then((res) => {
        resolve(handleResponse(res));
      });
    }, debounceInterval);
  });
}

function handleResponse(response) {
  if (
    response.status === 401 &&
    !trigger &&
    getCookie(process.env.NEXT_PUBLIC_CRM_TOKEN_COOKIE)
  ) {
    trigger = true;
    clearCookie(process.env.NEXT_PUBLIC_CRM_TOKEN_COOKIE);
    // clearCookie(process.env.REACT_APP_ALLOWED_PAGES_COOKIE);
    window.location.reload();
  }
  return response;
}
function get(url, debounce = false) {
  const headers = {
    "X-path": window.location.pathname,
    "Content-Type": "application/json",
    authorization: `Bearer ${getCookie(
      process.env.NEXT_PUBLIC_CRM_TOKEN_COOKIE
    )}`,
  };
  const requestOptions = {
    method: "GET",
    headers,
  };
  if (debounce) return debounceFetch(url, requestOptions);
  else return fetch(url, requestOptions).then((res) => handleResponse(res));
}

function post(url, body, debounce = false, signUp = false) {
  const headers = {
    "X-path": window.location.pathname,
    "Content-Type": "application/json",

    authorization: signUp
      ? "Bearer intd-secret-token"
      : `Bearer ${getCookie(process.env.NEXT_PUBLIC_CRM_TOKEN_COOKIE)}`,
  };

  const requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  };

  if (debounce) return debounceFetch(url, requestOptions);
  else return fetch(url, requestOptions).then((res) => handleResponse(res));
}

function upload(url, method, body) {
  const headers = {
    // 'Content-Type': 'multipart/form-data',
    authorization: `Bearer ${getCookie(
      process.env.NEXT_PUBLIC_CRM_TOKEN_COOKIE
    )}`,
  };

  const requestOptions = {
    method: method === "POST" ? "POST" : "PUT",
    headers,
    body,
  };

  return fetch(url, requestOptions).then((res) => handleResponse(res));
}

function put(url, body, debounce = false) {
  const headers = {
    "X-path": window.location.pathname,
    "Content-Type": "application/json",
    authorization: `Bearer ${getCookie(
      process.env.NEXT_PUBLIC_CRM_TOKEN_COOKIE
    )}`,
  };
  const requestOptions = {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  };
  if (debounce) return debounceFetch(url, requestOptions);
  else return fetch(url, requestOptions).then((res) => handleResponse(res));
}

function _delete(url, body, debounce = false) {
  const headers = {
    "X-path": window.location.pathname,
    "Content-Type": "application/json",
    authorization: `Bearer ${getCookie(
      process.env.NEXT_PUBLIC_CRM_TOKEN_COOKIE
    )}`,
  };
  const requestOptions = {
    method: "DELETE",
    headers,
    body: JSON.stringify(body),
  };
  if (debounce) return debounceFetch(url, requestOptions);
  else return fetch(url, requestOptions).then((res) => handleResponse(res));
}

function patch(url, body, debounce = false) {
  const headers = {
    "X-path": window.location.pathname,
    "Content-Type": "application/json",
    authorization: `Bearer ${getCookie(
      process.env.NEXT_PUBLIC_CRM_TOKEN_COOKIE
    )}`,
  };
  const requestOptions = {
    method: "PATCH",
    headers,
    body: JSON.stringify(body),
  };
  if (debounce) return debounceFetch(url, requestOptions);
  else return fetch(url, requestOptions).then((res) => handleResponse(res));
}

export const Fetch = {
  get,
  post,
  put,
  delete: _delete,
  patch,
  upload,
};
