let reviews = [];

// Function to handle form submission for verification
document.getElementById('verification-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const clientNumber = document.getElementById('client-number').value;
    // Here you can add logic to verify the status with the client number
    // For demo, we'll just display a message
    const statusResult = document.getElementById('status-result');
    statusResult.innerHTML = `Estatus para el cliente ${clientNumber}: Pendiente de implementación.`;
});

// Function to handle form submission for review
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const review = document.getElementById('review').value;
    reviews.push(review);
    displayReviews();
    document.getElementById('review-form').reset(); // Reset form after submission
});

// Function to display reviews
function displayReviews() {
    const reviewsList = document.getElementById('reviews-list');
    reviewsList.innerHTML = ''; // Clear existing reviews
    reviews.forEach(function(review, index) {
        const div = document.createElement('div');
        div.classList.add('review');
        div.innerHTML = `<p><strong>Reseña ${index + 1}:</strong> ${review}</p>`;
        reviewsList.appendChild(div);
    });
}