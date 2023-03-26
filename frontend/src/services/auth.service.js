import axios from "axios";
export const login = ({ email, password }) => {
  axios
    .post("http://localhost:8800/api/auth/login", { email, password })
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem("token", JSON.stringify(token));
      window.location = "/admin";
    })
    .catch((err) => {
      alert("Incorect credentials");
    });
};

export const logout = () => {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
    window.location = "/auth";
  }
};
