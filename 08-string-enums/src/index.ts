const enum MediaTypes {
    JSON = "application/json"
}

fetch("https://example.com/api/endpoint", {
    headers: {
        Accept: MediaTypes.JSON
    }
}).then(response => {
    // ...
});
