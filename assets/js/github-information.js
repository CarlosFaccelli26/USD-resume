function fetchGitHubInformation(event) {
    var username = $("gh-username").val();

    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }

    $("#user-data").htm(`
    <div id="loader">
        <img src="assets/image/loader.gif" alt="loading"/>
    </div>`);

    $.when {
        $.getJSON(`http://api.github.com/users/${username}`)
    }.then(function (response) {
        var userData = response;
        $("#gh-user-data").html(userInformationHTML(username));
    }, function (errorResponse) {
        if (errorResponse) {
            if (errorResponse === 404) {
                $("#gh-user-data").html(`<h2>No info found for users${username}</h2>`);
            } else {
                console.log(errorResponse);
                $("#gh-user-name").html(`<h2>Error: ${errorResponse.response.JSON.message</h2 > `);
            }
        }
    });
}