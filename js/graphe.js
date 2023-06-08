// DATA: vente de cigarette en France métropolitaine depuis 2018
var mois = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'];
var ventes = [3460936715,3193232565 ,3144061795 ,3278121470, 3517133820, 3496839605,  3828914800, 3563778875 , 3063985055 , 3498012775, 3055204155,3132181050, 3166845805, 2984062485];

// Création du graphique à barres
var ctx = document.getElementById('mybarChart').getContext('2d');
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
        text: "Vente de cigarette en France métropolitaine depuis 2018",
        font: {
          size: 16,
          weight: 'bold', 
          margin: '100px',
        }
      }
    }
  }
});


// DATA: vente de cigarette en France métropolitaine depuis 2018
var mois = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'];
var ventes = [3460936715,3193232565 ,3144061795 ,3278121470, 3517133820, 3496839605,  3828914800, 3563778875 , 3063985055 , 3498012775, 3055204155,3132181050, 3166845805, 2984062485];

// Création du graphique à barres
var ctx2 = document.getElementById('barCorse').getContext('2d');
var barChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: mois,
    datasets: [{
      label: 'Ventes mensuelles de pc gamer',
      data: ventes,
      backgroundColor: '#ff6900', // Couleur des barres
      borderColor: '#ff7100', // Couleur des bordures
      borderWidth: 1
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
        text: "Vente de cigarette en France métropolitaine depuis 2018",
        font: {
          size: 16,
          weight: 'bold', 
          margin: '100px',
        }
      }
    }
  }
});