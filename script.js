
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

  function populateProductDropdown() {
    const productSelect = document.getElementById('product');
    
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1); // Capitalize first letter
      productSelect.appendChild(option);
    });
  }
  
  function setLastModified() {
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
      const now = new Date();
      const formattedDate = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
      lastModifiedElement.textContent = formattedDate;
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    populateProductDropdown();
    setLastModified();
  });