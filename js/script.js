function showMore() {
    const moreInfo = document.getElementById("more");
    const button = document.querySelector("button");

    if (moreInfo.style.display === "block") {
        moreInfo.style.display = "none";
        button.textContent = "Learn More";
    } else {
        moreInfo.style.display = "block";
        button.textContent = "Show Less";
    }
}