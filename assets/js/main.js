// RESPONSIVE NAVBAR
// document.querySelector(".header-btn").addEventListener("click", () => {
//     document.querySelector(".header-links").classList.toggle("toggled")
// })

// Video trailer
let trailer = document.getElementById("trailer");
let playVideo = document.getElementById("play-video");
playVideo.addEventListener("click", () => {
    trailer.classList.toggle("active");
})
let closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", () => {
    trailer.classList.remove("active");
})

// Increase Numbers
let nums = document.querySelectorAll(".nums .num");
let sectionHome = document.querySelector(".home");

nums.forEach((num) => startCount(num));
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        let counter = el.textContent++;
        if(counter == goal) {
            clearInterval(count)
        }
    }, 100)
}

// Fetch Json
// Get Div
const blogs = document.querySelector(".blog-cards");
const jsonFile = "./products.json";
fetch(jsonFile).then(res => {
    return res.json();
}).then(data => {
    data.map(product => {
        const {id, image, title, description, btn} = product;
        blogs.innerHTML += 
        `
        <div class="blog-wrapper"  data-product="${id}">
           
            <div class="box">
            <div class="image">
              <img src="${image}" alt="camera">
            </div>
            <div class="info">
              <h2 class="blog-title">${title}</h2>
              <p class="blog-desc">${description}</p>
            </div>
            <div class="blog-button">
              <button class="blog-btn">${btn}</button>
            </div>
            </div>
            
        </div>
        `
    })
})