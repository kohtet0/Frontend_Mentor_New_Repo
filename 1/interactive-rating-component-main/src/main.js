// selector
const rates = document.querySelector("#rates");
const rate = document.querySelectorAll(".rate");
const btn = document.querySelector(".btn");
const uiOne = document.querySelector(".ui_one");
const forUiTwo = document.getElementById("forUiTwo");

// function

/*
rates.addEventListener("click", (event) => {
  uiOne.remove;

  const rate = event.target.innerText;
  const div = document.createElement("div");
  div.className = "min-h-screen flex justify-center items-center";
  div.innerHTML = `
    <div class="mx-auto bg-gradient-to-br from-dark-blue card w-96 shadow-xl">
        <div class="card-body flex justify-center items-center p-6">
            <div class="m-5">
            <img
                src="./src/images/illustration-thank-you.svg"
                alt="star"
                class=""
            />
            </div>

            <div class="mb-5 flex justify-center items-center">
            <p class="bg-dark-blue text-orange text-fs px-5 py-2 rounded-full">
                You selected ${rate} out of 5
            </p>
            </div>

            <h2 class="card-title text-3xl mb-5 text-white">Thank you!</h2>
            <p class="text-fs mb-5 text-center">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
            </p>
        </div>
    </div>
  `;

  uiOne.remove()
  forUiTwo.append(div)

  return div;
});
*/

// const rate = rates.addEventListener("click", (e) => {
//   const currentRate = e.target;
//   currentRate.classList.toggle("active:bg-light-grey");
//   currentRate.classList.toggle("bg-white");
//   currentRate.classList.toggle("bg-dark-blue");
//   currentRate.classList.toggle("text-orange");
//   currentRate.classList.toggle("text-light-grey");

//   return currentRate;
// });

rate.forEach((el) => {
  el.addEventListener("click", () => {
    rate.forEach((e) => {
      e.classList.remove(
        "active:bg-medium-grey",
        "focus:outline-none",
        "focus:ring"
      );
    });
    el.classList.add(
      "active:bg-medium-grey",
      "focus:outline-none",
      "focus:ring"
    );
  });
});

btn.addEventListener("click", (event) => {
  const rate = document.getElementsByClassName("active:bg-medium-grey");
  const rateText = rate[0].innerText;

  uiOne.remove();
  const div = document.createElement("div");
  div.className = "min-h-screen flex justify-center items-center";
  div.innerHTML = `
    <div class="mx-auto bg-gradient-to-br from-dark-blue card w-96 shadow-xl">
        <div class="card-body flex justify-center items-center p-6">
            <div class="m-5">
            <img
                src="./src/images/illustration-thank-you.svg"
                alt="star"
                class=""
            />
            </div>

            <div class="mb-5 flex justify-center items-center">
            <p class="bg-dark-blue text-orange text-fs px-5 py-2 rounded-full">
                You selected ${rateText} out of 5
            </p>
            </div>

            <h2 class="card-title text-3xl mb-5 text-white">Thank you!</h2>
            <p class="text-fs mb-5 text-center">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
            </p>
        </div>
    </div>
  `;

  forUiTwo.append(div);

  return div;
});
