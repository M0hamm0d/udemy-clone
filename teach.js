let guidesToStart = document.querySelector(".Pplan");
const curriculumPlan = document.querySelector(".curriculum-plan");
const videoRecord = document.querySelector(".video-record");
const courseLaunch = document.querySelector(".course-launch");
const planButton = document.querySelector(".plan-c");
const recordButton = document.querySelector(".record");
const launchButton = document.querySelector(".launch");
let curriculum = document.querySelector(".curriculum");
const vid = document.querySelector(".vid");
const course = document.querySelector(".crs");
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");

const previousBtn = document.querySelector(".prevbtn");
const nextBtn = document.querySelector(".nextbtn");
let currentScore = 0;

function activeSlide(theCurrentScore) {
  slide.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - theCurrentScore)}%)`; //0 100, 200
  });
}
activeSlide(currentScore);
function moveToNext() {
  if (currentScore < slide.length - 1) {
    currentScore++;
  } else {
    currentScore = 0;
  }
  activeSlide(currentScore);
}

function moveToPrev() {
  if (currentScore > 0) {
    currentScore--;
  } else {
    currentScore = slide.length - 1;
  }
  activeSlide(currentScore);
}

previousBtn.addEventListener("click", () => {
  moveToPrev();
});
nextBtn.addEventListener("click", () => {
  moveToNext();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    moveToNext();
  }
  if (e.key === "ArrowLeft") {
    moveToPrev();
  }
});
guidesToStart.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.className === "launch") {
    courseLaunch.style.display = "flex";
    videoRecord.style.display = "none";
    curriculumPlan.style.display = "none";
    e.target.style.color = "black";
    recordButton.style.color = "#6a6f73";
    planButton.style.color = "#6a6f73";
    course.style.borderBottom = "2px solid black";
    vid.style.borderBottom = "none";
    curriculum.style.borderBottom = "none";
  }
  if (e.target.className === "record") {
    courseLaunch.style.display = "none";
    videoRecord.style.display = "flex";
    curriculumPlan.style.display = "none";
    e.target.style.color = "black";
    launchButton.style.color = "#6a6f73";
    planButton.style.color = "#6a6f73";
    vid.style.borderBottom = "2px solid black";
    course.style.borderBottom = "none";
    curriculum.style.borderBottom = "none";
  }
  if (e.target.className === "plan-c") {
    courseLaunch.style.display = "none";
    videoRecord.style.display = "none";
    curriculumPlan.style.display = "flex";
    e.target.style.color = "black";
    recordButton.style.color = "#6a6f73";
    launchButton.style.color = "#6a6f73";
    course.style.borderBottom = "none";
    vid.style.borderBottom = "none";
    curriculum.style.borderBottom = "2px solid black";
  }
});
