document.addEventListener('DOMContentLoaded', () => {
    const showPopupButton = document.getElementById('showPopup');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('closePopup');
    const uploadImage = document.getElementById('uploadImage');
    const eventImage = document.getElementById('eventImage');
    const dontMissOutButton = document.getElementById('dontMissOut');
    const registerSection = document.getElementById('registerSection');
    const registerNowButton = document.getElementById('registerNow');

    // Admin-defined exam details
    const examDetails = {
        name: 'Alpha Mock Exam',
        date: '2024-09-30',
        price: '20.00 per candidate',
        description: 'Based exclusively on Basic 7 curriculum.'
    };

    // Show the popup
    showPopupButton.addEventListener('click', (e) => {
        e.preventDefault();
        // Set exam details
        document.getElementById('popupTitle').textContent = `Upcoming Event: ${examDetails.name}`;
        document.getElementById('examName').textContent = `Exam Name: ${examDetails.name}`;
        document.getElementById('examDateDisplay').textContent = `Date: ${examDetails.date}`;
        document.getElementById('examPriceDisplay').textContent = `Price: ${examDetails.price}`;
        document.getElementById('examDescriptionDisplay').textContent = `Description: ${examDetails.description}`;
        
        popup.style.display = 'flex';
    });

    // Close the popup
    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Handle image upload
    uploadImage.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                eventImage.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

    // Handle "Don't Miss Out" button click
    dontMissOutButton.addEventListener('click', () => {
        dontMissOutButton.style.display = 'none'; // Hide the "Don't Miss Out" button
        registerSection.classList.remove('hidden'); // Show the registration section
    });
});
