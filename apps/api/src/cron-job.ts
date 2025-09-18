import cron from 'node-cron';

export function keepServerAlive() {
    cron.schedule('*/10 * * * *', async () => {
        try{
            const response = await fetch('http://localhost:3333/');
            if(response.ok){
                console.log('Server is alive');
            }
            else{
                console.error('Server is down');
            }
        }
        catch(error){
            console.error('Error pinging server:', error);
        }
    })
}