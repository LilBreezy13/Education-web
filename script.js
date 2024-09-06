const API_KEY = "dc3ffa91c620416bb62c6bfe37dc6363"; // Replace with your actual API key
const url = "https://newsapi.org/v2/everything?";

document.addEventListener("DOMContentLoaded", () => {
    fetchLatestNews();
});

async function fetchLatestNews() {
    const query = 'Ghana Education OR Pulse Ghana OR 3news OR NACA';
    const queryParams = new URLSearchParams({
        q: query,
        domains: '3news.com,pulse.com.gh',
        apiKey: API_KEY,
        language: 'en',
        sortBy: 'publishedAt',  // Sort by the latest news first
        pageSize: 9,  // Fetch the 10 latest news articles
    });

    try {
        const res = await fetch(`${url}${queryParams}`);
        const data = await res.json();

        // If the API doesn't return articles, show an error message
        if (!data.articles || data.articles.length === 0) {
            displayErrorMessage("No news articles found. Please check again later.");
            return;
        }

        // If the articles are successfully fetched, display them
        displayNews(data.articles);
    } catch (error) {
        displayErrorMessage("Failed to fetch news. Please try again later.");
        console.error("Error fetching news:", error);
    }
}

function displayNews(articles) {
    const newsContainer = document.getElementById("news-container");

    // Clear any existing content
    newsContainer.innerHTML = "";

    // Loop through articles and create blog cards dynamically
    articles.forEach((article) => {
        const articleDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });

        // Use a default image if no image is provided
        const imageUrl = article.urlToImage || './assets/images/default-news.jpg';

        const newsCard = `
        <li>
            <div class="blog-card">
                <figure class="card-banner img-holder has-after" style="--width: 370; --height: 370">
                    <img
                        src="${imageUrl}"
                        width="370"
                        height="370"
                        loading="lazy"
                        alt="${article.title}"
                        class="img-cover"
                    />
                </figure>

                <div class="card-content">
                    <a href="${article.url}" target="_blank" class="card-btn" aria-label="read more">
                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                    </a>

                    <a href="${article.url}" target="_blank" class="card-subtitle">Recently</a>

                    <h3 class="h3">
                        <a href="${article.url}" target="_blank" class="card-title">
                            ${article.title}
                        </a>
                    </h3>

                    <ul class="card-meta-list">
                        <li class="card-meta-item">
                            <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
                            <span class="span">${articleDate}</span>
                        </li>

                        <li class="card-meta-item">
                            <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>
                            <span class="span">Source: ${article.source.name}</span>
                        </li>
                    </ul>

                    <p class="card-text">
                        ${article.description || 'No description available.'}
                    </p>
                </div>
            </div>
        </li>
        `;

        // Append the created news card to the container
        newsContainer.insertAdjacentHTML("beforeend", newsCard);
    });
}

// Display an error message in case of issues
function displayErrorMessage(message) {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = `<li><p class="error-message">${message}</p></li>`;
}
