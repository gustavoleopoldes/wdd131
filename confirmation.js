
function updateReviewCounter() {
    let reviewCount = localStorage.getItem('reviewCount');
    
    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount);
    }
    
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    
    document.getElementById('review-counter').textContent = reviewCount;
}

function displayReviewDetails() {
    const params = new URLSearchParams(window.location.search);
    const reviewContent = document.getElementById('review-content');
    
    if (params.has('product')) {
        const productId = params.get('product');
        const rating = params.get('rating');
        const installationDate = params.get('installation-date');
        const features = params.getAll('features');
        const review = params.get('review');
        const userName = params.get('user-name');

        let productName = productId;
        if (typeof products !== 'undefined') {
            const product = products.find(p => p.id === productId);
            if (product) {
                productName = product.name.charAt(0).toUpperCase() + product.name.slice(1);
            }
        }
        
        let detailsHTML = `
            <p><strong>Product:</strong> ${productName}</p>
            <p><strong>Rating:</strong> ${rating} star${rating !== '1' ? 's' : ''}</p>
            <p><strong>Installation Date:</strong> ${installationDate}</p>
        `;
        
        if (features && features.length > 0) {
            detailsHTML += `<p><strong>Useful Features:</strong> ${features.join(', ')}</p>`;
        }
        
        if (review) {
            detailsHTML += `<p><strong>Review:</strong> ${review}</p>`;
        }
        
        if (userName) {
            detailsHTML += `<p><strong>Submitted by:</strong> ${userName}</p>`;
        }
        
        reviewContent.innerHTML = detailsHTML;
    } else {
        reviewContent.innerHTML = '<p>No review details available.</p>';
    }
}

function setLastModified() {
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        const now = new Date();
        const formattedDate = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        lastModifiedElement.textContent = formattedDate;
    }
}

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener('DOMContentLoaded', function() {
    updateReviewCounter();
    displayReviewDetails();
    setLastModified();
});