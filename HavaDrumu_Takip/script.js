const url = "https://api.openweathermap.org/data/2.5/";
const key = '6a963ac52754712c8ef4a242b0f93b4c';

const searchBar = document.getElementById('searchBar');
const btn = document.querySelector('.btn');
btn.addEventListener('click',setQuery1);

function setQuery1(){
  getResult(searchBar.value);
}

const setQuery = (e) => {
    if (e.key === "Enter") {
        getResult(searchBar.value);
    }
};

 const getResult = async (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;


    const post=await(await fetch(query)).json();
   return displayResult(post);
    
};



searchBar.addEventListener('keypress', setQuery);


function BtnClik(){
    console.log(searchBar.value);
}

function displayResult(post){
    console.log(post);
    let city=document.querySelector('.city');
    city.innerText=`${post.name}, ${post.sys.country}`

    let temp=document.querySelector('.temp');
    temp.innerText=`${Math.round(post.main.temp)}°C`;

    let desc=document.querySelector('.desc');
    desc.innerText=post.weather[0].description;

     let minmax=document.querySelector('.minmax');
     minmax.innerText=`${Math.floor(post.main.temp_min)}°C / ${Math.round(post.main.temp_max)}°C`;

}