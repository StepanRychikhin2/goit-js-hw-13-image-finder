const list = document.querySelector(".gallery");
const findCard = document.querySelector(".search-input");
const btnSearh = document.querySelector(".btn-searh");

async function findLock(find) {
  let myURL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${find}&page=1&per_page=12&key=43137010-1be9baf787f0e3e744a248bbd`;
  console.log(myURL);

  try {
    const respon = await fetch(myURL);
    const data = await respon.json();
    console.log(data);
    const listMarkUp = data.hits
      .map((data) => {
        const listElem = `
            <div class="photo-card">
            <div class="photo-card2">
            <img src="${data.webformatURL}" alt="" />
            </div>
            <div class="stats">
              <p class="stats-item">
                <i class="material-icons">thumb_up</i>
                ${data.likes}
              </p>
              <p class="stats-item">
                <i class="material-icons">visibility</i>
                ${data.views}
              </p>
              <p class="stats-item">
                <i class="material-icons">comment</i>
                ${data.comments}
              </p>
              <p class="stats-item">
                <i class="material-icons">cloud_download</i>
                ${data.downloads}
              </p>
            </div>
          </div>
      `;
        return listElem;
      })
      .join(` `);
    list.innerHTML = listMarkUp;
  } catch (error) {
    console.error(error);
  }
}
btnSearh.addEventListener("click", async (e) => {
  e.preventDefault();
  await findLock(findCard.value);
});
