
document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll('[data-page]');
    const dashboardContent = document.getElementById('dashboardContent');
    const registrationContent = document.getElementById('registrationContent');
    const analyticsContent = document.getElementById('analyticsContent');
    const filesContent = document.getElementById('filesContent');
    const usersContent = document.getElementById('usersContent');
    const settingsContent = document.getElementById('settingsContent');
    const pageTitle = document.getElementById('pageTitle');

    pages.forEach(page => {
        page.addEventListener('click', function () {
            const targetPage = this.getAttribute('data-page');
            dashboardContent.classList.add('hidden');
            registrationContent.classList.add('hidden');
            analyticsContent.classList.add('hidden');
            filesContent.classList.add('hidden');
            usersContent.classList.add('hidden');
            settingsContent.classList.add('hidden');

            switch (targetPage) {
                case 'dashboard':
                    dashboardContent.classList.remove('hidden');
                    pageTitle.innerText = 'Dashboard';
                    break;
                case 'registration':
                    registrationContent.classList.remove('hidden');
                    pageTitle.innerText = 'Current Registration';
                    break;
                case 'analytics':
                    analyticsContent.classList.remove('hidden');
                    pageTitle.innerText = 'Analytics';
                    renderCharts();
                    break;
                case 'files':
                    filesContent.classList.remove('hidden');
                    pageTitle.innerText = 'Edit Registration';
                    break;
                case 'users':
                    usersContent.classList.remove('hidden');
                    pageTitle.innerText = 'Users';
                    break;
                case 'settings':
                    settingsContent.classList.remove('hidden');
                    pageTitle.innerText = 'Settings';
                    break;
            }
        });
    });

    // Toggle profile dropdown menu
    document.getElementById('profileMenuBtn').addEventListener('click', function () {
        document.getElementById('profileDropdown').classList.toggle('hidden');
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', function (e) {
        const profileMenu = document.getElementById('profileMenuContainer');
        if (!profileMenu.contains(e.target)) {
            document.getElementById('profileDropdown').classList.add('hidden');
        }
    });

    // Charts rendering function
    function renderCharts() {
        const userGrowthChart = new ApexCharts(document.querySelector("#userGrowthChart"), {
            chart: {
                type: 'line',
                height: 250
            },
            series: [{
                name: 'Users',
                data: [10, 15, 30, 50, 70, 90]
            }],
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            }
        });

        const revenueOverviewChart = new ApexCharts(document.querySelector("#revenueOverviewChart"), {
            chart: {
                type: 'bar',
                height: 250
            },
            series: [{
                name: 'Revenue',
                data: [1000, 1500, 2000, 2500, 3000, 3500]
            }],
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            }
        });

        const trafficSourcesChart = new ApexCharts(document.querySelector("#trafficSourcesChart"), {
            chart: {
                type: 'pie',
                height: 250
            },
            series: [30, 40, 20, 10],
            labels: ['Organic', 'Direct', 'Referral', 'Social']
        });

        userGrowthChart.render();
        revenueOverviewChart.render();
        trafficSourcesChart.render();
    }

    // Initial load
    dashboardContent.classList.remove('hidden');
});



