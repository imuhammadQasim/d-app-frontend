import { Fetch } from "@/helpers/fetchWrapper";

const userService = {
  _url: `${process.env.NEXT_PUBLIC_USER_API}`,
  async getTransactions() {
    let res = await Fetch.get(`${this._url}/get-transaction-history`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },
};
export default userService;
