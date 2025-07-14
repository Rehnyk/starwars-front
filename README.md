
# Starwars Front-End project


Pro spuštění projektu ve vývojovém režimu postupujte následovně:

```bash
npm install
npm run dev
```

### Poznámka k build procesu
Projekt v aktuální fázi neobsahuje produkční build proces, proto je doporučeno používat pouze vývojový server (npm run dev) pro lokální testování.

## Fáze 1 - Statické stránky
V prvotní fázi projektu jsem vytvořila statické webové stránky podle poskytnutého grafického návrhu. Zaměřila jsem se na co nejpřesnější vizuální zpracování a zajištění responzivity napříč různými zařízeními.

## Fáze 2 – Zobrazení filmů Star Wars přes REST API

V dalším kroku jsem implementovala dynamické načítání seznamu filmů pomocí REST API.

Doporučené API bohužel není funkční, ale našla jsem alternativu na `https://swapi.py4e.com`

## 3. fáze – Interaktivní mapa
Do projektu jsem integrovala knihovnu **Leaflet.js**. Mapa zobrazuje marker s popupem a červeným kruhem dle zadání.

## Použité technologie
* **Svelte** - framework pro strukturu a logiku aplikace
* **Bootstrap 5** - základní stylování a responzivitu
* **FontAwesome** - ikony
* **Vite** - bundler a nástroj pro vývojové prostředí
* **Swapi API** - REST API s daty o filmech
* **Leaflet.js** – mapa s markery



