

axios.get('http://api.coindesk.com/v1/bpi/historical/close.json')
  .then(response =>{
    printTheChart(response.data.bpi)

    console.log(response.data.bpi)

  })



var ctx = document.getElementById("myChart").getContext('2d');




// const stockInfo  = axios.create({
//   baseURL: 'https://api.iextrading.com/1.0/stock/',
// });

// let stockTicket = "amzn";

// stockInfo.get(`${stockTicket}/chart`)
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
// });


// stockInfo.get(`${stockTicket}/chart`)
//     .then(response => {
//       printTheChart(response.data);
//     })
//     .catch( error => {
//       console.log(error);
//   });




function printTheChart (data) {

  const label = Object.keys(data);
  const costs = Object.values(data);


  // let stockLabels = stockData.map( element => element.date);
  // let stockPrice = stockData.map( element => element.close);



  let ctx = document.getElementById('myChart').getContext('2d');
  let chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: label,
      datasets: [{
        label: "Stock Chart",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: costs,
      }]
    }
  });
};
