
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch('https://9j7k8fs6jd.execute-api.ap-south-1.amazonaws.com/dev', { // Replace with your API Gateway URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Data saved successfully!') {
                // Redirect to thank you page
                window.location.href = 'thankyou-page.html'; // Replace with your thank you page URL
            } else {
                alert('Error: ' + data.message); // Handle other messages
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });
});

