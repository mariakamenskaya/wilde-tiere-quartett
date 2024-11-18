$(document).ready(() => {
	const cardContainer = $("#card-container");

	// JSON-Daten laden
	$.getJSON(".vscode/animaldata.json", (animals) => {
		// Karten aus `card.html` laden
		function loadCard() {
			return $.get("card.html");
		}

		// Karten mischen
		function shuffle(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
			return array;
		}

		// Karten sortieren
		function sortCards(criteria) {
			if (criteria === "weight") {
				return animals.sort((a, b) => b.max_weight - a.max_weight);
			} else if (criteria === "lifespan") {
				return animals.sort((a, b) => b.max_age - a.max_age);
			} else {
				return animals;
			}
		}

		// Alle Karten generieren
		function generateCards(sorted = false, criteria = "default") {
			cardContainer.empty();
			const animalData = sorted
				? sortCards(criteria)
				: shuffle(animals.slice());
			Promise.all(Array.from({ length: 32 }, loadCard))
				.then((cards) => {
					cards.forEach((cardHTML, index) => {
						const card = $("<div>").html(cardHTML).addClass("card");

						// JSON-Daten für die aktuelle Karte holen
						const data = animalData[index];
						if (data) {
							// Felder mit Daten füllen
							card.find(".card-number").text(`F${data.id}`);
							card.find(".card-title").text(data.name_german);
							card.find(".card-image").attr(
								"src",
								`images/animal images/${data.image}`
							);
							card.find(".card-image").attr(
								"alt",
								data.name_german
							);
							card.find(".card-trivia").text(data.trivia_german);

							// Statistiken setzen
							const stats = card.find(".stat-content");
							stats.eq(0).text(`${data.max_weight} kg`); // Gewicht
							stats.eq(1).text(`${data.max_length} cm`); // Länge
							stats.eq(2).text(`${data.max_age} Jahre`); // Alter
							stats.eq(3).text(`${data.top_speed} km/h`); // Geschwindigkeit
							stats.eq(4).text(`${data.litter_size}`); // Wurfgröße
							stats.eq(5).text(`${data.deaths}`); // Todesfälle
						}

						// Karte hinzufügen
						cardContainer.append(card);
					});
					// Hover-Effekte mit jQuery
					$(".card-wrapper").hover(
						function () {
							$(".card-wrapper").not(this).addClass("dimmed");
						},
						function () {
							$(".card-wrapper").removeClass("dimmed");
						}
					);
				})
				.catch((error) => {
					console.error("Fehler beim Laden der Karten:", error);
				});
		}
		// Initiale Karten generieren
		generateCards(true);

		// Karten mischen und neu generieren, wenn auf "Zufallsansicht" geklickt wird
		$("#home-link").click((e) => {
			e.preventDefault();
			generateCards(false);
		});

		$("#group-toggle").click((e) => {
			e.preventDefault();
			generateCards(true);
		});

		// Karten sortieren, wenn eine Sortieroption ausgewählt wird
		$("#sort-select").change((e) => {
			const criteria = e.target.value;
			generateCards(true, criteria);
		});
	});
});
