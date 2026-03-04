const API_KEY = "pub_e70bb66dd7bd425490da1ad5a4735cc5";
const url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en`;

const newsContainer = document.getElementById("news-container");

async function getNews(){

    newsContainer.innerHTML = "Loading news...";

    try{

        const response = await fetch(url);
        const data = await response.json();

        displayNews(data.results);

    }catch(error){

        newsContainer.innerHTML = "Unable to load news";

    }
}

function displayNews(articles){

newsContainer.innerHTML = "";

articles.forEach(article => {

const image = article.image_url || "https://via.placeholder.com/400x200";
const title = article.title || "No title available";
const desc = article.description || "";
const link = article.link;

const news = `
<div class="card">

<img src="${image}">

<div class="card-content">
<h3>${title}</h3>
<p>${desc.substring(0,120)}...</p>
<a class="read-btn" href="${link}" target="_blank">Read Full Article</a>
</div>

</div>
`;

newsContainer.innerHTML += news;

});

}

getNews();