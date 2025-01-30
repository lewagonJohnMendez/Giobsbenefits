function toggleCategory(element) {
    element.classList.toggle("active");
    let content = element.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

function toggleDetails(element) {
    element.classList.toggle("active");
    let details = element.querySelector(".details");

    if (details.style.maxHeight) {
        details.style.maxHeight = null;
        details.style.opacity = "0";
    } else {
        details.style.maxHeight = details.scrollHeight + "px";
        details.style.opacity = "1";
    }
}
