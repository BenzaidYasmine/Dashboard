


const donneesParDate = {
  '2023-05-01': [40, 20, 15, 8, 15],    // Exemple de données pour le 1er mai 2023
  '2023-05-02': [30, 15, 50, 15, 10],     // Exemple de données pour le 2 mai 2023
  '2023-05-03': [20, 10, 25, 10, 5]     // Exemple de données pour le 3 mai 2023
};


function afficherGraphe() {

  const dateSelectionnee = document.getElementById('dateSelect').value;
  const donnees = donneesParDate[dateSelectionnee];

  const labels = ['Paris', 'Bordeaux', 'Nantes', 'Marseille', 'Toulouse'];  // Exemple d'étiquettes pour l'axe des x
  const ctx = document.getElementById('graphique').getContext('2d');

  var graphique = Chart.getChart("graphique");
  if(graphique){
    graphique.destroy();
  }

  graphique = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Nombre de cigarres vendu en France (10^3)',
        data: donnees,
        backgroundColor: '#fba365', // Couleur des barres
      borderColor: '#ff7100', // Couleur des bordures
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}

// Afficher le graphe initial lors du chargement de la page
afficherGraphe();
