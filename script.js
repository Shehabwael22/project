document.addEventListener('DOMContentLoaded', function () {
    const banner = document.createElement('div');
    banner.style.position = 'fixed';
    banner.style.bottom = '0';
    banner.style.width = '100%';
    banner.style.backgroundColor = 'black';
    banner.style.color = 'white';
    banner.style.padding = '10px';
    banner.style.textAlign = 'center';
    banner.innerHTML = 'Questo sito utilizza cookie per migliorare la tua esperienza. <button id="close-banner">Accetta</button>';

    document.body.appendChild(banner);

    document.getElementById('close-banner').addEventListener('click', function () {
        banner.style.display = 'none';
    });
});


