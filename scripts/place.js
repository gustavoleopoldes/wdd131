
function calculateWindChill(tempC, speedKmh) {
    const tempF = (tempC * 9/5) + 32;
    const speedMph = speedKmh / 1.609344;

    if (tempF <= 50 && speedMph > 3) {
        const windChillF = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speedMph, 0.16)) + 
                          (0.4275 * tempF * Math.pow(speedMph, 0.16));
        const windChillC = (windChillF - 32) * 5/9;
        return windChillC.toFixed(1) + "°C";
    }
    return "N/A";
}

const temperature = 20;
const windSpeed = 3;
document.getElementById('windChill').textContent = calculateWindChill(temperature, windSpeed);

function formatDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}

document.getElementById('lastModified').textContent = formatDate(new Date());