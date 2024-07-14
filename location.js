document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'dcfc9df0d3d8e3ed40b9c1b710c56a6a';
    const locationDiv = document.getElementById('location');
    const temperatureDiv = document.getElementById('temperature');
    const audioPlayer = document.getElementById('audioPlayer');

    function fetchWeatherData(lat, lon) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const temperature = data.main.temp;
                const city = data.name;
                const weatherCondition = data.weather[0].main.toLowerCase();

                locationDiv.innerHTML = `Location: ${city}`;
                temperatureDiv.innerHTML = `Current temperature: ${temperature}°C`;
                playMusicBasedOnWeather(weatherCondition);
            })
            .catch(error => {
                console.error('Error fetching the weather data:', error);
                temperatureDiv.innerHTML = 'Could not load temperature data';
            });
    }

    function playMusicBasedOnWeather(condition) {
        let musicUrl;

        switch (condition) {
            case 'clear sky':
                musicUrl = 'music/Suraj-Hua-Maddham1.mp3'; // Example music for clear sky
                break;
            case 'few clouds':
                musicUrl = 'music/One-Love2.mp3'; // Example music for few clouds
                break;
            case 'scattered clouds':
                musicUrl = 'music/Mann_Mera3.mp3'; // Example music for scattered clouds
                break;
            case 'broken clouds':
                musicUrl = 'music/sajni4.mp3'; // Example music for broken clouds
                break;
            case 'shower rain':
                musicUrl = 'music/Baarish5.mp3'; // Example music for shower rain
                break;
            case 'rain':
                musicUrl = 'music/dildara6.mp3'; // Example music for rain
                break;
            case 'thunderstorm':
                musicUrl = 'music/Ishq-Wala-Love7.mp3'; // Example music for thunderstorm
                break;
            case 'snow':
                musicUrl = 'music/Snowman8.mp3'; // Example music for snow
                break;
            case 'mist':
                musicUrl = 'music/Ishq-Wala-Love7.mp3'; // Example music for mist
                break;
            case 'Haze':
                musicUrl = 'music/Mann_Mera3.mp3'; // Example music for haze
                break;
            default:
                musicUrl = 'music/One-Love2.mp3'; // Default music for unknown conditions
                break;
        }
        audioPlayer.src = musicUrl;
        audioPlayer.play();
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetchWeatherData(lat, lon);
        }, error => {
            console.error('Error getting location:', error);
            locationDiv.innerHTML = 'Could not detect location';
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
        locationDiv.innerHTML = 'Geolocation is not supported by this browser.';
    }
});