document.getElementById("subdomain-copy").addEventListener("click", copy.bind(null, "subdomain"));
document.getElementById("password-copy").addEventListener("click", copy.bind(null, "password"));

function copy(field) {
    const fieldToCopy = document.getElementById(field).value;
    navigator.clipboard
        .writeText(fieldToCopy)
        .then(() => {
            document.getElementById(`${field}-copy-icon`).classList.add("hidden");
            document.getElementById(`${field}-copied-icon`).classList.remove("hidden");

            setTimeout(() => {
                document.getElementById(`${field}-copy-icon`).classList.remove("hidden");
                document.getElementById(`${field}-copied-icon`).classList.add("hidden");
            }, 3000);
        })
        .catch((err) => {
            console.error("Failed to copy: ", err);
        });
}
