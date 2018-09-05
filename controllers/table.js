

app.get('/livre', function (request, response) {
	
	var lesLivres = db.collection('livres').find()
	
	var table = '<table>'
	for (var i = 0, len = lesLivres.length; i < len; i++) {
		table.concat('<tr><td>');
		table.concat(lesLivres[i]);
		table.concat('</td></tr>');
	}
	table.concat('</table>');
	res.send(table);
})

