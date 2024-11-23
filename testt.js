<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>URL Request</title>
</head>
<body>
    <h1>Her Saniyede Bir İstek Gönderme</h1>
    <p>Bu sayfa belirtilen URL'ye her saniyede bir istek gönderir ve sonucu konsola yazar.</p>
    
    <script>
        const url = 'http://139.162.179.9:80';

        async function sendRequest() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.text(); // JSON dönerse response.json() kullanabilirsiniz.
                console.log('Response:', data);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        async function startRequests() {
            while (true) {
                await sendRequest();
                await new Promise(resolve => setTimeout(resolve, 1000)); // 1 saniye bekle
            }
        }

        // Sayfa yüklendiğinde döngüyü başlat
        startRequests();
    </script>
</body>
</html>
