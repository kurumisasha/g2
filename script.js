document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateButton');
    const voucherDetails = document.getElementById('voucherDetails');

    generateButton.addEventListener('click', function() {
        // Get the card number from the input field
        const cardNumber = document.getElementById('cardNumber').value.trim();

        if (cardNumber === "") {
            alert("Please enter a card number.");
            return;
        }

        // Simulate API call to fetch voucher details
        fetchVoucherDetails(cardNumber);
    });

    function fetchVoucherDetails(cardNumber) {
        const url = `https://api.teeg.cloud/vouchers/campaigns/Y4EHNWC/cards/${cardNumber}?tz=MID24IKJ5I`;
        const accessToken = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzE5Njg0MDI5LCJuYmYiOjE3MTk2ODMxMjksImlwQWRkcmVzcyI6IjEwNC4yOC4yMTUuMTM1Iiwib2lkIjoiNWY1MmFjOTMtYjQ5Zi00MmEzLTkxMGEtNjVmMTYyNjE4YmE2Iiwic3ViIjoiNWY1MmFjOTMtYjQ5Zi00MmEzLTkxMGEtNjVmMTYyNjE4YmE2IiwicGhvbmUiOiIrNjI4MjE0NzI2ODU3MCIsInRpZCI6ImFmMjFlMDU2LTBhMjEtNGQ4My1iNWRkLTQ0YzQzOWZhOGYzMCIsIm5vbmNlIjoiNDY0Nzg5OTctOGMyOS00ZDZlLWJiYzEtMWNmMWM0ODU0ZTFiIiwic2NwIjoiYWxsLWFwaXMiLCJhenAiOiJjYTBlNDg2OC0xNzdiLTQ5ZDItOGM2My1mMTA0NGUzZWRjNjMiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE3MTk2ODMxMjl9.oBGoT48XCbhMEogA-5Lgb2uke_iE4bTcLlCRqxwVX5GzbudDbiRt_6Ic77mVV5KV6aKw5uneJyKjJ-9OxHozTrDOPk151daV88spB5V8t3gjMDC_uIuTaEQHmWhHETr3YVy_R8ycHPIKhdnKwisIZs4dfW4Wj78iHLgHXadeVN0joggAJnWtozsfRUpnD0jL1tBOsFmdxhMXdXVFKNkq_B6hJ4qHlq2zP2GMQB3zst_XvlacVG2SxNaNnafcb0QY0y1oJgVz_fo81xGI0aZb2AGSVEAd0QvFYDzx2vst-w4Oz_YdcVppAsr3mRP7-cyU-BPHk6-bPviA7mGJyuyzOA';

        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Display voucher details
            voucherDetails.innerHTML = `
                <p><strong>Voucher Code:</strong> ${data.voucher_code}</p>
                <p><strong>Amount:</strong> ${data.amount}</p>
                <p><strong>Expiry Date:</strong> ${data.expiry_date}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching voucher details:', error);
            voucherDetails.innerHTML = '<p>Failed to fetch voucher details.</p>';
        });
    }
});
