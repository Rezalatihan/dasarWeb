const berita = document.getElementById("cards")
berita.innerHTML = message(
  `<div class="spinner-border text-dark mx-auto" role="status">
        <span class="visually-hidden">Loading...</span>`)

fetch("https://newsapi.org/v2/top-headlines?country=id&apiKey=879a5c8344cb4ee5b90ece64f360824f")
  .then(response => response.json())
  .then((data) => {
    const isi = data.articles;

    let img = [];
    isi.map((el) => {
      img += `
      <div class="card">
        <img src=${el.urlToImage} class="images" alt="Image"/> 
        <h5 class="card-title">${el.title} <br>
            ${el.author} - ${el.publishedAt}
        </h5>
        <p "card-text">${el.content}</p>
        <a href=" ${el.url} " class="btn btn-primary">Read more.....</a>
      </div>`
    })
    berita.innerHTML = img

    // const inpt = document.getElementById('cek');
    // const tmpl = berita;
    // function cekData() {
    //   tmpl.innerHTML = inpt.value
    // }
    // inpt.addEventListener('click', cekData)

  }).catch(err => berita.innerHTML = err);

function message(msg) {
  return `<p> ${msg} </P>`
}



    // let input = []
    // for (let i = 0; i < isi.length; i++) {
    //   for (let j = 0; j < isi[i].description.length; j++) {
    //     console.log(isi[i].description[j])
    //   }
    //   input += isi[i].description
    // }
    // console.log(input)
    //ambil data langsung tampil
    // const source = document.getElementById('cek');
    // // const result = document.getElementById('load');
    // source.addEventListener("input", myFunction);

    // function myFunction() {
    //   document.getElementById("load").innerHTML += "Moused over!<br>"
    // }


    // const inputHandler = function (e) {
    //   result.innerHTML = e.target.value;
    //   console.log(e.img)
    // }

    // source.addEventListener('input', inputHandler);
    // source.addEventListener('propertychange', inputHandler);