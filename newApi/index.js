const berita = document.getElementById("cards")
berita.innerHTML = message(
  `<div class="spinner-border text-dark mx-auto" role="status">
        <span class="visually-hidden">Loading...</span>`)
const cari = document.getElementById('form')
cari.innerHTML = `<input type="text" id="cek" class="form-control m-2" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />`


const cekSearch = document.getElementById("cek")

cekSearch.addEventListener("keyup", function () {
  let input = cekSearch.value


  fetch(`https://newsapi.org/v2/top-headlines?q=${input}&apiKey=879a5c8344cb4ee5b90ece64f360824f`)
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


    })

})
  .catch(err => berita.innerHTML = err);

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