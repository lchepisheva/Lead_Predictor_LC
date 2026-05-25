function calculateCustomers(totalRevenue, averageOrderValue) {
    return totalRevenue / averageOrderValue;
}

function calculateLeads(customers, leadResponseRate) {
    return customers * 100 / leadResponseRate;
}

function calculateProspects(leads, prospectResponseRate) {
    return leads * 100 / prospectResponseRate;
}

document.addEventListener('DOMContentLoaded', () => {
    const leadRate = document.getElementById('leadRate');
    const leadRateVal = document.getElementById('leadRateVal');
    
    const prospectRate = document.getElementById('prospectRate');
    const prospectRateVal = document.getElementById('prospectRateVal');

    const totalRevenueInput = document.getElementById('totalRevenue');
    const avgOrderValueInput = document.getElementById('avgOrderValue');

    const prospectsValue = document.getElementById('prospectsValue');
    const leadsValue = document.getElementById('leadsValue');
    const customersValue = document.getElementById('customersValue');

    function updateCalculations() {
        const totalRevenue = parseFloat(totalRevenueInput.value) || 0;
        const avgOrderValue = parseFloat(avgOrderValueInput.value) || 1;
        const lRate = parseFloat(leadRate.value) || 1;
        const pRate = parseFloat(prospectRate.value) || 1;

        // Calculate based on the formula
        const customers = Math.round(calculateCustomers(totalRevenue, avgOrderValue));
        const leads = Math.round(calculateLeads(customers, lRate));
        const prospects = Math.round(calculateProspects(leads, pRate));

        // Update UI
        customersValue.textContent = customers;
        leadsValue.textContent = leads;
        prospectsValue.textContent = prospects;
    }

    function updateRate(input, display) {
        input.addEventListener('input', (e) => {
            display.textContent = Number(e.target.value).toFixed(2) + '%';
            updateCalculations();
        });
    }

    // Attach event listeners for inputs
    totalRevenueInput.addEventListener('input', updateCalculations);
    avgOrderValueInput.addEventListener('input', updateCalculations);

    updateRate(leadRate, leadRateVal);
    updateRate(prospectRate, prospectRateVal);
    
    // Initial calculate on page load
    updateCalculations();
});
