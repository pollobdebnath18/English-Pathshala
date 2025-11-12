//Load ----> Learn Button load
const loadButton = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayButton(data.data));
};
function displayButton(button) {
  // console.log(button);
  const lessonButtonContainer = document.getElementById("lesson-btn");
  for (let btn of button) {
    // console.log(btn)
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
     <button onclick="loadCategoryCard(${btn.level_no})" class="btn text-[#422AD5] border-[#422AD5]"><i class="fa-solid fa-book-open-reader "></i> Lesson-${btn.level_no}</button>
     
    `;
    lessonButtonContainer.appendChild(btnDiv);
  }
}

//Load ---> Word Meaning (click the Lesson)
const loadWordMeaning = () => {
  const url = `https://openapi.programming-hero.com/api/level/5`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWordMeaning(data.data));
};
function displayWordMeaning(words) {
  const wordMeaning = document.getElementById("wordMeaning");
  wordMeaning.innerHTML = "";
  for (let word of words) {
    const wordDiv = document.createElement("div");
    wordDiv.innerHTML = `
    <section class="w-11/12 mx-auto mt-30 mb-30 bg-gray-100 p-10 rounded-xl">
   <div class="card bg-base-100 card-md shadow-xl h-80 flex flex-col justify-between">
  <div class="card-body text-center">
    <h2 class="text-2xl font-bold pt-6">${word.word}</h2>
    <p class="text-lg">meaning / pronunciation</p>
    <p class="text-lg font-bold">${word.meaning} / ${word.pronunciation}</p>
  </div>
  <div class="flex justify-between items-center py-5 px-6">
    <i class="fa-solid fa-clock text-xl"></i>
    <i class="fa-solid fa-volume-high text-xl"></i>
  </div>
</div>
</section>


    `;
    wordMeaning.appendChild(wordDiv);
  }
}
//Load category card (api-4)
const loadCategoryCard = (id) => {
  //console.log(id);
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWordMeaning(data.data));
};

loadWordMeaning();
loadButton();
