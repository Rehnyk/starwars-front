
# Starwars Front-End project

## Lokální spuštění
Aplikaci lze spustit lokálně pomocí Vite:

```bash
npm install
npm run dev
```
Výchozí port Vite je 5173, aplikace je tedy dostupná na : ```http://localhost:5173```

## Produkční build
Produkční build lze vytvořit příkazem: ```npm run build```

## Živé demo
Projekt lze najit na adrese https://starwars-demo-renata.vercel.app

## Fáze 1 - Statické stránky
V prvotní fázi projektu jsem vytvořila statické webové stránky podle poskytnutého grafického návrhu. Zaměřila jsem se na co nejpřesnější vizuální zpracování a zajištění responzivity napříč různými zařízeními.

## Fáze 2 – Zobrazení filmů Star Wars přes REST API

V dalším kroku jsem implementovala dynamické načítání seznamu filmů pomocí REST API.

Doporučené API bohužel není funkční, ale našla jsem alternativu na `https://swapi.py4e.com`

## Fáze 3 – Mapa s markery
Do projektu jsem integrovala knihovnu **Leaflet.js**. Mapa zobrazuje marker s popupem a červeným kruhem dle zadání.

## Fáze 4 – Komentáře v localStorage a validací

V poslední fázi jsem umožnila přidávání komentářů,  které jsou ukládány do localStorage. Zahrnuta je také validace na minimálně 3 znaky.

Součástí *Comment section* je také toggle tlačítko pro zobrazení více či méně komentářů (implementováno již ve fázi 1).


## Použité technologie
* **Svelte** - framework pro strukturu a logiku aplikace
* **Bootstrap 5** - základní stylování a responzivitu
* **FontAwesome** - ikony
* **Vite** - bundler a nástroj pro vývojové prostředí
* **Swapi API** - REST API s daty o filmech
* **Leaflet.js** – mapa s markery



