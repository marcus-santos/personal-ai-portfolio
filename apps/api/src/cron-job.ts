import cron from 'node-cron';

export function keepServerAlive() {
  cron.schedule('*/10 * * * *', async () => {
    const url = 'https://personal-ai-portfolio.onrender.com';

    try {
      const res = await fetch(url);
      if (res.ok) {
        // eslint-disable-next-line no-console
        console.log(`[KeepAlive] Server is alive (${res.status})`);
      } else {
        // eslint-disable-next-line no-console
        console.error(`[KeepAlive] Server returned status ${res.status}`);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`[KeepAlive] Error pinging server: ${(error as Error).message}`);
    }
  });
}
