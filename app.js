let newsFlash = document.getElementById('news');
let main2Img = document.getElementById('main2-image');
let main2Text = document.getElementById('main2-text');
let submain1 = document.getElementById('submain1');
let submain2 = document.getElementById('submain2');
let submain3 = document.getElementById('submain3');
let submain4 = document.getElementById('submain4');
let submain5 = document.getElementById('submain5');
let submain6 = document.getElementById('submain6');
let latImg1 = document.getElementById('latimg1');
let latImg2 = document.getElementById('latimg2');
let latImg3 = document.getElementById('latimg3');
let latImg4 = document.getElementById('latimg4');
let latText1 = document.getElementById('lattext1');
let latText2 = document.getElementById('lattext2');
let latText3 = document.getElementById('lattext3');
let latText4 = document.getElementById('lattext4');
let catImg1 = document.getElementById('cat-Img4');
let catImg2 = document.getElementById('cat-Img1');
let catImg3 = document.getElementById('cat-Img2');
let catImg4 = document.getElementById('cat-Img3');
let catText1 = document.getElementById('cat-text4');
let catText2 = document.getElementById('cat-text1');
let catText3 = document.getElementById('cat-text2');
let catText4 = document.getElementById('cat-text3');
let cat1 = document.getElementsByClassName('cat1');
function createP(){
    let node = document.createElement('p');
    node.class = "border-top";
    return node;
}

let api = "https://newsapi.org/v2/top-headlines?country=in";
const apiKey = "&apiKey=394b4b6abf7147a9a272f2252588557e";
fetch(api + apiKey)
    .then((response) => { return response.json() })
    .then((data) => {
        let article = data.articles;
        let i = 0;
        setInterval(() => {
            if (i < article.length) {
                newsFlash.innerHTML = article[i].title;
                i++;
            }
            else {
                i = 0;
            }

        }, 3500)
        main2Img.src = article[0].urlToImage;
        main2Text.innerHTML = article[0].title;
        latImg1.src = article[1].urlToImage;
        latText1.innerHTML = article[1].title;
        latImg2.src = article[2].urlToImage;
        latText2.innerHTML = article[2].title;
        latImg3.src = article[3].urlToImage;
        latText3.innerHTML = article[3].title;
        latImg4.src = article[4].urlToImage;
        latText4.innerHTML = article[4].title;
        var input = "&category=business"
        fetch(api+input+apiKey)
        .then((response) => {return response.json()})
        .then(data => {
            console.log(data)
            submain1.src= data.articles[0].urlToImage;
            catImg1.src = data.articles[1].urlToImage;
            catText1.innerHTML = data.articles[1].title;            
        })
        input = "&category=science";
        fetch(api+input+apiKey)
        .then((response) => {return response.json()})
        .then(data => {
            console.log( data.articles[0].title)
            submain2.innerHTML= data.articles[0].title;
            catImg4.src = data.articles[1].urlToImage;
            catText4.innerHTML = data.articles[1].title;
        })
        input = "&category=health";
        fetch(api+input+apiKey)
        .then((response) => {return response.json()})
        .then(data => {
            console.log( data.articles[0].title)
            submain3.innerHTML= data.articles[0].title;
            catImg2.src = data.articles[1].urlToImage;
            catText2.innerHTML = data.articles[1].title;
        })
        var input = "&category=entertainment"
        fetch(api+input+apiKey)
        .then((response) => {return response.json()})
        .then(data => {
            console.log(data)
            submain4.src= data.articles[0].urlToImage;
        }) 
        var input = "&category=sports"
        fetch(api+input+apiKey)
        .then((response) => {return response.json()})
        .then(data => {
            console.log(data)
            submain5.src= data.articles[0].urlToImage;
        }) 
        input = "&category=technology";
        fetch(api+input+apiKey)
        .then((response) => {return response.json()})
        .then(data => {
            console.log( data.articles[0].title)
            submain6.innerHTML= data.articles[0].title;
            catImg3.src = data.articles[1].urlToImage;
            catText3.innerHTML = data.articles[1].title;
        })     
    })