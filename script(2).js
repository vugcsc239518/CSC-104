document.getElementById('interest-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const times = parseInt(document.getElementById('times').value);
    const years = parseInt(document.getElementById('years').value);

    const amount = principal * Math.pow((1 + rate / times), times * years);
    const interest = amount - principal;

    document.getElementById('result').innerText = `Total Amount: ${amount.toFixed(2)}\nCompound Interest: ${interest.toFixed(2)}`;
});
