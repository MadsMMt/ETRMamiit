document.addEventListener('DOMContentLoaded', function() {

  const form = document.getElementById('investment-form');
  const resultElement = document.getElementById('performance-result');
  const captionElement = document.getElementById('performance-caption');


  form.addEventListener('submit', function(event) {
    event.preventDefault();

   
    const initialInvestmentInput = document.getElementById('initial-investment');
    const currentValueInput = document.getElementById('current-value');
    const initialInvestment = parseFloat(initialInvestmentInput.value);
    const currentValue = parseFloat(currentValueInput.value);

    if (initialInvestment && currentValue) {
  
      const performance = (currentValue - initialInvestment) / initialInvestment;
      const performancePercentage = (performance * 100).toFixed(2);

    
      resultElement.textContent = `Investment Performance: ${performancePercentage}%`;

    
      if (performance > 0) {
        captionElement.textContent = 'Your investment is doing well!';
        captionElement.style.color = 'green';
      } else if (performance < 0) {
        captionElement.textContent = 'Your investment is not doing well.';
        captionElement.style.color = 'red';
      } else {
        captionElement.textContent = 'Your investment is holding steady.';
        captionElement.style.color = 'blue';
      }
    }
  });
});