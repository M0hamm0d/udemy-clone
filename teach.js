let guidesToStart = document.querySelector('.Pplan');
const curriculumPlan = document.querySelector('.curriculum-plan')
const videoRecord = document.querySelector('.video-record');
const courseLaunch = document.querySelector('.course-launch');
const planButton = document.querySelector('.plan-c');
const recordButton = document.querySelector('.record');
const launchButton = document.querySelector('.launch');
let curriculum = document.querySelector('.curriculum');
const vid = document.querySelector('.vid');
const crs = document.querySelector('.crs');


guidesToStart.addEventListener('click', function(e){
    e.preventDefault();
    if (e.target.className === 'launch'){
        courseLaunch.style.display = 'flex'
        videoRecord.style.display = 'none'
        curriculumPlan.style.display = 'none'
        e.target.style.color = 'black'
        recordButton.style.color = '#6a6f73'
        planButton.style.color = '#6a6f73';
        crs.style.borderBottom = '2px solid black';
        vid.style.borderBottom = 'none';
        curriculum.style.borderBottom = 'none';
    }
    if (e.target.className === 'record'){
        courseLaunch.style.display = 'none'
        videoRecord.style.display = 'flex'
        curriculumPlan.style.display = 'none'
        e.target.style.color = 'black'
        launchButton.style.color = '#6a6f73'
        planButton.style.color = '#6a6f73';
        vid.style.borderBottom = '2px solid black';
        crs.style.borderBottom = 'none';
        curriculum.style.borderBottom = 'none';
    }
    if (e.target.className === 'plan-c'){
        courseLaunch.style.display = 'none'
        videoRecord.style.display = 'none'
        curriculumPlan.style.display = 'flex'
        e.target.style.color = 'black'
        recordButton.style.color = '#6a6f73'
        launchButton.style.color = '#6a6f73';
        crs.style.borderBottom = 'none';
        vid.style.borderBottom = 'none';
        curriculum.style.borderBottom = '2px solid black';
    }
})