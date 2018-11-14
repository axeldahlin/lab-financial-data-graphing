axios.get('http://api.coindesk.com/v1/bpi/historical/close.json')
  .then(response =>{
    printTheChart(response.data.bpi)
  })

var ctx = document.getElementById("myChart").getContext('2d');





function printTheChart (data) {

  const label = Object.keys(data);
  const costs = Object.values(data);

  let ctx = document.getElementById('myChart').getContext('2d');
  let chart = new Chart(ctx, {
    type: 'pie',
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
