// DATA: vente de cigarette en Corse depuis 2018
var mois = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'];
var ventes = [45779760,69093480,30725520,45646480,57057120,59025960,77204440,86396240,54571880,50804480,43488400,41706080,42801560];

// Création du graphique à barres
var ctx = document.getElementById('barCors').getContext('2d');
var barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: mois,
    datasets: [{
      label: 'Nombre de cigarette vendu par mois',
      data: ventes,
      backgroundColor: '#fba365', // Couleur des barres
      borderColor: '#ff7100', // Couleur des bordures
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 200 // Espacement entre les valeurs de l'axe y
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: "Vente de cigarette en Corse depuis 2018",
        font: {
          size: 16,
          weight: 'bold', 
          margin: '100px',
        }
      }
    }
  }
});
