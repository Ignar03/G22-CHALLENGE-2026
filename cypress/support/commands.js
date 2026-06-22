Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignorar el error 418
  if (err.message.includes('Minified React error #418')) {
    return false;
  }
  // Si no es el error 418, dejamos que rompa.
  return true;
})