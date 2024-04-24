import { Client, Account, ID } from "appwrite";

type CreateUserAccount = {
  email: string;
  password: string;
  phoneNumber: string;
  repeatPassword: string,
};

type LoginWithEmail = {
  email: string;
  password: string;
};

type LoginWithPhone = {
  phoneNumber: string;
  password: string;
};

type UserAccount = {
  email: string;
  phoneNumber: string;
};

class AppwriteService {
  account: Account;

  constructor() {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("66259128762986b20dac");
    this.account = new Account(client);
  }

  async createAccount({
    email,
    password,
    repeatPassword,
    phoneNumber,
  }: CreateUserAccount): Promise<UserAccount | { error: string }> {
    try {
      const result = await this.account.create(
        ID.unique(),
        email,
        password,
        phoneNumber
      );
      if (result.$id) {
        return { email, phoneNumber };
      } else {
        throw new Error("Account creation failed");
      }
    } catch (error) {
      return { error: String(error) };
    }
  }

  async loginWithEmail({
    email,
    password,
  }: LoginWithEmail): Promise<{ error: string } | any> {
    try {
      return await this.account.createSession(email, password);
    } catch (error) {
      return { error: String(error) };
    }
  }

  async loginWithPhone({
    phoneNumber,
    password,
  }: LoginWithPhone): Promise<{ error: string } | any> {
    try {
      return await this.account.createSession(phoneNumber, password);
    } catch (error) {
      return { error: String(error) };
    }
  }

  async getCurrentUser(): Promise<UserAccount | { error: string }> {
    try {
      const user = await this.account.get();
      return {
        email: user.email,
        phoneNumber: user.prefs?.phoneNumber || "",
      };
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser() :: " + error);
      return { error: String(error) };
    }
  }

  async logout(): Promise<{ error: string } | any> {
    try {
      return await this.account.deleteSession("current");
    } catch (error) {
      console.log("Appwrite service :: logout() :: " + error);
      return { error: String(error) };
    }
  }
}

export default AppwriteService;
