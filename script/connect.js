//Learn Button load
const loadButton = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayButton(data.data));
};
function displayButton(button) {
  console.log(button);
  const lessonButtonContainer = document.getElementById("lesson-btn");
  for (let btn of button) {
    console.log(btn)
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
     <button class="btn text-[#422AD5] border-[#422AD5]"><i class="fa-solid fa-book-open-reader "></i> Lesson-${btn.level_no}</button>
     
    `;
    lessonButtonContainer.appendChild(btnDiv);
  }
}
loadButton();
