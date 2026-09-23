self.addEventListener('push', function(event) {
  const options = {
    body: 'Sua mensagem motivacional de hoje!',
    icon: '/icon.png'
  };
  event.waitUntil(
    self.registration.showNotification('Seu Aplicativo', options)
  );
});
