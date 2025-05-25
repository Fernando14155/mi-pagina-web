document.addEventListener('DOMContentLoaded', () => {
  const clientId = 'f0iwp5su1uyey140yx6jss35yxkzfh'; // Reemplaza por tu Client ID de Twitch
  const accessToken = '0wq0nqk7bmt3v9qvbv1m122938fpxu'; // Token temporal obtenido vía OAuth Client Credentials
  const channelName = 'eldramatic0';
  const container = document.getElementById('twitch-stream');

  // Función para verificar si el canal está en directo
  async function checkStream() {
    try {
      const response = await fetch(`https://api.twitch.tv/helix/streams?user_login=${channelName}`, {
        headers: {
          'Client-ID': clientId,
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (!response.ok) {
        container.innerHTML = `<p>Error al obtener datos de Twitch.</p>`;
        return;
      }

      const data = await response.json();

      if (data.data && data.data.length > 0) {
        // Está en directo, insertar iframe
        container.innerHTML = `
          <iframe
            src="https://player.twitch.tv/?channel=${channelName}&parent=fernando14155.github.io"
            height="480"
            width="720"
            allowfullscreen="true"
            frameborder="0"
            scrolling="no"
            >
          </iframe>
        `;
      } else {
        // No está en directo
        container.innerHTML = `<p>El canal <strong>${channelName}</strong> no está transmitiendo en este momento.</p>`;
      }
    } catch (error) {
      console.error(error);
      container.innerHTML = `<p>Error al conectar con Twitch.</p>`;
    }
  }

  checkStream();
});
