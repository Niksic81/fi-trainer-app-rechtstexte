/* ============================================================
   FI-Trainer · Rechtstexte der iOS-App (Impressum, Datenschutz, AGB)
   Gelten nur für die App, nicht für die Webseite.
   Wird in der App (ios.js) und auf den öffentlichen Seiten
   rechtstexte/datenschutz.html und rechtstexte/agb.html verwendet.
   ============================================================ */
(function () {
  'use strict';
  const STAND = '27. Oktober 2026';
  const e = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const addr = (A) => `<p>${e(A.name)}<br>${e(A.marke)}<br>${e(A.strasse)}<br>${e(A.ort)}<br>${e(A.land)}</p>`;
  const mail = (A) => `<a href="mailto:${A.mail}">${A.mail}</a>`;
  const ext = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;

  function impressum(A) {
    return `<section class="legal-text" id="sec-impressum">
      <h2>Impressum</h2>
      <h3>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</h3>
      ${addr(A)}
      <h3>Kontakt</h3>
      <p>E-Mail: ${mail(A)}</p>
      <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 Medienstaatsvertrag (MStV)</h3>
      <p>${e(A.name)}, ${e(A.strasse)}, ${e(A.ort)}</p>
      <h3>Zentrale Kontaktstelle nach dem Digital Services Act</h3>
      <p>Zentrale Kontaktstelle für Behörden, die EU-Kommission und Nutzer nach Art. 11 und 12 der Verordnung (EU) 2022/2065 (Digital Services Act) ist die E-Mail-Adresse ${mail(A)}. Du kannst uns auf Deutsch oder Englisch schreiben.</p>
      <h3>Verbraucherstreitbeilegung</h3>
      <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 Verbraucherstreitbeilegungsgesetz).</p>
      <h3>Haftung für Inhalte und Links</h3>
      <p>Wir erstellen die Lerninhalte mit großer Sorgfalt nach dem Rahmenlehrplan und den Prüfungskatalogen der IHK. Für die Richtigkeit, Vollständigkeit und Aktualität können wir trotzdem keine Gewähr übernehmen. Die App „Fachinformatiker-Trainer“ ist ein unabhängiges Angebot und steht in keiner Verbindung zur IHK, zur ZPA oder zu Apple. Für Inhalte externer Websites, auf die wir verlinken, sind deren Betreiber verantwortlich.</p>
      <h3>Urheberrecht</h3>
      <p>Texte, Aufgaben, Grafiken und die Software der App sind urheberrechtlich geschützt. Eine Vervielfältigung oder Weitergabe außerhalb der persönlichen Prüfungsvorbereitung ist nur mit unserer schriftlichen Zustimmung erlaubt.</p>
    </section>`;
  }

  function datenschutz(A) {
    return `<section class="legal-text" id="sec-datenschutz">
      <h2>Datenschutzerklärung der App</h2>
      <p class="legal-muted">Stand: ${STAND}</p>
      <p>Diese Datenschutzerklärung gilt für die App „Fachinformatiker-Trainer“ für iPhone und iPad (nachfolgend „App“).</p>

      <h3>1. Verantwortlicher</h3>
      ${addr(A)}
      <p>E-Mail: ${mail(A)}</p>
      <p>Ein Datenschutzbeauftragter ist nicht bestellt, da die gesetzlichen Voraussetzungen dafür nicht vorliegen.</p>

      <h3>2. Überblick</h3>
      <p>Die App funktioniert <strong>ohne Konto</strong>: Du brauchst weder eine E-Mail-Adresse noch ein Passwort. Dein Name (freiwillig), deine gewählte Prüfung und dein gesamter Lernfortschritt werden <strong>nur auf deinem Gerät</strong> gespeichert und nicht an uns oder an einen Server übertragen. Die App enthält <strong>keine</strong> Werbung, <strong>kein</strong> Tracking und <strong>keine</strong> Analyse-Werkzeuge. Wir erstellen keine Nutzerprofile. Die Lerninhalte sind in der App enthalten; Schriften und Symbole werden nicht von fremden Servern geladen.</p>

      <h3>3. Download über den Apple App Store</h3>
      <p>Die App erhältst du über den App Store der <strong>Apple Distribution International Ltd.</strong>, Hollyhill Industrial Estate, Hollyhill, Cork, Irland („Apple“). Für den Download verarbeitet Apple in eigener Verantwortung Daten wie deine Apple-ID, den Zeitpunkt und die Gerätekennung. Darauf haben wir keinen Einfluss. Es gelten die Datenschutzhinweise von Apple: ${ext('https://www.apple.com/de/legal/privacy/', 'apple.com/de/legal/privacy')}.</p>
      <p>Hast du in den Einstellungen deines iPhones zugestimmt, Analysedaten mit App-Entwicklern zu teilen („Mit App-Entwicklern teilen“), stellt Apple uns zusammengefasste Statistiken und anonyme Absturzberichte bereit (z. B. Geräte-Modell, iOS-Version, Ort des Absturzes im Programmcode). Daraus können wir nicht erkennen, wer du bist. Wir nutzen sie nur, um Fehler zu beheben. Rechtsgrundlage ist deine Einwilligung gegenüber Apple (Art. 6 Abs. 1 lit. a DSGVO); du kannst sie jederzeit in den iPhone-Einstellungen unter „Datenschutz &amp; Sicherheit → Analyse &amp; Verbesserungen“ widerrufen.</p>

      <h3>4. Speicherung auf deinem Gerät</h3>
      <p>Die App speichert auf deinem Gerät: den Namen, mit dem sie dich ansprechen soll (freiwillig), Rolle und Profilbild-Auswahl, die gewählte Prüfung, deinen aktuellen Tarif sowie deinen Lernfortschritt (z. B. erledigte Lektionen, Karteikarten, Prüfungsergebnisse, Lernplan, Lernverlauf). Diese Daten verlassen dein Gerät nicht; wir haben keinen Zugriff darauf. Die Speicherung ist für den von dir gewünschten Dienst unbedingt erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG; Art. 6 Abs. 1 lit. b DSGVO).</p>
      <p>Die Daten werden in dein iPhone- bzw. iCloud-Backup aufgenommen, wenn du diese Funktion von Apple nutzt. Du kannst sie jederzeit in der App unter <strong>Mehr → Alle Daten löschen</strong> vollständig entfernen; beim Löschen der App werden sie ebenfalls gelöscht.</p>

      <h3>5. In-App-Käufe</h3>
      <p>Bezahlte Tarife kaufst du als In-App-Kauf über den Apple App Store. Verkäufer ist dabei Apple; die Zahlung, deine Zahlungsdaten, Rechnung und Umsatzsteuer wickelt Apple in eigener Verantwortung über deine Apple-ID ab. Wir erhalten keine Zahlungsdaten und keine Angaben zu deiner Person.</p>
      <p>Zur Prüfung der Käufe nutzen wir den Dienst <strong>RevenueCat, Inc.</strong> (USA) als Auftragsverarbeiter. RevenueCat verarbeitet dabei eine <strong>zufällige, anonyme Kennung</strong>, die die App beim ersten Start erzeugt (kein Name, keine E-Mail-Adresse), die Kaufbelege von Apple (gekauftes Produkt, Zeitpunkt, Preis, Währung, Land des App Stores, Transaktionsnummern, Ablauf- und Kündigungsdatum) sowie technische Angaben zum Gerät (z. B. App- und iOS-Version, IP-Adresse). Zweck ist die Prüfung der Käufe, die Freischaltung deines Tarifs und das Wiederherstellen von Käufen auf einem anderen Gerät. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). Die anonyme Kennung wird auf deinem Gerät gespeichert, weil das für den von dir gewünschten Kauf unbedingt erforderlich ist (§ 25 Abs. 2 Nr. 2 TDDDG). Datenschutzhinweise: ${ext('https://www.revenuecat.com/privacy/', 'revenuecat.com/privacy')}.</p>
      <p>Nutzt du nur die kostenlose Lizenz, ruft die App beim Öffnen der Lizenz-Seite lediglich die aktuellen Tarife und Preise ab; dabei wird technisch deine IP-Adresse übermittelt. Rechtsgrundlage ist unser berechtigtes Interesse, dir die aktuellen Preise anzuzeigen (Art. 6 Abs. 1 lit. f DSGVO).</p>

      <h3>6. Übermittlung in Länder außerhalb der EU</h3>
      <p>RevenueCat hat seinen Sitz in den USA und setzt dort weitere Unterauftragsverarbeiter ein (z. B. Amazon Web Services). Die Übermittlung ist durch den Auftragsverarbeitungsvertrag mit RevenueCat abgesichert, der die EU-Standardvertragsklauseln der EU-Kommission enthält (Art. 46 Abs. 2 lit. c DSGVO). Eine Kopie der Garantien erhältst du auf Anfrage an ${mail(A)}. Andere Übermittlungen in Drittländer finden durch uns nicht statt.</p>

      <h3>7. Kontakt und Support</h3>
      <p>Die App verschickt selbst keine Nachrichten. Tippst du auf „Senden“ im Kontaktbereich, öffnet sich dein E-Mail-Programm mit einer vorbereiteten Nachricht an ${mail(A)}; ob und was du sendest, entscheidest du. Wenn du uns schreibst, verarbeiten wir deine E-Mail-Adresse, deinen Namen (falls angegeben) und den Inhalt deiner Nachricht, um deine Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bzw. bei allgemeinen Anfragen Art. 6 Abs. 1 lit. f DSGVO. E-Mails an ${mail(A)} verarbeitet unser E-Mail-Anbieter <strong>IONOS SE</strong>, Elgendorfer Str. 57, 56410 Montabaur, als Auftragsverarbeiter.</p>

      <h3>8. Empfänger</h3>
      <p>Personenbezogene Daten erhalten nur die oben genannten Stellen: Apple (in eigener Verantwortung), RevenueCat und IONOS (jeweils als Auftragsverarbeiter, weisungsgebunden). Wir verkaufen keine Daten und geben sie nicht zu Werbezwecken weiter. Eine Weitergabe an Behörden erfolgt nur, wenn wir gesetzlich dazu verpflichtet sind.</p>

      <h3>9. Speicherdauer</h3>
      <p>Daten auf deinem Gerät bleiben dort, bis du sie unter „Mehr → Alle Daten löschen“ entfernst oder die App löschst. Kaufbelege speichert RevenueCat für die Dauer der Geschäftsbeziehung und gesetzlicher Aufbewahrungspflichten. Anfragen per E-Mail löschen wir spätestens sechs Monate nach Abschluss der Bearbeitung, soweit keine gesetzlichen Aufbewahrungspflichten bestehen (z. B. bis zu drei Jahre bei vertragsbezogener Korrespondenz, § 195 BGB).</p>

      <h3>10. Deine Rechte</h3>
      <p>Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO aus Gründen, die sich aus deiner besonderen Situation ergeben (Art. 21). Eine erteilte Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO). Da wir keine Konten führen und dein Lernstand nur auf deinem Gerät liegt, können wir Anfragen zu den Daten der App meist nur zu Kaufbelegen (über die anonyme Kennung) und zu E-Mails beantworten. Schreib dafür einfach an ${mail(A)}.</p>
      <p>Du kannst dich außerdem bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO), insbesondere in dem EU-Mitgliedstaat, in dem du wohnst oder arbeitest, oder bei der für uns zuständigen Behörde: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Gustav-Stresemann-Ring 1, 65189 Wiesbaden, ${ext('https://datenschutz.hessen.de', 'datenschutz.hessen.de')}.</p>

      <h3>11. Keine Pflicht zur Bereitstellung, keine automatisierte Entscheidung</h3>
      <p>Du musst uns keine personenbezogenen Daten mitteilen, um die App zu nutzen; die Angabe eines Namens ist freiwillig. Für einen Kauf sind die oben genannten Kaufdaten erforderlich, ohne sie kann der Tarif nicht freigeschaltet werden. Eine automatisierte Entscheidungsfindung oder ein Profiling im Sinne von Art. 22 DSGVO findet nicht statt.</p>

      <h3>12. Datensicherheit und Änderungen</h3>
      <p>Die Verbindungen zu Apple und RevenueCat sind verschlüsselt (HTTPS/TLS). Wir passen diese Datenschutzerklärung an, wenn sich die App oder die Rechtslage ändert. Die aktuelle Fassung findest du immer in der App unter „Mehr → Rechtliches“.</p>
    </section>`;
  }

  function agb(A) {
    return `<section class="legal-text" id="sec-agb">
      <h2>Allgemeine Geschäftsbedingungen der App</h2>
      <p class="legal-muted">Stand: ${STAND}</p>
      <h3>§ 1 Geltungsbereich und Anbieter</h3>
      <p>(1) Diese Bedingungen gelten für die Nutzung der App „Fachinformatiker-Trainer“ für iPhone und iPad (nachfolgend „App“). Anbieter ist ${e(A.name)}, ${e(A.marke)}, ${e(A.strasse)}, ${e(A.ort)} (nachfolgend „wir“).</p>
      <p>(2) Ergänzend gelten die Nutzungsbedingungen von Apple für Apps aus dem App Store (Standard-Lizenzvereinbarung für Endnutzer, ${ext('https://www.apple.com/legal/internet-services/itunes/dev/stdeula/', '„Licensed Application End User License Agreement“')}). Bei Widersprüchen gehen diese Bedingungen vor, soweit Apple das zulässt.</p>
      <p>(3) Das Angebot richtet sich an Auszubildende, Umschülerinnen und Umschüler sowie Ausbildungsbetriebe. Abweichende Bedingungen der Nutzer gelten nicht.</p>
      <h3>§ 2 Leistungen</h3>
      <p>(1) Die App dient der Vorbereitung auf die IHK-Abschlussprüfungen der Fachinformatiker (Teil 1 sowie Teil 2 in den Fachrichtungen Systemintegration und Anwendungsentwicklung). Je nach Tarif umfasst sie Lektionen, Übungen, Karteikarten, Prüfungssimulationen und einen Lernplan. Der genaue Umfang ergibt sich aus der Tarifübersicht in der App unter „Lizenz“ zum Zeitpunkt des Kaufs.</p>
      <p>(2) Jede Lizenz gilt für genau eine Prüfung (AP Teil 1, AP Teil 2 Systemintegration oder AP Teil 2 Anwendungsentwicklung). Die Prüfung wählst du beim ersten Start; bezahlte Tarife kaufst du jeweils für diese Prüfung. Bei AP Teil 2 ist die betriebliche Projektarbeit enthalten.</p>
      <p>(3) Wir schulden keinen Prüfungserfolg. Die App ersetzt nicht die Ausbildung im Betrieb und in der Berufsschule.</p>
      <h3>§ 3 Nutzung ohne Konto</h3>
      <p>(1) Für die Nutzung ist kein Konto nötig. Dein Lernstand und deine Einstellungen werden nur auf deinem Gerät gespeichert. Für die Sicherung dieser Daten (z. B. über ein iPhone- oder iCloud-Backup) bist du selbst verantwortlich; wir können verlorene Daten nicht wiederherstellen.</p>
      <p>(2) Gekaufte Tarife sind an deine Apple-ID gebunden. Auf einem anderen Gerät mit derselben Apple-ID stellst du sie in der App unter „Mehr → Lizenz → Käufe wiederherstellen“ wieder her.</p>
      <p>(3) Du kannst alle Daten der App jederzeit unter „Mehr → Alle Daten löschen“ vom Gerät entfernen.</p>
      <h3>§ 4 Tarife und Kauf</h3>
      <p>(1) Angeboten werden eine kostenlose Lizenz (zum Ausprobieren, ohne Ablaufdatum, mit eingeschränktem Umfang), Abonnements (Standard und Premium, monatlich oder für drei Monate) sowie ein Prüfungspaket für sechs Monate ohne automatische Verlängerung.</p>
      <p>(2) Bezahlte Tarife kaufst du ausschließlich als In-App-Kauf über den Apple App Store. Der Kaufvertrag über den In-App-Kauf kommt mit Apple zustande; Apple wickelt die Zahlung über deine Apple-ID ab, stellt den Beleg aus und führt die Umsatzsteuer ab. Es gelten ergänzend die Bedingungen von Apple für Medienangebote. Die Leistungen der App (Zugang, Inhalte, Support) erbringen wir.</p>
      <p>(3) Mit der Bestätigung im Kaufdialog von Apple gibst du ein verbindliches Angebot ab. Nach erfolgreicher Zahlung schalten wir deinen Tarif in der Regel innerhalb weniger Sekunden frei.</p>
      <h3>§ 5 Preise</h3>
      <p>Es gelten die zum Zeitpunkt des Kaufs in der App angezeigten Preise des App Stores. Alle Preise sind Endpreise inklusive der gesetzlichen Umsatzsteuer. Abos werden im Voraus für den jeweiligen Abrechnungszeitraum über deine Apple-ID abgerechnet.</p>
      <h3>§ 6 Laufzeit, Verlängerung und Kündigung</h3>
      <p>(1) Abonnements laufen für den gewählten Zeitraum (ein Monat bzw. drei Monate) und verlängern sich automatisch um denselben Zeitraum, wenn du sie nicht spätestens 24 Stunden vor Ablauf kündigst. Die Verlängerung wird innerhalb von 24 Stunden vor Ablauf über deine Apple-ID abgerechnet.</p>
      <p>(2) Du kündigst ein Abo in der App unter „Mehr → Lizenz → Abo stornieren“ oder in den Einstellungen deines iPhones unter „[dein Name] → Abonnements“. Die Kündigung wirkt zum Ende des laufenden Zeitraums; bis dahin kannst du alles weiter nutzen.</p>
      <p>(3) Das Prüfungspaket endet automatisch nach sechs Monaten; eine Kündigung ist nicht nötig.</p>
      <p>(4) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund für uns liegt insbesondere vor, wenn du Inhalte unerlaubt vervielfältigst oder weitergibst.</p>
      <h3>§ 7 Widerruf und Erstattung</h3>
      <p>(1) Da du In-App-Käufe bei Apple abschließt, richten sich Widerruf und Erstattung nach den Bedingungen von Apple. Einzelheiten stehen in der <a href="#sec-widerruf" data-action="legal-jump" data-to="widerruf">Widerrufsbelehrung</a> unten. Bei Fragen helfen wir dir gern unter ${mail(A)}.</p>
      <p>(2) In der App findest du unter „Mehr → Lizenz → Kauf widerrufen“ eine Schaltfläche, die dich direkt zum Widerruf bei Apple führt.</p>
      <p>(3) Deine gesetzlichen Rechte als Verbraucherin oder Verbraucher, insbesondere bei Mängeln digitaler Produkte (§§ 327 ff. BGB), bleiben unberührt.</p>
      <h3>§ 8 Nutzungsrechte</h3>
      <p>Du erhältst für die Dauer deines Tarifs ein einfaches, nicht übertragbares Recht, die Inhalte für deine persönliche Prüfungsvorbereitung zu nutzen. Das automatisierte Auslesen, Kopieren, Veröffentlichen oder Weiterverkaufen von Inhalten ist nicht erlaubt.</p>
      <h3>§ 9 Haftung</h3>
      <p>(1) Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei Verletzung von Leben, Körper oder Gesundheit sowie nach dem Produkthaftungsgesetz.</p>
      <p>(2) Bei leicht fahrlässiger Verletzung einer wesentlichen Vertragspflicht ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Im Übrigen ist die Haftung für leichte Fahrlässigkeit ausgeschlossen.</p>
      <h3>§ 10 Gewährleistung</h3>
      <p>Es gelten die gesetzlichen Vorschriften über digitale Produkte (§§ 327 ff. BGB). Mängel kannst du uns jederzeit an ${mail(A)} melden.</p>
      <h3>§ 11 Änderungen</h3>
      <p>Wir können diese Bedingungen mit Wirkung für die Zukunft ändern, wenn dafür ein sachlicher Grund besteht (z. B. Gesetzesänderungen oder neue Funktionen) und du dadurch nicht unangemessen benachteiligt wirst. Über Änderungen informieren wir dich rechtzeitig vorher in der App.</p>
      <h3>§ 12 Schlussbestimmungen</h3>
      <p>(1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Bist du Verbraucher, gilt diese Rechtswahl nur, soweit dir dadurch nicht der Schutz zwingender Vorschriften des Staates entzogen wird, in dem du deinen gewöhnlichen Aufenthalt hast.</p>
      <p>(2) Vertragssprache ist Deutsch. Du kannst diese Bedingungen jederzeit in der App abrufen.</p>
      <p>(3) Sollte eine Bestimmung unwirksam sein, bleibt der Vertrag im Übrigen wirksam.</p>
      <p>(4) Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
    </section>`;
  }

  function widerruf(A) {
    return `<section class="legal-text" id="sec-widerruf">
      <h2>Widerrufsbelehrung der App</h2>
      <p class="legal-muted">Stand: ${STAND}</p>

      <h3>1. Käufe in der App (Abos und Prüfungspaket)</h3>
      <p>Bezahlte Tarife der App kaufst du ausschließlich als In-App-Kauf über den Apple App Store. Vertragspartner für den Kauf und die Zahlung ist dabei <strong>Apple</strong> (Apple Distribution International Ltd., Hollyhill Industrial Estate, Hollyhill, Cork, Irland), nicht wir. Deshalb gilt für diese Käufe das Widerrufsrecht, das Apple dir in seinen Bedingungen für Medienangebote einräumt (${ext('https://www.apple.com/legal/internet-services/itunes/de/terms.html', 'Bedingungen für Apple Medienservices')}).</p>
      <p>Nach diesen Bedingungen kannst du als Verbraucherin oder Verbraucher in der EU einen Kauf innerhalb von <strong>14 Tagen</strong> nach Erhalt der Kaufbestätigung von Apple ohne Angabe von Gründen widerrufen.</p>

      <h3>2. So widerrufst du einen Kauf</h3>
      <p>Den Widerruf erklärst du direkt gegenüber Apple:</p>
      <ol>
        <li>in der App unter <strong>„Mehr → Lizenz → Kauf widerrufen“</strong>: Die Schaltfläche führt dich direkt zu Apple,</li>
        <li>über ${ext('https://reportaproblem.apple.com', 'reportaproblem.apple.com')}: mit deiner Apple-ID anmelden, den Kauf auswählen und „Rückerstattung anfordern“ wählen, oder</li>
        <li>über die Kontaktmöglichkeiten des Apple Supports.</li>
      </ol>
      <p>Zur Wahrung der Frist genügt es, dass du die Widerrufserklärung vor Ablauf der 14 Tage absendest.</p>
      <p>Apple erstattet dir den Betrag über das Zahlungsmittel, mit dem du bezahlt hast. Wir können Käufe nicht selbst erstatten, weil die Zahlung bei Apple liegt. Wenn du Hilfe brauchst, schreib uns an ${mail(A)}.</p>

      <h3>3. Folgen des Widerrufs</h3>
      <p>Hat Apple deinen Widerruf bzw. deine Erstattung bestätigt, endet der Zugang zu dem erstatteten Tarif. Deine kostenlose Lizenz und dein Lernfortschritt bleiben erhalten.</p>

      <h3>4. Abo kündigen ist kein Widerruf</h3>
      <p>Möchtest du ein Abo nur nicht verlängern, kündigst du es in der App unter „Mehr → Lizenz → Abo stornieren“ oder in den Einstellungen deines iPhones unter „[dein Name] → Abonnements“. Die Kündigung wirkt zum Ende des laufenden Zeitraums; es wird nichts erstattet, du kannst den Tarif aber bis dahin weiter nutzen.</p>

      <h3>5. Kostenlose Nutzung</h3>
      <p>Die kostenlose Lizenz kostet nichts und verlängert sich nicht in ein bezahltes Abo. Du kannst sie jederzeit beenden, indem du die App nicht mehr nutzt, unter „Mehr → Alle Daten löschen“ alles entfernst oder die App löschst.</p>
      <p class="legal-muted">Ende der Widerrufsbelehrung</p>
    </section>`;
  }

  window.AppLegal = { STAND, impressum, datenschutz, agb, widerruf };
})();
