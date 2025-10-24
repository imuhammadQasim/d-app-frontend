const { Fetch } = require("@/helpers/fetchWrapper");
import { setCookie } from "@/helpers/common";
const authService = {
  _url: `${process.env.NEXT_PUBLIC_USER_API}`,

  async login(payload) {
    let res = await Fetch.post(`${this._url}/login`, payload, false, true);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async getStripeConfig() {
    let res = await Fetch.get(`${this._url}/config`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async payment(payload) {
    let res = await Fetch.post(`${this._url}/create-payment-intent`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    // const { message } = await res.json();
    // throw new Error(message ?? "Something went wrong");
    const errorResponse = await res.json();
    const message =
      errorResponse?.message ||
      errorResponse?.error?.message ||
      errorResponse?.error ||
      "Something went wrong";

    throw new Error(message);
  },

  async walletPaymentVerify(payload) {
    let res = await Fetch.post(`${this._url}/wallet-payment-webhook`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async fetchUserDetails() {
    let res = await Fetch.get(`${this._url}/get-user-details`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async signUp(payload) {
    const res = await Fetch.post(`${this._url}/register`, payload, false, true);

    if (res.status >= 200 && res.status < 300) {
      return await res.json();
    } else {
      const errorData = await res.json();
      const error = new Error(errorData.message || "Something went wrong");
      error.status = res.status;
      throw error;
    }
  },

  async resendOtp(payload) {
    let res = await Fetch.get(`${this._url}/resend-otp`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async verifyEmail(payload) {
    let res = await Fetch.post(
      `${this._url}/verify-email`,
      payload,
      false,
      true
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      setCookie(process.env.NEXT_PUBLIC_CRM_TOKEN_COOKIE, res?.token);
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async verifyKyc(formData) {
    let res = await Fetch.upload(
      `${this._url}/get-kyc-verified`,
      "POST",
      formData
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async forgotPassword(payload) {
    let res = await Fetch.post(
      `${this._url}/send-verification-email`,
      payload,
      false,
      true
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async resetPassword(payload) {
    let res = await Fetch.post(
      `${this._url}/set-password`,
      payload,
      false,
      false
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },
  // In your authService.js file

  async createPaymentIntent(payload) {
    let res = await Fetch.post(
      `${this._url}/create-new-payment-intent`,
      payload
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const errorResponse = await res.json();
    const message =
      errorResponse?.message ||
      errorResponse?.error?.message ||
      errorResponse?.error ||
      "Failed to create payment intent.";

    throw new Error(message);
  },
};
export default authService;
