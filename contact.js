// Redirect to office location when clicking on the map
document.querySelectorAll('area').forEach(area => {
    area.addEventListener('click', function(event) {
        const region = event.target.alt;
        if (region === 'Greater Accra') {
            window.location.href = "#accra-address";
        } else if (region === 'Ashanti (Kumasi)') {
            window.location.href = "#kumasi-address";
        }
    });
});
