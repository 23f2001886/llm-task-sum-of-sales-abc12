fetch('data.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n');
        let total = 0;
        rows.forEach(row => {
            const columns = row.split(',');
            if (columns.length > 1) {
                const sale = parseFloat(columns[1]);
                if (!isNaN(sale)) {
                    total += sale;
                }
            }
        });
        document.getElementById('total-sales').innerText = `Total Sales: $${total.toFixed(2)}`;
    })
    .catch(error => {
        document.getElementById('total-sales').innerText = 'Error loading sales data.';
        console.error('Error:', error);
    });