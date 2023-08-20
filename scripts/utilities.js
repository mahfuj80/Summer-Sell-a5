function getNameAndPrice(target) {
    // Empty the Grand Total and Discount Price
    document.getElementById('discount-price').innerText = '00.00';
    document.getElementById('grand-total').innerText = '00.00';
    // Get The Name
    const name = target.childNodes[3].childNodes[3].innerText;
    // Set the Name
    const producesContainer = document.getElementById('products-name-container');
    const count = producesContainer.childElementCount + 1;
    product = `<p>${count}. ${name}</p>`
    producesContainer.innerHTML += product;
    // Get the Price 
    const priceString = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    const price = parseFloat(priceString);
    // Get The Total Price
    const totalPriceElement = document.getElementById('total-price');
    const totalPriceString = totalPriceElement.innerText;
    const totalPrice = parseFloat(totalPriceString);
    // Set The Total Price
    const totalAmountString = totalPriceElement.innerText = (totalPrice + price).toFixed(2);
    const totalAmount = parseFloat(totalAmountString);
    // Make The Purchase Button Enable if anyone select the product and total amount will be greater than 0;
    if (totalAmount > 0) {
        const purchaseButton = document.getElementById('purchaseButton');
        purchaseButton.removeAttribute("disabled");
        purchaseButton.classList.remove('bg-gray-400');
    }
    // Make the coupon Button Enable If people purchase product more than or equal 200 tk;
    if (totalAmount >= 200) {
        const couponApplyBtn = document.getElementById('apply-coupon');
        couponApplyBtn.removeAttribute('disabled');
        couponApplyBtn.classList.remove('bg-gray-400');
    }

}
function coupon() {
    const totalAmountString = document.getElementById('total-price').innerText;
    const totalAmount = parseFloat(totalAmountString);
    // Get the Coupon Code
    const couponInputElement = document.getElementById('coupon-container');
    const coupon = couponInputElement.value;
    // Empty the coupon container
    couponInputElement.value = "";
    // Check the coupon Valid or not;
    if (coupon === "SELL200") {
        // Calculate the Discount and Grand Total Amount
        const discount = ((20 / 100) * totalAmount).toFixed(2);
        // Set the Discount Element to the discount field;
        document.getElementById('discount-price').innerText = discount;
        // Calculate The grand total amount
        const grandTotal = (totalAmount - discount).toFixed(2);
        // Set teh Grand Total Price 
        document.getElementById('grand-total').innerText = grandTotal;
    } else {
        return alert('Please Insert Valid Coupon');
    }
}