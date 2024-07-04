const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");


const name_field = document.querySelector(".name-field");
const password_field = document.querySelector(".password-field");
const sign_btn = document.querySelector(".sign-btn");


const nameLists = ["Getachew Aweke","Kassahun Habtie","Mekdes Kalaeyu","Adiam Tesfameskel","Ashenafi Amache","Amanuel Yohannes","Dawit Belay","Helen Tesfa","Abubeker Beshir","Degefu Bekele","Mulusew Abebe","Beyene Mekuria","Adugna Zenebe","Ejigu Ledamo"]

function saveName(e) {
    localStorage.clear();
    if (nameLists.includes(e.target.value)) {
      localStorage.setItem('name', e.target.value);
    } else {
      localStorage.setItem('name', null)
    }
}

function signIn(e) {
    e.preventDefault(); // Prevent form submission
    const name = localStorage.getItem('name')

    if (!nameLists.includes(name)) {
      alert('INVALID CREDENTIALS PLEASE TRY AGAIN')
    } else {
      window.location.href = '/display.html'; // Redirect to the details page
    }
  
}

password_field.addEventListener("input", saveName); // Listen for input event
sign_btn.addEventListener("click", signIn); // Listen for click event


inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});
