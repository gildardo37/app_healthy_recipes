const API = "https://healthy-recipes-api.herokuapp.com/api";
const TOKEN_KEY = "MY_TOKEN";
const client = {
  async login(email: string, password: string) {
    const body: any = {
      email,
      password,
    };
    const res = await fetch(`${API}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  },
  saveToken(token: string): boolean {
    localStorage.setItem(TOKEN_KEY, token);
    return typeof localStorage.getItem(TOKEN_KEY) !== "undefined";
  },
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },
};

export default client;
