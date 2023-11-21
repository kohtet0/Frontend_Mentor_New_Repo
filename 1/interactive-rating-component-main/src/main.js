const rating = document.querySelector(".rating");
const rates = document.querySelector("#rates");
const rate = document.querySelectorAll(".rate");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const thankState = document.querySelector(".thank-state");

rates.addEventListener("click", (event) => {
  if (event.target.classList.contains("rate")) {
    rate.forEach((rate) => {
      rate.classList.remove("active");
    });
    event.target.classList.toggle("active");

    btn.addEventListener("click", () => {
      rating.classList.replace("flex", "hidden");
      thankState.classList.replace("hidden", "flex");
      result.innerText = event.target.innerText.trim();
    });
  }
  return;
});
