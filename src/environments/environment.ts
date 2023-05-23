// Questo file serve solo per la parte di sviluppo, durante la "build" verrà rimpiazzato dal file 'environment.prods.ts'

// Definizione della costante di ambiente "environment"
export const environment = {
  production: false, // La proprietà "production" è impostata su "false"
  // APIURL: 'http://localhost:3000/users' // La proprietà "APIURL" contiene l'URL di un endpoint API (funziona con json-server)
  APIURL: 'http://localhost:8000/api/users' // Funziona con laraapi (progetto Laravel)
};

// Questo codice definisce una costante di ambiente utilizzata in un'applicazione web. La costante specifica che l'applicazione non è in modalità di produzione e contiene l'URL di un endpoint API. In questo caso, l'endpoint API è in ascolto sulla porta 3000 del server locale.
