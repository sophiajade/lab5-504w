var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
var africa = [86,114,106,106,107,111,133,221,783,2478];
var asia = [282,350,411,502,635,809,947,1402,3700,5267];
var europe = [168,170,178,190,203,276,408,547,675,734];
var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
var northAmerica = [6,3,2,2,7,26,82,172,312,433];
var oceana = [3,3,2,2,2,2,6,13,30,57];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        data: africa,
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
        },
        {
        data: asia,
        label: "Asia",
        borderColor: "#cc99ff",
        fill: false
        },
        {
        data: europe,
        label: "Europe",
        borderColor: "#ffcc99",
        fill: false
        },
        {
        data: latinAmerica,
        label: "Latin America",
        borderColor: "#ff8080",
        fill: false
        },
        {
        data: northAmerica,
        label: "North America",
        borderColor: "#ff4d4d",
        fill: false
        },
        {
        data: oceana,
        label: "Oceana",
        borderColor: "#4d4dff",
        fill: false
        },

    ]
  }
});

var countries = ["China", "South Korea", "Italy", "Iran", "Japan", "France", "Spain", "United States", "Hong Kong"];
var mort_rates = [3.9, 0.3, 3.8, 3.7, 1.9, 1.6, 0.9, 6.9, 1.9]

new Chart(document.getElementById("covidChart"), {
  type: 'bar',
      data: {
        labels: countries,
        datasets: [
          {
            label: "Percent of reported cases that have been fatal",
            backgroundColor: "#6699ff",
            data: mort_rates
          }
        ]
      },
      options: {
        legend: { display: false },
        }
      })
