//show nav , learn section when correctly login
function login() {
  document.getElementById("nav").classList.remove("hidden");
  document.getElementById("learnSection").classList.remove("hidden");
  document.getElementById("oneLesson").classList.remove("hidden");
  document.getElementById('faqSection').classList.remove('hidden');
}
// Banner hide when login
function bannerHide() {
  document.getElementById("banner").classList.add("hidden");
}
function hide() {
  document.getElementById("oneLesson").classList.add("hidden");
  document.getElementById("wordMeaning").classList.remove("hidden");
}

function removeActiveClass() {
  const activeButtons = document.getElementsByClassName("active");
  for (let btn of activeButtons) {
    btn.classList.remove("active");
  }
}

//Load ----> Learn Button load
const loadButton = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayButton(data.data));
};

//load Word Details
const loadWordDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWordDetails(data.data));
};

//Load ---> Word Meaning (click the Lesson)
const loadWordMeaning = () => {
  const url = `https://openapi.programming-hero.com/api/level/5`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWordMeaning(data.data));
};

function displayButton(button) {
  // console.log(button);
  const lessonButtonContainer = document.getElementById("lesson-btn");
  for (let btn of button) {
    // console.log(btn)
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
     <button id="btn-${btn.level_no}" onclick="loadCategoryCard(${btn.level_no})" class="btn text-[#422AD5] border-[#422AD5]  "><i class="fa-solid fa-book-open-reader "></i> Lesson-${btn.level_no}</button>
     
    `;
    lessonButtonContainer.appendChild(btnDiv);
  }
}

const displayWordDetails = (details) => {
  console.log(details);
  document.getElementById("wordDetails").showModal();
  const detailsContainer = document.getElementById("details_container");
  detailsContainer.innerHTML = `
  <div class="flex justify-center">
        <div class="card bg-base-50  shadow-sm mt-6">
          <div class="card-body p-3 pl-6 shadow-xl">
            <h2 class="card-title text-2xl font-bold">
              ${details.word} ( <i class="fa-solid fa-microphone"></i>: ${details.pronunciation} )
            </h2>
            <h3 class="font-bold text-xl">Meaning</h3>
            <h3 class="font-bold text-xl">${details.meaning}</h3>
            <br>
            <h3 class="font-bold text-xl">Example</h3>
            <h3 class=" text-lg text-black">${details.sentence}.</h3>
            <p class="text-lg font bold">সমার্থক শব্দ হলো :</p>

          </div>
        </div>
      </div>
  `;
};

function displayWordMeaning(words) {
  const wordMeaning = document.getElementById("wordMeaning");
  const noCard = document.getElementById("no-card");
  wordMeaning.innerHTML = "";
  noCard.innerHTML = "";

  if (words.length == 0) {
    hide();
    noCard.innerHTML = `
     <div class="mt-12 bg-gray-100 p-12 text-center">
          <div class="flex justify-center ">
           <img src="assets/alert-error.png" alt="">
          </div>
          <p>এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
          <h1 class="text-4xl pt-3 rounded-xl">নেক্সট Lesson এ যান</h1>
        </div>
    `;
    return;
  }
  for (let word of words) {
    const wordDiv = document.createElement("div");
    wordDiv.innerHTML = `
        <div id="wordMeaning" class=" pb-4 ">
          <div class="card w-80 bg-base-100 card-md shadow-xl">
            <div class="card-body text-center">
              <h2 class="text-2xl font-bold pt-6">${word.word}</h2>
              <p class="text-lg">meaning / pronunciation</p>
              <p class="text-lg font-bold">${word.meaning} / ${word.pronunciation}</p>
              <div class="flex justify-between items-center py-5">
                <button  onclick=loadWordDetails(${word.id}) class="btn"><i class="fa-solid fa-clock text-xl"></i></button>
                <button class="btn"> <i class="fa-solid fa-volume-high text-xl"></i></button>
              </div>
            </div>
          </div>
        </div>
   


    `;
    wordMeaning.appendChild(wordDiv);
  }
}

//Load category card (api-4)
const loadCategoryCard = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const clickedButton = document.getElementById(`btn-${id}`);
      removeActiveClass();

      clickedButton.classList.add("active");
      hide();

      displayWordMeaning(data.data);
    });
};

loadWordMeaning();
loadButton();

//Input Field for login
document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const convertedPin = parseInt(input2);
    if (input1.length > 0) {
      if (input2.length > 0) {
        if (convertedPin === 12345) {
          login();
          bannerHide();
        } else {
          alert("Incorrect PIN. Please try again.");
        }
      } else {
        alert("Please Enter Your PIN");
      }
    } else {
      alert("Please Enter Your Name");
    }
  });

// FAQ Section when click faq button
function FAQ() {
  //first remove hidden class from faq section
  const faqSection = document.getElementById("faqSection");
  faqSection.classList.remove("hidden");

  // scroll smooth
  faqSection.scrollIntoView({ behavior: "smooth" });
}

//Learn Section when click learn button
function Learn() {
  const learnSection = document.getElementById("learnSection");
  learnSection.classList.remove("hidden");
  learnSection.scrollIntoView({ behavior: "smooth" });
}
