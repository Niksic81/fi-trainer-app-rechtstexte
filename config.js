/* ============================================================
   FI-Trainer · Einstellungen der iOS-App
   Die App ist ein eigenes Produkt: kein Konto, kein Server, Käufe nur über Apple.
   ============================================================ */
window.APP_CONFIG = {
  /* Anbieter der App (Impressum, Datenschutz, AGB, Widerrufsbelehrung, Kontakt).
     mail = öffentliche Kontakt-Adresse der App (von Zoran so festgelegt, 24.10.2026). */
  anbieter: {
    name: 'Zoran Loncar',
    marke: 'Malezi Group',
    strasse: 'Philippsruher Straße 3',
    ort: '60314 Frankfurt am Main',
    land: 'Deutschland',
    mail: 'support@fachinformatiker-trainer.de'
  },

  /* RevenueCat → Project → API keys → „Public app-specific API key“ der iOS-App (beginnt mit „appl_“).
     Dieser Schlüssel ist öffentlich und darf in der App stehen. Leer = Käufe in der App ausgeschaltet. */
  revenuecatIosKey: '',

  /* Produkt-IDs aus App Store Connect → In-App-Käufe/Abonnements.
     Eine Lizenz gilt für genau EINE Prüfung: je Prüfung (ap1, si, ae) eigene Produkte, zusammen 15.
     Schema: fit_<prüfung>_<tarif>_<laufzeit>, z. B. fit_si_premium_quarterly, fit_ae_paket_6m */
  products: (function () {
    const p = {};
    ['ap1', 'si', 'ae'].forEach(track => {
      p['fit_' + track + '_standard_monthly']   = { track, tier: 'standard', cycle: 'month' };
      p['fit_' + track + '_standard_quarterly'] = { track, tier: 'standard', cycle: 'quarter' };
      p['fit_' + track + '_premium_monthly']    = { track, tier: 'premium',  cycle: 'month' };
      p['fit_' + track + '_premium_quarterly']  = { track, tier: 'premium',  cycle: 'quarter' };
      p['fit_' + track + '_paket_6m']         = { track, tier: 'once',     cycle: 'once' };
    });
    return p;
  })(),

  /* Apples Standard-Nutzungsbedingungen (EULA); Pflicht-Link auf der Kaufseite */
  eulaUrl: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
  /* Abos verwalten/kündigen bei Apple (Ausweichlösung, falls RevenueCat das Fenster nicht öffnen kann) */
  manageUrl: 'https://apps.apple.com/account/subscriptions'
};
