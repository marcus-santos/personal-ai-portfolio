import cron from 'node-cron';
import fetch from 'node-fetch';

export function keepServerAlive() {
  cron.schedule('*/10 * * * *', async () => {
    const url = 'https://personal-ai-portfolio.onrender.com';

    try {
      const res = await fetch(url);
      if (res.ok) {
        console.log(`[KeepAlive] Server is alive (${res.status})`);
      } else {
        console.error(`[KeepAlive] Server returned status ${res.status}`);
      }
    } catch (error) {
      // Não lança o erro para evitar crash
      console.log(`[KeepAlive] Error pinging server: ${(error as Error).message}`);
    }
  });
}
