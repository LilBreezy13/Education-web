document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.sidebar a');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = e.target.getAttribute('data-tab');

            tabContents.forEach(content => {
                if (content.id === targetTab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    // Populate restricted Ghanaian languages for orders
    populateGhanaianLanguages();
});

function populateGhanaianLanguages() {
    const allowedLanguages = [
        "Asante Twi", "Akwapem Twi", "Fante", "Ga", "Dagbani", "Dangme", "Ewe",
        "Nzema", "Gonja", "Kasem", "Dagaare", "Dagbane", "None"
    ];

    const rows = document.querySelectorAll('#orders tbody tr');
    
    rows.forEach(row => {
        const ghanaianLanguageCell = row.cells[2]; // Adjust based on your table structure

        if (ghanaianLanguageCell) {
            const languages = ghanaianLanguageCell.textContent.split(', ');
            const validLanguages = languages.filter(lang => allowedLanguages.includes(lang));
            ghanaianLanguageCell.textContent = validLanguages.join(', ');
        }
    });
}

function updateOrder() {
    const numCandidates = document.getElementById('num-candidates').value;
    const ghanaianLanguage = document.getElementById('ghanaian-language').value;
    const frenchOption = document.getElementById('french-option').value;
    const schoolName = document.getElementById('school-name').value;
    const location = document.getElementById('location').value;
    const contact = document.getElementById('contact').value;

    // Validate Ghanaian language option
    const allowedLanguages = [
        "Asante Twi", "Akwapem Twi", "Fante", "Ga", "Dagbani", "Dangme", "Ewe",
        "Nzema", "Gonja", "Kasem", "Dagaare", "Dagbane", "None"
    ];

    if (!allowedLanguages.includes(ghanaianLanguage)) {
        alert('Invalid Ghanaian language selected.');
        return;
    }

    // Update the relevant tab content with the new values
    // This is a placeholder - you should implement actual update logic here
    console.log('Updated values:', {
        numCandidates,
        ghanaianLanguage,
        frenchOption,
        schoolName,
        location,
        contact
    });

    alert('Order updated successfully!');
}
