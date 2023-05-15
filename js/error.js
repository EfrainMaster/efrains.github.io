if(document.readyState === "complete") {
    const noElement = document.getElementsByClassName("error404");
    if(noElement.length === 0) {
        const url = window.location.href;
        const fileName = url.substring(url.lastIndexOf("/") + 1);
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(this.readyState === 4 && this.status === 404) {
                window.location.href = "/404.html";
            }
        };
        xhttp.open("HEAD", fileName, true);
        xhttp.send();
    }
}

