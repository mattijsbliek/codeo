# Codeo Dag 4

Hoi! Welkom op dag 4 van Codeo. Als het goed is begrijp je inmiddels de basics van
HTML, CSS, en JavaScript. Vandaag gaan we kijken hoe het zit met je skills. Je gaat
in duo's je eigen click game maken, waarin we bijhouden hoevaak je kan klikken in
10 seconden.

Anders dan vorige dagen gaan we vandaag niet alles voordoen, je gaat vooral een
hoop zelf uitzoeken. Klinkt moeilijk? Het goede nieuws is dat je voor deze game
niks nodig hebt wat je nog niet hebt geleerd. Het andere goede nieuws is dat we
vanmiddag pizza gaan eten, maar dat maakt voor de game verder niet uit.

De opdracht is opgesplitst in delen, en na elk deel zorgen we dat iedereen bij is
zodat je niet halverwege de dag vastloopt.

Tip: copy/pasten mag, dus je kan bij de code van eerdere dagen kijken hoe iets
ook alweer werkt.

## Start de server

Open een nieuwe terminal via het menu item Terminal > New Terminal. Typ nu het
volgende commando:

npm run start

Misschien wordt je gevraagd of er iets geïnstalleerd mag worden. Typ y en druk
op enter.

## Deel 1: Button

Maak een button in de HTML en style deze met CSS. We willen geen saaie buttons
zien, maak er wat tofs van met kleuren, lettertypes, gradients, drop-shadows etc.

## Deel 2: Click tracking

Gebruik JavaScript om te detecteren wanneer er op de button geklikt wordt. Hou
het aantal clicks bij in een variabele die begint bij 0 en per klik met 1 omhoog
gaat.

Zet in de HTML een div tag neer waar je het aantal kliks kan tonen. Update het aantal
kliks met JavaScript elke keer wanneer je klikt.

## Deel 3: Timer

Je ziet in JavaScript een timer staan, deze kun je gebruiken om af te tellen. De
timer heeft vier functies:

* timer.set() om de initiële tijd in te stellen
* timer.onUpdate() hier kun je een functie aan geven die elke seconde aangeroepen wordt
* timer.onComplete() hier kun je een functie aan geven die aangeroepen wordt als de timer is afgelopen
* timer.start() hiermee kun je de timer starten

Stel de timer in op 10 seconden. Registreer vervolgens een functie met timer.onUpdate zodat je een
signaal krijgt na elke seconde. Deze functie ontvangt een variabele met hoeveel tijd er nog over is.

Bij de eerste klik op de button moet je de timer starten. En als de timer is afgelopen moet je stoppen
met het tellen van de kliks.

Maak een nieuwe div in HTML en schrijf daar naartoe hoeveel tijd er nog over is.

## Bonus 1: Reset

Maak een reset button die de game reset wanneer je er op klikt

## Bonus 2: Custom cursor

Je kan de cursor verbergen met de volgende CSS

body {
  cursor: none;
}

Nu kun je zelf een custom cursor maken. Je kan bij de Whack a Mole game spieken hoe dit ook alweer moet.

## Bonus 3: Audio

Speel een geluidje af elke keer dat er op de button geklikt wordt.

## Bonus 4: High score

Je kan je scores ook opslaan tussen refreshes door. Hiervoor heeft je browser een functionaliteit genaamd
local storage. Je kan je score opslaan via de volgende functie:

localStorage.setItem("scores", scores);

Je kan de opgeslagen scores ook uitlezen:

localStorage.getItem("scores");

Je kan je scores bijhouden in een lijstje met de volgende code:

let scores = localStorage.getItem("scores") || [];

// Voeg je huidige score toe aan het lijstje
scores.push(score);

// Sorteer je lijstje van hoog naar laag
scores.sort((a,b) => a - b);

// Sla je high scores op
localStorage.setItem("scores", scores);