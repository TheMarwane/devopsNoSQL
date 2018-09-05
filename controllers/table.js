

app.get('/livre', function (request, response) {
	
	var lesLivres = db.collection('livres').find();
	
	var table = '<table>';
	for (var i = 0, len = lesLivres.length; i < len; i++) {
		table.concat('<tr><td>',lesLivres[i].titre,'</td><td>',lesLivres[i].ISBN,'</td><td>',
			lesLivres[i].categ,'</td><td>',lesLivres[i].auteur,'</td></tr>');
	}
	table.concat('</table>');
	res.send(table);
});

app.get('/livre/:titre', function (request, response) {
	
	var leLivre = db.collection('livres').findOne(titre);
	
	var table = '<table><tr><td>';
	table.concat(leLivre.titre,'</td><td>',leLivre.ISBN,'</td><td>',
			leLivre.categ,'</td><td>',leLivre.auteur,'</td></tr></table>');
	
	res.send(table);
});