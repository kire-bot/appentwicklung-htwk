# PWA Entwicklung

> **Hinweis:** Über den Branch (oben auf "main" klicken) kann zwischen verschiedenen Versionen des Codes gewechselt werden. "main" zeigt den fertigen Code der ganzen App. Die Auswahl eines Datums zeigt den Stand der jeweiligen Vorlesung.

## Links

- https://codeshare.io/j0bLeD – zum Teilen von Code und Links während der Vorlesung
- https://shoelace.style/ – verwendete Components-Bibliothek

## Benötigte Software

1. Browser (Chrome, Firefox, Edge, Safari)

2. [Visual Studio Code](https://code.visualstudio.com/) – Um eine PWA zu entwickeln, benötigen wir eine IDE (Integrierte Entwicklungsumgebung). Hier wird das Projekt verwaltet und der Code geschrieben.

3. "Live Server" Erweiterung in Visual Studio Code – Um den aktuellen Entwicklungsstand der App zu sehen, brauchen wir einen lokalen Server. Dieser kann mit dieser Erweiterung gestartet werden.

## Projekt-Struktur

`index.html` – Einstiegspunkt der App

`/assets` – Skripte, Style-Dateien und Bilder

`/pages` – App-Unterseiten

`manifest.json` – Metadaten der App (Name, Farben, Icons)

## Entwicklung

**Entwicklungsserver starten** – In VS-Code unten rechts auf "Go Live" klicken. Dadruch wird über die Live Server Erweiterung ein Server gestartet. Der Browser öffnet automatisch einen neuen Tab unter zB `127.0.0.1:5500`.

**Code schreiben** – Wird der Code der App geändert, sind die Änderungen im Browser sichtbar. Die Seite aktualisiert sich bei Änderungen von HTML-Dateien automatisch. Bei allen anderen muss die Seite evtl. manuell neu geladen werden.

**App debuggen** – Entwickler-Ansicht im Browser öffnen:

- Windows: `Strg + Shift + I`
- Mac: `Option + Command + I`

**PWA auf dem Smartphone entwickeln** – IPv4-Adresse herausfinden:

- Mac: Systemeinstellungen > Netzwerk > Status zeigt die IPv4-Adresse
- Windows: Start > Einstellungen > Netzwerk und Internet > WLAN Eigenschaften > IPv4-Adresse

Adresse, zB im Format `192.168.xx.xx`, mit angehangenem Port (in VS-Code unten rechts) im Smartphone-Browser eingeben (`192.168.2.311:5500`).

## Components mit Shoelace

[Shoelace](https://shoelace.style/) ist eine Bibliothek für Web-Components. Die Components bilden fertige Elemente wie Buttons, Listen und Slider die aus der Bibliothek bezogen werden können. Dadurch müssen wir keine eigenen Elemente entwickeln, sondern können fertige verwenden und sie nach Belieben anpassen.

Alternativen bilden zB [Bootstrap](https://shoelace.style/), [Foundation](https://get.foundation/) und [Bulma](https://bulma.io/). Hierbei handelt es sich um CSS-Frameworks, die in der Anwendung jedoch anders funktionieren als Shoelace.
