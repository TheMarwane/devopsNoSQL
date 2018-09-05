// code non testé à cause de l'impossibilité d'installer Node.js et Express

// affichage du tableau des livres
app.get('/livre', function (request, response) {
	
	// récupération des livres
	var lesLivres = db.collection('livres').find();
	
	// création du tableau, le titre du livre est un lien vers ce livre
	var table = '<table><tr><th>titre</th><th>ISBN</th><th>catégorie</th><th>auteur</th></tr>'; // entête
	//données
	for (var i = 0, len = lesLivres.length; i < len; i++) {
		table.concat('<tr><td>',url('/livre/', {titre: lesLivres[i].titre}),'</td><td>',lesLivres[i].ISBN,'</td><td>',
			lesLivres[i].categ,'</td><td>',lesLivres[i].auteur,'</td></tr>');
	}
	table.concat('</table>');
	res.send(table); // envoie du tableau
});

// affichage du livre avec le titre ":titre" sous forme d'un tableau
app.get('/livre/:titre', function (request, response) {
	
	// récupération du livre
	var leLivre = db.collection('livres').findOne(titre);
	
	// création du tableau
	var table = '<table><tr><th>titre</th><th>ISBN</th><th>catégorie</th><th>auteur</th></tr><tr><td>'; // entête
	// données
	table.concat(leLivre.titre,'</td><td>',leLivre.ISBN,'</td><td>',
		leLivre.categ,'</td><td>',leLivre.auteur,'</td></tr></table>');
	
	res.send(table); // envoie du tableau
});