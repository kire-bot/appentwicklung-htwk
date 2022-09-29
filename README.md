# PWA Entwicklung

> **Hinweis:** Über den Branch (oben auf "main" klicken) kann zwischen verschiedenen Versionen des Codes gewechselt werden. "main" zeigt den fertigen Code der ganzen App. Die Auswahl eines Datums zeigt den Stand der jeweiligen Vorlesung.

## 1 Einstieg

### Links

#### Zur Vorlesung

- Zum Teilen von Code und Links während der Vorlesung: https://codeshare.io/j0bLeD
- Verwendete Components-Bibliothek: https://shoelace.style/

#### Zum Nachschlagen

- Übersicht zu HTML Tags: https://www.mediaevent.de/html/html5-tags.html
- Übersicht zu CSS Eigenschaften: https://www.mediaevent.de/css/eigenschaften.html
- Grundlagen zu JavaScript: https://www.mediaevent.de/javascript/

### Benötigte Software

1. Browser (Chrome, Firefox, Edge, Safari)

2. [Visual Studio Code](https://code.visualstudio.com/) – Um eine PWA zu entwickeln, benötigen wir eine IDE (Integrierte Entwicklungsumgebung). Hier wird das Projekt verwaltet und der Code geschrieben.

3. "Live Server" Erweiterung in Visual Studio Code – Um den aktuellen Entwicklungsstand der App zu sehen, brauchen wir einen lokalen Server. Dieser kann mit dieser Erweiterung gestartet werden.

## 2 Entwicklung

### Projekt-Struktur

`index.html` – Einstiegspunkt der App

`/assets` – Skripte, Style-Dateien und Bilder

`/pages` – App-Unterseiten

`manifest.json` – Metadaten der App (Name, Farben, Icons)

`/.vscode` – Konfigurations-Dateien für Visual Studio Code

### App entwickeln

**Entwicklungsserver starten** – In VS-Code unten rechts auf "Go Live" klicken. Dadruch wird über die Live Server Erweiterung ein Server gestartet. Der Browser öffnet automatisch einen neuen Tab unter zB `127.0.0.1:5500`.

**Code schreiben** – Wird der Code der App geändert, sind die Änderungen im Browser sichtbar. Die Seite aktualisiert sich bei Änderungen von HTML-Dateien automatisch. Bei allen anderen muss die Seite evtl. manuell neu geladen werden.

**App debuggen** – Entwickler-Ansicht im Browser öffnen:

- Windows: `Strg + Shift + I`
- Mac: `Option + Command + I`

**PWA auf dem Smartphone entwickeln** – IPv4-Adresse herausfinden:

- Mac: Systemeinstellungen > Netzwerk > Status zeigt die IPv4-Adresse
- Windows: Start > Einstellungen > Netzwerk und Internet > WLAN Eigenschaften > IPv4-Adresse

Adresse, zB im Format `192.168.xx.xx`, mit angehangenem Port (in VS-Code unten rechts) im Smartphone-Browser eingeben (`192.168.2.311:5500`).

### Seiten & Unterseiten (HTML)

Als Einstiegspunkt der App dient `index.html`. Alle Unterseiten werden im Ordner `/pages` organisiert. So ergibt sich zB der Pfad `127.0.0.1:5500/pages/profile.html` als Seite für das Nutzerprofil.

Soll einer Unterseite weitere Unterseiten erhalten, so geschieht dies über weitere Unterordner in `/pages`. Dabei dient eine weitere `index.html` als Einstiegspunkt für diesen Ordner. So öffnet zB der Pfad `127.0.0.1:5500/pages/settings` die Datei `/pages/settings/index.html`. Weitere Unterseiten entstehen über entsprechende HTML-Dateien.

### Styling (CSS)

Unter `/assets/styles` werden alle CSS-Dateien gesammelt, die die Gestaltung der App definieren. Die `index.css` dient als Einstiegspunkt und bindet aufgeteilte Module aus `/modules` ein. Damit kann der CSS-Code für einzelnen Komponenten, Sektionen oder Seiten sortiert werden.

In `/modules/variables.css` werden CSS-Variablen definiert, die im gesamten CSS wiederverwendet werden können. CSS-Variablen bieten sich vor allem für Theme-Farben an.

### Funktionen (JavaScript)

Das benötigte JavaScript befindet sich unter `/assets/scripts`. Da die Funktionen der App überschaubar sind, kann der benötigte Code in einer einzelnen `index.js` gesammelt werden.

### Components mit Shoelace

[Shoelace](https://shoelace.style/) ist eine Bibliothek für Web-Components. Die Components bilden fertige Elemente wie Buttons, Listen und Slider die aus der Bibliothek bezogen werden können. Dadurch müssen wir keine eigenen Elemente entwickeln, sondern können fertige verwenden und sie nach Belieben anpassen.

Alternativen bilden zB [Bootstrap](https://shoelace.style/), [Foundation](https://get.foundation/) und [Bulma](https://bulma.io/). Hierbei handelt es sich um CSS-Frameworks, die in der Anwendung jedoch anders funktionieren als Shoelace.
