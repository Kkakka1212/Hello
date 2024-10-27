const articles = {
    "Article1": {
        title: "Introduction to My Wiki",
        content: "This is the first article in my custom wiki site!"
    },
    "Article2": {
        title: "Article 2",
        content: "This is the second article in my custom wiki site."
    },
    "Article3": {
        title: "Article 3",
        content: "This is the third article in my custom wiki site."
    }
};

function loadArticle(articleId) {
    const article = articles[articleId];
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.content}</p>
    `;
}

document.getElementById('search').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    const articleList = document.getElementById('article-list');
    articleList.innerHTML = '';

    for (const [id, article] of Object.entries(articles)) {
        if (article.title.toLowerCase().includes(query)) {
            const li = document.createElement('li');
            li.textContent = article.title;
            li.onclick = () => loadArticle(id);
            articleList.appendChild(li);
        }
    }
});
