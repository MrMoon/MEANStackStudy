const formSearch = document.querySelector('form');
const txtSearch = document.querySelector('input');
const txtData = document.querySelector('#txtData');
const txtError = document.querySelector('#txtError');


formSearch.addEventListener('submit' , (e) => {
  e.preventDefault();
  const location = txtSearch.value;
  fetch('/test?address=' + location).then((res) => {
    res.json().then((data) => {
      txtData.textContent = JSON.stringify(data.Global.NewConfirmed);
    });
  });
});
