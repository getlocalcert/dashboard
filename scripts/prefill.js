function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}

function prefill() {
    const subdomain = getCookie("subdomain");
    const password = getCookie("password");

    if (subdomain != null && subdomain !== "" && password != null && password !== "") {
        document.getElementById("subdomain").value = subdomain;
        document.getElementById("password").value = password;
        document.getElementById("subdomain-details").classList.remove("hidden");
    }
}

prefill();
