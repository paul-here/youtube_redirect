document.addEventListener("DOMContentLoaded", function() {

    function createURLandRedirect(){
        let URLBuilder = ["https://www.youtube.com/results?search_query="];
        let queryText = document.getElementById('query').value;
        let qToken = queryText.split(' ');

        if (qToken.length >= 1){URLBuilder.push(qToken[0]);}

        for (let i = 1; i < qToken.length; i++) {
            URLBuilder.push("+", qToken[i]);
        }

        fullURL = URLBuilder.join("");

        window.location.href = fullURL;
    }


    document.getElementById('submit-button').addEventListener('click', function() {
        createURLandRedirect();
    });

    document.getElementById('query').addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            createURLandRedirect();
        }
    });
});
