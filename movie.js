/** @format */

let addNewMovieBtn = document.getElementById("newMovie");

addNewMovieBtn.addEventListener("click", () => {
  // console.log("hii");

  window.location.href = "form.html";
});

let loginDeatils = JSON.parse(localStorage.getItem("loginuser"));
// console.log(loginDeatils);

if (loginDeatils) {
  let userinfo = document.createElement("div");
  userinfo.innerHTML = `
  <div class="profile-content">
  <div class='profile-icon><i class="fa-regular fa-face-smile" style="color: #FFD43B;"></i>
</div>
  <div class='profile-info><h2>Welcome,${loginDeatils.regiName}!</h2></div>
  </div>
  `;
  document.body.prepend(userinfo);
}

let container = document.getElementById("maincontainer");

let movie = new XMLHttpRequest();

movie.open("GET", "https://mimic-server-api.vercel.app/movies");

movie.onload = () => {
  let arr2 = JSON.parse(movie.response);
  // console.log("hii");

  let adult = document.getElementById("adult");

  arr2.forEach((data) => {
    if (data.adult == false) {
      adult = " Below 18+";
    } else {
      adult = " Above 18+";
    }

    container.innerHTML += `
        <div id="card-cont">
            <img src="${data.poster_path}" alt="">
            <h3 class="title"> <span> Title </span> : ${data.title}</h3>
            <p> <span> Language </span> : ${data.original_language}</p>
            <p> <span> Rating </span>:<i class="fa-regular fa-star" style="color: #FFD43B;"></i> ${data.vote_average} / 10</p>
            <p> <span> Release  Date  </span> : ${data.release_date}</p>
            <p id="adult"> <span> Adult </span> : ${adult} </p>
            <button id="Booking"> Book Now</button>

        </div>
        
        `;
  });
};

movie.send();


function addnewMovie(){
  
let formdata=document.getElementById("addmovieform");

newmoveibtn.addEventListener("click",()=>{
formdata.style.display="block"
})
}