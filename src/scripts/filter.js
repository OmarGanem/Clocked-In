
document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const productCards = productsContainer.querySelectorAll('.item-card-wrapper');
  
    // Function to filter products by category
    function filterProducts(category) {
      productCards.forEach(card => {
        const productCategory = card.getAttribute('data-category');
        if (category === 'all' || productCategory === category) {
          card.style.display = 'flex'; 
        } else {
          card.style.display = 'none'; // Hide non-matching cards
        }
      });
    }
  
    // Filter by category on button click
    document.querySelectorAll('.filter-button').forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-filter');
        filterProducts(category);
      });
    });
  
    // Search functionality
    document.getElementById('search').addEventListener('click', () => {
      const searchTerm = document.getElementById('search-input').value.toLowerCase();
      productCards.forEach(card => {
        const productName = card.querySelector('.product-title').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
