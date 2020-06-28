//Document Content
const formSearch = document.querySelector('.search');
const txtSearch = document.querySelector('#txtSearch');
const txtError = document.querySelector('#txtError');
const txtTotalConfirmed = document.querySelector('#txtTotalConfirmed');
const txtTotalDeaths = document.querySelector('#txtTotalDeaths');
const txtTotalRecovered = document.querySelector('#txtTotalRecovered');
const txtName = document.querySelector('#txtName');

//Functions
const getNumberCommas = (x) => x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
const titleCase = (str) => {
   let result = str.toLowerCase().split(' ');
   for (let i = 0; i < result.length; ++i) result[i] = result[i].charAt(0).toUpperCase() + result[i].substring(1);
   return result.join(' ');
}

//Fetching data
formSearch.addEventListener('submit' , (e) => {
  e.preventDefault();
  const location = txtSearch.value;
  fetch('/test?country=' + location).then((res) => {
    res.json().then((data) => {
      const currentData = data[data.length - 1];
      txtName.textContent = 'Total in ' + titleCase(location);
      txtTotalConfirmed.textContent = 'Total Confirmed ' + getNumberCommas(currentData.Confirmed);
      txtTotalRecovered.textContent = 'Total Recovered ' + getNumberCommas(currentData.Recovered);
      txtTotalDeaths.textContent = 'Total Deaths ' + getNumberCommas(currentData.Deaths);
    });
  });
});

fetch('https://api.covid19api.com/world/total').then((res) => {
  res.json().then((data) => {
    txtTotalConfirmed.textContent = 'Total Confirmed ' + getNumberCommas(data.TotalConfirmed);
    txtTotalRecovered.textContent = 'Total Recovered ' + getNumberCommas(data.TotalRecovered);
    txtTotalDeaths.textContent = 'Total Deaths ' + getNumberCommas(data.TotalDeaths);
  })
});
