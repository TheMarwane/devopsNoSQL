

app.get('/livre', function (request, response) {
	
	var lesLivres = db.collection('livres').find()
	
	var table = '<table>'
	for (var i = 0, len = lesLivres.length; i < len; i++) {
		table.concat('<tr><td>');
		table.concat(lesLivres[i].name);
		table.concat('</td><td>');
		table.concat(lesLivres[i].ISBN);
		table.concat('</td><td>');
		table.concat(lesLivres[i].categ);
		table.concat('</td><td>');
		table.concat(lesLivres[i].auteur);
		table.concat('</td></tr>');
	}
	table.concat('</table>');
	res.send(table);
})

