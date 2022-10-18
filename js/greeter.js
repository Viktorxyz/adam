const username = document.getElementById("username");
const password = document.getElementById("password");

const shutdown = document.getElementById("shutdown");
const restart = document.getElementById("restart");
const hibernate = document.getElementById("hibernate");

shutdown.addEventListener("click", () => { lightdm.shutdown(); });
restart.addEventListener("click", () => { ligthdm.restart(); });
hibernate.addEventListener("click", () => { ligthdm.hibernate(); });

test
