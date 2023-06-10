    const table = document.getElementById('picada-table');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const price = parseFloat(row.cells[1].innerText);
      const quantityInput = row.cells[2].getElementsByTagName('input')[0];
      const totalCell = row.cells[3];

      quantityInput.addEventListener('input', updateTotal);

      function updateTotal() {
        const quantity = parseInt(quantityInput.value);
        const total = price * quantity;

        totalCell.textContent = total;
        calculateTotal();
      }
    }

    function calculateTotal() {
      let totalSum = 0;
  
      for (let i = 1; i < rows.length - 1; i++) {
        const row = rows[i];
        const totalCell = row.cells[3];
        const total = parseFloat(totalCell.textContent);
  
        if (!isNaN(total)) {
          totalSum += total;
        }
      }
      const totalRow = rows[rows.length - 1];
    const totalCell = totalRow.cells[3];
    totalCell.textContent = totalSum;
  }

    

  
    // function calculateTotal() {
    //   let totalSum = 0;

    //   for (let i = 1; i < rows.length; i++) {
    //     const row = rows[i];
    //     const totalCell = row.cells[3];
    //     const total = parseFloat(totalCell.textContent);

    //     if (!isNaN(total)) {
    //       totalSum += total;
    //     }
    //   }

    //   const totalRow = table.rows[table.rows.length - 1];
    //   const totalCell = totalRow.cells[3];
    //   totalCell.textContent = totalSum;
    // }