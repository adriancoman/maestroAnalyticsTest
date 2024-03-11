var expectedAnalyticsData = [{
    event: "navigation",
    data: "login_screen"
},{
    event: "login",
    data: "success"
},{
    event: "navigation",
    data: "dashboard_screen"
}]

function fetchSentAnalyticsData() {
    const url = 'https://catfact.ninja/fact?email='+email; // replace the URL if you don't like cat facts
    const response = http.get(url);
    const data = json(response.body);
    if (data != expectedAnalyticsData) {
        throw new Error("Analytics data is not valid");
    }
    return data;
}

output = fetchSentAnalyticsData();

