// Map region click handler to display the address
document.querySelectorAll('area').forEach(area => {
    area.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of <area> tags

        const region = event.target.alt;
        const instructions = document.getElementById('map-instructions');

        if (region === 'Greater Accra') {
            instructions.innerHTML = `
                <h2>Greater Accra</h2>
                <p>Best Brain Examinations Konsortium, Accra Office.</p>
                <p>Address: Brenya Avenue, Accra</p>
                <p>Phone: 0509967235 </p>
            `;
        } else if (region === 'Ashanti (Kumasi)') {
            instructions.innerHTML = `
                <h2>Ashanti (Kumasi)</h2>
                <p>Best Brain Examinations Konsortium, Kumasi Office.</p>
                <p>Address: Central Kumasi, Ashanti Region</p>
                <p>Phone: 0509967235</p>
            `;
        }
    });
});
