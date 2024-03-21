//change port to test first time load

var spectralKitten;

var init = function(){	
	spectralKitten = new SpectralKitten();
	
	spectralKitten.loadCards(
		function(cards)
		{
			console.log("Cards Loaded : " + spectralKitten.cards.length);

			var source = $("#card-list-template").html();
			var template = Handlebars.compile(source);

			var context = {cards:spectralKitten.cards};
			var html = template(context);
			$("#card-list").html(html);

		}
	);
}