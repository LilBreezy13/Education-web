 // Sidebar navigation
 const sidebarLinks = document.querySelectorAll('.sidebar ul li');
 const contentSections = document.querySelectorAll('.content-section');

 sidebarLinks.forEach(link => {
     link.addEventListener('click', () => {
         const sectionId = link.getAttribute('data-section');

         // Remove active class from all sections
         contentSections.forEach(section => section.classList.remove('active'));

         // Add active class to the clicked section
         document.getElementById(sectionId).classList.add('active');

         // Update the header title
         document.querySelector('.header h2').textContent = link.textContent.trim();

         // Highlight active link in sidebar
         sidebarLinks.forEach(link => link.classList.remove('active'));
         link.classList.add('active');
     });
 });

 // Initialize Chart.js in the Analytics Section
 const ctx = document.getElementById('analyticsChart').getContext('2d');
 const analyticsChart = new Chart(ctx, {
     type: 'bar',
     data: {
         labels: ['Mock 1', 'Mock 2', 'Mock 3', 'Mock 4', 'Mock 5', 'Mock 6', 'Mock 7', 'Mock 8', 'Mock 9'],
         datasets: [{
             label: 'Likelihood of Questions',
             data: [80, 70, 75, 60, 90, 85, 92, 50, 40],
             backgroundColor: 'rgba(0, 10, 186, 1)',
         }]
     },
     options: {
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 });




// Example data for fee calculation
const registrationDetails = {
 examType: 'MOCK', // Change to 'TERMINAL' to test terminal exam
 enrollments: 15,
 fees: {
     mock: 20, // Fee per student for MOCK exam
     terminal: {
         preschool: 8,   // For nursery, KG1, KG2
         basic1_3: 9,    // For Basic 1 to 3
         basic4_6: 10,   // For Basic 4 to 6
         basic7_8: 15,   // For Basic 7 to 8
         basic9: 20      // For Basic 9
     }
 }
};

function calculateFee(details) {
 let totalFee = 0;

 if (details.examType === 'MOCK') {
     totalFee = details.enrollments * details.fees.mock;
 } else if (details.examType === 'TERMINAL') {
     // Example enrollments for different classes in TERMINAL exam
     const enrollmentsByClass = {
         preschool: 5,
         basic1_3: 4,
         basic4_6: 3,
         basic7_8: 2,
         basic9: 1
     };

     totalFee += enrollmentsByClass.preschool * details.fees.terminal.preschool;
     totalFee += enrollmentsByClass.basic1_3 * details.fees.terminal.basic1_3;
     totalFee += enrollmentsByClass.basic4_6 * details.fees.terminal.basic4_6;
     totalFee += enrollmentsByClass.basic7_8 * details.fees.terminal.basic7_8;
     totalFee += enrollmentsByClass.basic9 * details.fees.terminal.basic9;
 }

 return totalFee;
}

function updateBillDetails() {
 const examType = registrationDetails.examType;
 const enrollments = registrationDetails.enrollments;
 const feePerStudent = (examType === 'MOCK') ? registrationDetails.fees.mock : null;
 const totalFee = calculateFee(registrationDetails);

 // Update bill breakdown dynamically
 document.getElementById('exam-type').innerHTML = `<strong>Exam Type:</strong> ${examType}`;
 document.getElementById('total-enrollments').innerHTML = `<strong>Total Enrollments:</strong> ${enrollments} Students`;
 document.getElementById('fee-per-student').innerHTML = `<strong>Fee per Student:</strong> ${feePerStudent ? feePerStudent : 'Varies by Class'} Ghana Cedis`;
 document.getElementById('total-fee').innerHTML = `<strong>Total Fee:</strong> ${totalFee} Ghana Cedis`;
}

// Initial bill details update
updateBillDetails();

// Handle Proceed to Payment button click
document.getElementById('proceed-to-payment').addEventListener('click', function() {
 alert('Proceeding to payment...');
 // Payment gateway logic here...
});


// PAYMENTS 




