const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async(response) => {
            let json = await response.json();
            if (response.status == 200) {
                alert("Form submitted successfully");
                form.reset();
            } else {
                console.log(response);
                alert("Error: " + json.message);
            }
        })
        .catch(error => {
            console.log(error);
            alert("Something went wrong!");
        });
});
