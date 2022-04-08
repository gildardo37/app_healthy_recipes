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
  async signup(data: string) {
    const res = await fetch(`${API}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    return await res.json();
  },
  async getMyMeals() {
    const res = await fetch(`${API}/my_meals/getAll`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.setToken(),
      },
    });
    return await res.json();
  },
  async getUserInfo() {
    const res = await fetch(`${API}/users/getUser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.setToken(),
      },
    });
    return await res.json();
  },
  async generateMeal(calories: string) {
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=${calories}`;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "db42bd4e2cmsh79e67a7437d6e45p1b9c09jsn8de802a6c63e",
      },
    });
    return await res.json();
  },
  async validateToken() {
    const res = await fetch(`${API}/users/validateToken`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.setToken(),
      },
    });
    return await res.json();
  },
  async addMeal(meal: any) {
    const res = await fetch(`${API}/my_meals/createMeal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.setToken(),
      },
      body: JSON.stringify(meal),
    });
    return await res.json();
  },
  async deleteMeal(id: any) {
    const res = await fetch(`${API}/my_meals/deleteMeal/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.setToken(),
      },
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
  setToken() {
    const token = this.getToken() === null ? "" : this.getToken();
    return `Bearer ${token}`;
  },
};

export default client;
