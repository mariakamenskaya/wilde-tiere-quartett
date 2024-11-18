# wilde-tiere-quartett

Dieses Projekt ist eine Webanwendung, die ein Quartett-Kartenspiel mit verschiedenen Tieren darstellt. Die Anwendung wurde mit HTML, CSS und JavaScript erstellt und verwendet jQuery für DOM-Manipulationen und AJAX-Anfragen.

# Funktionen

Kartenanzeige:

- Die Karten werden aus einer JSON-Datei (animaldata.json) geladen, die Informationen über verschiedene Tiere enthält.
Jede Karte zeigt Details wie Name, Gewicht, Lebensdauer, Geschwindigkeit und mehr.
Kartenmischung:

- Die Karten können zufällig gemischt werden, um eine neue Reihenfolge zu erzeugen.
Dies wird durch die shuffle-Funktion erreicht, die das Fisher-Yates-Algorithmus verwendet.
Sortierfunktion:

- Die Karten können nach verschiedenen Kriterien sortiert werden, wie z.B. Gewicht und Lebensdauer.
Die Sortierung erfolgt durch die sortCards-Funktion, die die Karten in absteigender Reihenfolge sortiert.
Hover-Effekte:

- Beim Überfahren einer Karte mit der Maus wird diese vergrößert und erhält einen Glow-Effekt.
Gleichzeitig werden die anderen Karten leicht transparent dargestellt.
Responsive Design:

Die Anwendung ist für verschiedene Bildschirmgrößen optimiert und verwendet separate CSS-Dateien für Desktop- und Mobile-Ansichten.

# Verwendete Technologien

HTML: Struktur der Webseite.
CSS: Styling der Karten und der Webseite.
JavaScript: Logik für das Laden, Mischen und Sortieren der Karten.
jQuery: Vereinfachung der DOM-Manipulation und AJAX-Anfragen.
Code-Übersicht
index.html: Enthält die Grundstruktur der Webseite und bindet die notwendigen Skripte und Stylesheets ein.
style.css: Definiert das Styling der Karten und der Webseite, einschließlich der Hover-Effekte.
main.js: Enthält die Hauptlogik der Anwendung, einschließlich des Ladens der JSON-Daten, der Kartenmischung und -sortierung sowie der Hover-Effekte.
