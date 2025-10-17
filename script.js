fetch('data.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n');
        let totalSales = 0;
        rows.forEach(row => {
            const columns = row.split(',');
            const sale = parseFloat(columns[1]); // Assuming sales are in the second column
            if (!isNaN(sale)) {
                totalSales += sale;
            }
        });
        document.getElementById('total-sales').innerText = `Total Sales: $${totalSales.toFixed(2)}`;
    })
    .catch(error => {
        document.getElementById('total-sales').innerText = 'Error loading sales data.';
        console.error('Error:', error);
    });