const iconShareDiv = document.getElementById('icon-share-div')
const shareInfoDiv = document.getElementById('share-info')
const authorDiv = document.getElementById('author')
const rightSideDiv = document.getElementById('right-side')
const articleTextP = document.getElementById('article-text-p')
const innerTextDiv = document.getElementById('inner-text')

function showShareInfo() {
    if (window.innerWidth > 1000) {
        shareInfoDiv.style.display = "flex"
    } else {
        authorDiv.innerHTML = `
            <div class="share-info-small">
                <h2>SHARE</h2>
                <img src="images/icon-facebook.svg">
                <img src="images/icon-twitter.svg">
                <img src="images/icon-pinterest.svg">
            </div>`

        authorDiv.style.padding = "0 0"
        rightSideDiv.style.padding = "20px 0 0 0"
        articleTextP.style.marginBottom = "0"
        innerTextDiv.style.paddingBottom = "20px"
    }
}

function hideShareInfo() {
    if (!shareInfoDiv.matches(':hover')) {
        shareInfoDiv.style.display = "none"
    }
}

function hidingShareInfo() {
    if (window.innerWidth > 1000) {
        authorDiv.innerHTML = `
            <div><img src="images/avatar-michelle.jpg" draggable="false"></div>
            <div class="author-data">
                <div>
                    <h2>Michelle Appleton</h2>
                    <p>28 Jun 2020</p>
                </div>

                <div class="icon-share-div" id="icon-share-div"><img src="images/icon-share.svg"></div>
            </div>`;

        // Знайти щойно вставлений елемент знову
        const newIconShareDiv = document.getElementById('icon-share-div');

        // Повторно додати обробники
        newIconShareDiv.addEventListener('mouseenter', showShareInfo);
        newIconShareDiv.addEventListener('mouseleave', hideShareInfo);

        authorDiv.style.padding = "0px 40px";
        rightSideDiv.style.padding = "20px 0";
        articleTextP.style.marginBottom = "0px";
        innerTextDiv.style.paddingBottom = "0px 40px";
    }
}

// Listeners
iconShareDiv.addEventListener('mouseenter', showShareInfo)
iconShareDiv.addEventListener('mouseleave', hideShareInfo)

shareInfoDiv.addEventListener('mouseenter', showShareInfo)
shareInfoDiv.addEventListener('mouseleave', hideShareInfo)

window.addEventListener('resize', hidingShareInfo)