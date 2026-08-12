/* Seven Transport i18n. English lives in the HTML; PL and NL live here.
   Fallback chain: lang -> en (captured from HTML) -> key left as-is. */
(function () {
  var DICTS = {
    pl: {
      "nav.home": "Start",
      "nav.services": "Usługi",
      "nav.about": "O nas",
      "nav.drivers": "Kierowcy",
      "nav.contact": "Kontakt",
      "nav.quote": "Wyceń transport",
      "hero.t1": "Transport drogowy po",
      "hero.t2": "całej Europie",
      "hero.sub": "Ładunki całopojazdowe i częściowe, ubezpieczone CMR i dostarczane na czas, z jedną osobą kontaktową od załadunku do rozładunku.",
      "hero.wa": "Napisz na WhatsApp",
      "hero.badge": "Ładunki ubezpieczone CMR",
      "stats.bases": "bazy operacyjne: NL i PL",
      "stats.countries": "obsługiwane kraje UE",
      "stats.support": "wsparcie przewozów",
      "stats.insured": "ładunków z ubezpieczeniem CMR",
      "svc.eyebrow": "Usługi",
      "svc.h": "Międzynarodowy transport drogowy, zrobiony porządnie",
      "svc.p": "Jedna usługa, opanowana do perfekcji: przewóz Twoich towarów przez europejskie granice. Nowoczesne ciągniki DAF, staranne planowanie, uczciwa komunikacja.",
      "svc.ftl.h": "Ładunki całopojazdowe (FTL)",
      "svc.ftl.p": "Dedykowany zestaw dla Twojego ładunku, od drzwi do drzwi, według Twojego harmonogramu. Plandeki i zabudowy w całej UE.",
      "svc.ltl.h": "Ładunki częściowe (LTL)",
      "svc.ltl.p": "Płacisz tylko za wykorzystaną przestrzeń naczepy. Regularne odjazdy na korytarzu Holandia-Polska.",
      "svc.exp.h": "Ekspres i przewozy pilne",
      "svc.exp.p": "Stałe okna załadunku i dostawy dla pilnych przesyłek, z proaktywnymi informacjami o statusie w trasie.",
      "routes.h": "Dwie bazy, jedna europejska sieć",
      "routes.p": "Dzięki zespołom w Holandii i w Polsce codziennie obsługujemy korytarz wschód-zachód, a resztę Europy na żądanie.",
      "routes.r1": "Codzienne odjazdy w obu kierunkach",
      "routes.r2": "Regularna, planowana dostępność",
      "routes.r3b": "Cała UE",
      "routes.r3": "Pokrycie na żądanie w całej Unii",
      "how.h": "Jak pracujemy",
      "how.s1.h": "Wycena w kilka godzin",
      "how.s1.p": "Wyślij trasę, ładunek i terminy. Jasną cenę all-in otrzymasz tego samego dnia roboczego.",
      "how.s2.h": "Załadunek i przewóz",
      "how.s2.p": "Ładujemy w uzgodnionym terminie i informujemy Cię na każdej granicy i każdym postoju.",
      "how.s3.h": "Dostawa i dokumenty",
      "how.s3.p": "Dostawa na czas, a podpisane dokumenty CMR wracają do Ciebie bez przypominania.",
      "why.h": "Dlaczego załadowcy wybierają Seven Transport",
      "why.i1.h": "Przejrzyste ceny",
      "why.i1.p": "Wyceny all-in bez niespodziewanych dopłat po dostawie.",
      "why.i2.h": "Dostawy na czas",
      "why.i2.p": "Realne harmonogramy, uczciwe ETA i szybka informacja, gdy coś się zmienia.",
      "why.i3.h": "Ubezpieczenie i CMR",
      "why.i3.p": "Każdy ładunek przewożony na warunkach konwencji CMR i w pełni ubezpieczony.",
      "why.i4.h": "Lokalnie w NL i PL",
      "why.i4.p": "Rodzimi rozmówcy na obu końcach korytarza, w Twojej strefie czasowej.",
      "why.i5.h": "Dostępni 24/7",
      "why.i5.p": "Telefon odbiera prawdziwy człowiek, także poza godzinami biura.",
      "why.i6.h": "Jedna osoba kontaktowa",
      "why.i6.p": "Żadnych call center. Osoba, która wycenia Twój ładunek, prowadzi go do końca.",
      "quote.h": "Poproś o wycenę",
      "quote.p": "Napisz, co jedzie, skąd i kiedy. Odpowiadamy tego samego dnia roboczego.",
      "quote.name": "Imię i nazwisko",
      "quote.company": "Firma",
      "quote.email": "E-mail",
      "quote.phone": "Telefon",
      "quote.from": "Miejsce załadunku",
      "quote.fromPh": "np. Rotterdam, NL",
      "quote.to": "Miejsce dostawy",
      "quote.toPh": "np. Warszawa, PL",
      "quote.date": "Data załadunku",
      "quote.type": "Rodzaj ładunku",
      "quote.typeFtl": "Całopojazdowy (FTL)",
      "quote.typeLtl": "Częściowy (LTL)",
      "quote.typeExp": "Ekspres",
      "quote.cargo": "Szczegóły ładunku",
      "quote.cargoPh": "Palety, waga, wymiary, wymagania specjalne",
      "quote.send": "Wyślij zapytanie",
      "quote.sending": "Wysyłanie...",
      "quote.ok": "Dziękujemy! Odezwiemy się tego samego dnia roboczego.",
      "quote.err": "Nie udało się wysłać. Napisz do nas: info@seventransport.eu",
      "drv.h": "Kierowco: dołącz do floty, która szanuje Twój czas",
      "drv.p": "Rozwijamy się na korytarzu NL-PL i szukamy zawodowych kierowców z kat. C+E. Uczciwe wynagrodzenie, nowoczesne DAF-y, planowane zjazdy do domu.",
      "drv.cta": "Aplikuj mailowo",
      "foot.about": "Międzynarodowy transport drogowy między Holandią, Polską i resztą Europy. Ubezpieczenie CMR, terminowość, jedna osoba kontaktowa.",
      "foot.contact": "Kontakt",
      "foot.company": "Firma",
      "foot.privacy": "Polityka prywatności",
      "foot.cookies": "Polityka cookies",
      "foot.terms": "Regulamin",
      "foot.rights": "Wszelkie prawa zastrzeżone.",
      "foot.cookiePrefs": "Preferencje cookies",
      "ck.h": "Pliki cookie na tej stronie",
      "ck.p": "Używamy niezbędnych plików cookie, aby strona działała. Za Twoją zgodą używamy też cookies statystycznych, aby zrozumieć, jak strona jest używana.",
      "ck.nec": "Niezbędne (zawsze aktywne)",
      "ck.stats": "Statystyczne",
      "ck.acceptAll": "Akceptuję wszystkie",
      "ck.rejectAll": "Tylko niezbędne",
      "ck.save": "Zapisz wybór",
      "about.title": "O nas",
      "about.sub": "Firma transportowa z polskimi korzeniami i holenderską bazą operacyjną, prowadzona przez Volkana Sevena.",
      "about.h": "Przewozimy tak, jakby to był nasz własny towar",
      "about.p1": "Seven Transport powstał z prostego przekonania: nadawca zasługuje na jedną osobę, która zna jego ładunek, odbiera telefon i mówi prawdę o terminach.",
      "about.p2": "Działamy z Warszawy i z Holandii, co daje nam naturalną przewagę na korytarzu wschód-zachód. Jeździmy nowoczesnymi ciągnikami DAF i traktujemy każdy ładunek jak własny.",
      "about.f1": "Zarejestrowana polska spółka: NIP 7011047598, KRS 000090032",
      "about.f2": "Zespoły operacyjne w Holandii i w Polsce",
      "about.f3": "Przewozy na warunkach konwencji CMR, pełne ubezpieczenie",
      "contact.title": "Kontakt",
      "contact.sub": "Odpowiadamy tego samego dnia roboczego. W pilnych sprawach dzwoń lub pisz na WhatsApp.",
      "contact.nl": "Holandia",
      "contact.pl": "Polska",
      "contact.addr": "Adres",
      "contact.hours": "Godziny pracy",
      "contact.hoursVal": "Poniedziałek - sobota, 08:00 - 20:00"
    },
    nl: {
      "nav.home": "Home",
      "nav.services": "Diensten",
      "nav.about": "Over ons",
      "nav.drivers": "Chauffeurs",
      "nav.contact": "Contact",
      "nav.quote": "Offerte aanvragen",
      "hero.t1": "Wegtransport door",
      "hero.t2": "heel Europa",
      "hero.sub": "Volledige en deelladingen, CMR-verzekerd en op tijd geleverd, met een vast aanspreekpunt van laden tot lossen.",
      "hero.wa": "Chat via WhatsApp",
      "hero.badge": "CMR-verzekerde lading",
      "stats.bases": "operationele bases: NL en PL",
      "stats.countries": "EU-landen gedekt",
      "stats.support": "ondersteuning van zendingen",
      "stats.insured": "van de ladingen CMR-verzekerd",
      "svc.eyebrow": "Diensten",
      "svc.h": "Internationaal wegtransport, goed geregeld",
      "svc.p": "Een dienst, tot in de puntjes beheerst: uw goederen over Europese grenzen vervoeren. Moderne DAF-trekkers, zorgvuldige planning, eerlijke communicatie.",
      "svc.ftl.h": "Volledige lading (FTL)",
      "svc.ftl.p": "Een eigen truck voor uw lading, deur tot deur, volgens uw planning. Huif- en bakwagens door de hele EU.",
      "svc.ltl.h": "Deelladingen (LTL)",
      "svc.ltl.p": "Betaal alleen voor de trailerruimte die u gebruikt. Vaste afvaarten op de corridor Nederland-Polen.",
      "svc.exp.h": "Express en tijdkritisch",
      "svc.exp.p": "Vaste laad- en levervensters voor spoedzendingen, met proactieve statusupdates onderweg.",
      "routes.h": "Twee thuisbases, een Europees netwerk",
      "routes.p": "Met mensen in zowel Nederland als Polen rijden we dagelijks de oost-westcorridor en bereiken we de rest van Europa op aanvraag.",
      "routes.r1": "Dagelijkse afvaarten, beide richtingen",
      "routes.r2": "Vaste geplande capaciteit",
      "routes.r3b": "Hele EU",
      "routes.r3": "Dekking op aanvraag in de hele Unie",
      "how.h": "Zo werken wij",
      "how.s1.h": "Offerte binnen enkele uren",
      "how.s1.p": "Stuur route, lading en data. U krijgt dezelfde werkdag een heldere all-in prijs.",
      "how.s2.h": "Laden en transport",
      "how.s2.p": "We laden op de afgesproken datum en houden u op de hoogte bij elke grens en elke stop.",
      "how.s3.h": "Levering en documenten",
      "how.s3.p": "Op tijd geleverd, met getekende CMR-documenten die u zonder navragen terugkrijgt.",
      "why.h": "Waarom verladers voor Seven Transport kiezen",
      "why.i1.h": "Transparante prijzen",
      "why.i1.p": "All-in offertes zonder verrassende toeslagen achteraf.",
      "why.i2.h": "Levering op tijd",
      "why.i2.p": "Realistische planningen, eerlijke ETA's en direct bericht als er iets verschuift.",
      "why.i3.h": "Verzekering en CMR",
      "why.i3.p": "Elke lading vervoerd onder CMR-voorwaarden en volledig verzekerd.",
      "why.i4.h": "Lokaal in NL en PL",
      "why.i4.p": "Moedertaalsprekers aan beide kanten van de corridor, in uw tijdzone.",
      "why.i5.h": "24/7 bereikbaar",
      "why.i5.p": "Een echt mens neemt op, ook buiten kantooruren.",
      "why.i6.h": "Een vast aanspreekpunt",
      "why.i6.p": "Geen callcenters. Wie uw lading offreert, volgt hem ook op.",
      "quote.h": "Offerte aanvragen",
      "quote.p": "Vertel wat er waarheen moet en wanneer. We reageren dezelfde werkdag.",
      "quote.name": "Uw naam",
      "quote.company": "Bedrijf",
      "quote.email": "E-mail",
      "quote.phone": "Telefoon",
      "quote.from": "Laadadres",
      "quote.fromPh": "bijv. Rotterdam, NL",
      "quote.to": "Losadres",
      "quote.toPh": "bijv. Warschau, PL",
      "quote.date": "Laaddatum",
      "quote.type": "Type lading",
      "quote.typeFtl": "Volledige lading (FTL)",
      "quote.typeLtl": "Deellading (LTL)",
      "quote.typeExp": "Express",
      "quote.cargo": "Ladingdetails",
      "quote.cargoPh": "Pallets, gewicht, afmetingen, bijzondere eisen",
      "quote.send": "Aanvraag versturen",
      "quote.sending": "Versturen...",
      "quote.ok": "Bedankt! We nemen dezelfde werkdag contact op.",
      "quote.err": "Versturen mislukt. Mail ons: info@seventransport.eu",
      "drv.h": "Chauffeurs: rij voor een vloot die uw tijd respecteert",
      "drv.p": "We groeien op de corridor NL-PL en zoeken professionele chauffeurs met rijbewijs C+E. Eerlijk loon, moderne DAF-trucks, geplande thuistijd.",
      "drv.cta": "Solliciteer per e-mail",
      "foot.about": "Internationaal wegtransport tussen Nederland, Polen en de rest van Europa. CMR-verzekerd, op tijd, een vast aanspreekpunt.",
      "foot.contact": "Contact",
      "foot.company": "Bedrijf",
      "foot.privacy": "Privacybeleid",
      "foot.cookies": "Cookiebeleid",
      "foot.terms": "Algemene voorwaarden",
      "foot.rights": "Alle rechten voorbehouden.",
      "foot.cookiePrefs": "Cookievoorkeuren",
      "ck.h": "Cookies op deze site",
      "ck.p": "We gebruiken noodzakelijke cookies om de site te laten werken. Met uw toestemming gebruiken we ook statistiekcookies om te begrijpen hoe de site wordt gebruikt.",
      "ck.nec": "Noodzakelijk (altijd aan)",
      "ck.stats": "Statistieken",
      "ck.acceptAll": "Alles accepteren",
      "ck.rejectAll": "Alleen noodzakelijk",
      "ck.save": "Keuzes opslaan",
      "about.title": "Over ons",
      "about.sub": "Een transportbedrijf met Poolse wortels en een Nederlandse operationele basis, geleid door Volkan Seven.",
      "about.h": "We vervoeren alsof het onze eigen goederen zijn",
      "about.p1": "Seven Transport is gebouwd op een simpele overtuiging: een verlader verdient een vast persoon die de lading kent, de telefoon opneemt en eerlijk is over termijnen.",
      "about.p2": "We werken vanuit Warschau en Nederland, wat ons een natuurlijk voordeel geeft op de oost-westcorridor. We rijden moderne DAF-trekkers en behandelen elke lading als onze eigen.",
      "about.f1": "Geregistreerde Poolse vennootschap: NIP 7011047598, KRS 000090032",
      "about.f2": "Operationele teams in Nederland en Polen",
      "about.f3": "Vervoer onder CMR-voorwaarden, volledig verzekerd",
      "contact.title": "Contact",
      "contact.sub": "We reageren dezelfde werkdag. Bel of app bij spoed.",
      "contact.nl": "Nederland",
      "contact.pl": "Polen",
      "contact.addr": "Adres",
      "contact.hours": "Openingstijden",
      "contact.hoursVal": "Maandag - zaterdag, 08:00 - 20:00"
    }
  };

  var STORE_KEY = "st_lang";
  var current = "en";
  var enCache = {};   // key -> {text} captured from HTML
  var enAttrCache = {}; // "attr|key" -> value

  function detect() {
    var saved = null;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) {}
    if (saved && (saved === "en" || DICTS[saved])) return saved;
    var langs = navigator.languages || [navigator.language || "en"];
    for (var i = 0; i < langs.length; i++) {
      var l = String(langs[i]).slice(0, 2).toLowerCase();
      if (l === "en" || DICTS[l]) return l;
    }
    return "en";
  }

  function captureEnglish() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (!(k in enCache)) enCache[k] = el.textContent;
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":");
        var ck = p[0] + "|" + p[1];
        if (!(ck in enAttrCache)) enAttrCache[ck] = el.getAttribute(p[0]) || "";
      });
    });
  }

  function t(key, fallback) {
    var d = DICTS[current];
    if (d && d[key]) return d[key];
    if (key in enCache) return enCache[key];
    return fallback || key;
  }

  function apply(lang) {
    current = (lang === "en" || DICTS[lang]) ? lang : "en";
    try { localStorage.setItem(STORE_KEY, current); } catch (e) {}
    document.documentElement.lang = current;
    var d = DICTS[current] || {};
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      el.textContent = d[k] != null ? d[k] : (enCache[k] != null ? enCache[k] : el.textContent);
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":");
        var v = d[p[1]] != null ? d[p[1]] : enAttrCache[p[0] + "|" + p[1]];
        if (v != null) el.setAttribute(p[0], v);
      });
    });
    document.querySelectorAll("[data-set-lang]").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-set-lang") === current);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    captureEnglish();
    apply(detect());
  });

  // language switching via event delegation (works for injected mobile buttons too)
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-set-lang]");
    if (btn) apply(btn.getAttribute("data-set-lang"));
  });

  window.ST_I18N = { t: t, apply: apply, get lang() { return current; }, dicts: DICTS };
})();
