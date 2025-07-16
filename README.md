
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

V této fázi jsem umožnila přidávání komentářů,  které jsou ukládány do localStorage. Zahrnuta je také validace na minimálně 3 znaky.

Součástí *Comment section* je také toggle tlačítko pro zobrazení více či méně komentářů (implementováno již ve fázi 1).

## Fáze 5 - Kontaktní formulář, services, scroll up a další
Toto je poslední fáze projektu kde byly provedeny finální úpravy a přidáno několik komponentů a funkcí nad rámec původního zadání.

1. **Kontaktní formulář** - Kontaktní formulář se základní validací napojený na navigaci a odpovídající servisní logiku.

2. **Services** -  Pro komentáře i kontaktní formulář byly vytvořeny vlastní servisy. U obou je implementována metoda HTTP POST, u komentářů navíc metoda GET pro jejich načítání. Vzhledem k absenci backendového serveru není aplikace propojena s žádnou databází.

3. **Scroll to Top** – Přidáno tlačítko pro plynulé posunutí stránky zpět na začátek.

4. **Mapový marker** – V produkční verzi se nezobrazoval defaultní marker Leaflet.js, proto jsem vytvořila vlastní marker načítaný přímo ze složky assets.

5. **Relativní čas** – Pro výpočet relativního času u komentářů byla použita knihovna Day.js.

6. **Zlepšení responzivity a doladění detailů** – U některých prvků byla upravena responzivita a byly doladěny drobné nedostatky.


## Použité technologie
* **Svelte** - framework pro strukturu a logiku aplikace
* **Bootstrap 5** - základní stylování a responzivitu
* **FontAwesome** - ikony
* **Vite** - bundler a nástroj pro vývojové prostředí
* **Swapi API** - REST API s daty o filmech
* **Leaflet.js** – mapa s markery
* **Day.js** - výpočet relativního času



