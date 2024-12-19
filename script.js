document.getElementById('calculator-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const showerMinutes = parseFloat(document.getElementById('shower').value);
  const dishwasherLoads = parseFloat(document.getElementById('dishwasher').value);
  const laundryLoads = parseFloat(document.getElementById('laundry').value);
  const toiletFlushes = parseFloat(document.getElementById('toilet').value);
  const cookingMinutes = parseFloat(document.getElementById('cooking').value);
  const gardeningMinutes = parseFloat(document.getElementById('gardening').value);
  const drinkingLiters = parseFloat(document.getElementById('drinking').value);
  const cleaningMinutes = parseFloat(document.getElementById('cleaning').value);
  const carwashMinutes = parseFloat(document.getElementById('carwash').value);
  const otherLiters = parseFloat(document.getElementById('other').value);
  const waterFootprint = calculateWaterFootprint(
      showerMinutes,
      dishwasherLoads,
      laundryLoads,
      toiletFlushes,
      cookingMinutes,
      gardeningMinutes,
      drinkingLiters,
      cleaningMinutes,
      carwashMinutes,
      otherLiters
  );
  document.getElementById('result').textContent = `Your daily water footprint is approximately ${waterFootprint.toFixed(2)} liters.`;
  const ctx = document.getElementById('waterFootprintChart').getContext('2d');
  new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Shower', 'Dishwasher', 'Laundry', 'Toilet', 'Cooking', 'Gardening', 'Drinking', 'Cleaning', 'Car Wash', 'Other'],
          datasets: [{
              label: 'Water Footprint (liters)',
              data: [
                  showerMinutes * 10,
                  dishwasherLoads * 15,
                  laundryLoads * 20,
                  toiletFlushes * 5,
                  cookingMinutes * 1.5,
                  gardeningMinutes * 5,
                  drinkingLiters,
                  cleaningMinutes * 2,
                  carwashMinutes * 20,
                  otherLiters
              ],
              backgroundColor: [
                  'rgba(0, 51, 102, 0.8)',  
                  'rgba(102, 0, 51, 0.8)',  
                  'rgba(0, 102, 0, 0.8)',   
                  'rgba(102, 51, 0, 0.8)',  
                  'rgba(51, 0, 102, 0.8)',  
                  'rgba(102, 102, 0, 0.8)', 
                  'rgba(0, 102, 102, 0.8)', 
                  'rgba(51, 51, 102, 0.8)', 
                  'rgba(102, 0, 102, 0.8)', 
                  'rgba(102, 51, 102, 0.8)' 
              ],
              borderColor: [
                  'rgba(0, 51, 102, 1)',
                  'rgba(102, 0, 51, 1)',  
                  'rgba(0, 102, 0, 1)',   
                  'rgba(102, 51, 0, 1)',  
                  'rgba(51, 0, 102, 1)',  
                  'rgba(102, 102, 0, 1)', 
                  'rgba(0, 102, 102, 1)', 
                  'rgba(51, 51, 102, 1)', 
                  'rgba(102, 0, 102, 1)', 
                  'rgba(102, 51, 102, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
});

function calculateWaterFootprint(
  showerMinutes,
  dishwasherLoads,
  laundryLoads,
  toiletFlushes,
  cookingMinutes,
  gardeningMinutes,
  drinkingLiters,
  cleaningMinutes,
  carwashMinutes,
  otherLiters
) {
  const showerFactor = 10;
  const dishwasherFactor = 15;
  const laundryFactor = 20;
  const toiletFactor = 5;
  const cookingFactor = 1.5;
  const gardeningFactor = 5;
  const drinkingFactor = 1;
  const cleaningFactor = 2;
  const carwashFactor = 20;

  const showerFootprint = showerMinutes * showerFactor;
  const dishwasherFootprint = dishwasherLoads * dishwasherFactor;
  const laundryFootprint = laundryLoads * laundryFactor;
  const toiletFootprint = toiletFlushes * toiletFactor;
  const cookingFootprint = cookingMinutes * cookingFactor;
  const gardeningFootprint = gardeningMinutes * gardeningFactor;
  const drinkingFootprint = drinkingLiters * drinkingFactor;
  const cleaningFootprint = cleaningMinutes * cleaningFactor;
  const carwashFootprint = carwashMinutes * carwashFactor;
  const otherFootprint = otherLiters;

  const totalFootprint = showerFootprint +
      dishwasherFootprint +
      laundryFootprint +
      toiletFootprint +
      cookingFootprint +
      gardeningFootprint +
      drinkingFootprint +
      cleaningFootprint +
      carwashFootprint +
      otherFootprint;

  return totalFootprint;
}
