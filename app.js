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

    const prospectsPct = document.getElementById('prospectsPct');
    const leadsPct = document.getElementById('leadsPct');
    const customersPct = document.getElementById('customersPct');

    const progressProspects = document.getElementById('progress-prospects');
    const progressLeads = document.getElementById('progress-leads');
    const progressCustomers = document.getElementById('progress-customers');

    function updateCalculations() {
        const totalRevenue = parseFloat(totalRevenueInput.value) || 0;
        const avgOrderValue = parseFloat(avgOrderValueInput.value) || 1;
        const lRate = parseFloat(leadRate.value) || 1;
        const pRate = parseFloat(prospectRate.value) || 1;

        // Calculate based on the formula
        const customers = Math.round(calculateCustomers(totalRevenue, avgOrderValue));
        const leads = Math.round(calculateLeads(customers, lRate));
        const prospects = Math.round(calculateProspects(leads, pRate));

        // Update Values
        customersValue.textContent = customers;
        leadsValue.textContent = leads;
        prospectsValue.textContent = prospects;

        // Calculate percentages Relative to Prospects (which acts as 100% of the funnel)
        const maxFunnel = prospects > 0 ? prospects : 1;
        const pctCust = ((customers / maxFunnel) * 100).toFixed(1);
        const pctLead = ((leads / maxFunnel) * 100).toFixed(1);

        // Update Card UI Percentages
        customersPct.textContent = `${pctCust}%`;
        leadsPct.textContent = `${pctLead}%`;
        prospectsPct.textContent = '100%';

        // Update Card Progress Bars
        progressCustomers.style.width = `${pctCust}%`;
        progressLeads.style.width = `${pctLead}%`;
        progressProspects.style.width = '100%';

        // Update Chart
        renderChart(prospects, leads, customers);
    }

    function renderChart(totalProspects, totalLeads, totalCustomers) {
        const chartBars = document.querySelector('.chart-bars');
        const chartXAxis = document.querySelector('.chart-x-axis');
        
        let barsHtml = '';
        for (let i = 1; i <= 6; i++) {
            // Progressive linear curve representing total up to index 'i' out of 6 months
            const mCust = Math.round(totalCustomers * i / 6);
            const mLead = Math.round(totalLeads * i / 6);
            const mPros = Math.round(totalProspects * i / 6);

            // Calculate percentage width to stack them visually inside the bar up to Max Prospects
            const maxP = totalProspects || 1; 
            const pctCust = (mCust / maxP) * 100;
            const pctLead = ((mLead - mCust) / maxP) * 100;
            const pctPros = ((mPros - mLead) / maxP) * 100;

            barsHtml += `
            <div class="bar-group">
                <div class="segment-customers" style="width: ${pctCust}%"></div>
                <div class="segment-leads" style="width: ${pctLead}%"></div>
                <div class="segment-prospects" style="width: ${pctPros}%"></div>
                <div class="chart-tooltip">Month #${i}<br>Prospects: ${mPros}<br>Leads: ${mLead}<br>Customers: ${mCust}</div>
            </div>`;
        }
        chartBars.innerHTML = barsHtml;

        // Render X-Axis logic
        let xAxisHtml = '';
        for (let i = 0; i <= 6; i++) {
            // Split max prospects into 6 even intervals for the x-axis grid
            let val = Math.round((totalProspects / 6) * i);
            xAxisHtml += `<span>${val} people</span>`;
        }
        chartXAxis.innerHTML = xAxisHtml;
    }

    function updateRate(input, display) {
        input.addEventListener('input', (e) => {
            const val = e.target.value;
            display.textContent = Number(val).toFixed(2) + '%';
            input.style.setProperty('--val', val + '%'); // Set CSS variable for fill gradient 
            updateCalculations();
        });
        
        // Initial set
        input.style.setProperty('--val', input.value + '%');
    }

    // Attach event listeners for inputs
    totalRevenueInput.addEventListener('input', updateCalculations);
    avgOrderValueInput.addEventListener('input', updateCalculations);

    updateRate(leadRate, leadRateVal);
    updateRate(prospectRate, prospectRateVal);
    
    // Initial calculate on page load
    updateCalculations();
});
