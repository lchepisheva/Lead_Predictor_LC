document.addEventListener('DOMContentLoaded', () => {
    const leadRate = document.getElementById('leadRate');
    const leadRateVal = document.getElementById('leadRateVal');
    
    const prospectRate = document.getElementById('prospectRate');
    const prospectRateVal = document.getElementById('prospectRateVal');

    function updateRate(input, display) {
        input.addEventListener('input', (e) => {
            display.textContent = Number(e.target.value).toFixed(2) + '%';
        });
    }

    updateRate(leadRate, leadRateVal);
    updateRate(prospectRate, prospectRateVal);
});
