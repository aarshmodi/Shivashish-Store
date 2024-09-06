document.addEventListener("DOMContentLoaded", () => {
    const cartItems = [];
    const cartList = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");
    let total = 0;

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            addToCart(index + 1);
        });
    });

    function addToCart(productId) {
        const product = document.getElementById(`product${productId}`);
        const productName = product.querySelector("h3").innerText;
        const productPrice = parseFloat(product.querySelector("p").innerText.replace("Price: $", ""));
        
        cartItems.push({ name: productName, price: productPrice });
        updateCart();
    }

    function updateCart() {
        cartList.innerHTML = "";
        total = 0;
        cartItems.forEach(item => {
            const listItem = document.createElement("li");
            listItem.innerText = `${item.name} - $${item.price.toFixed(2)}`;
            cartList.appendChild(listItem);
            total += item.price;
        });
        totalElement.innerText = total.toFixed(2);

        if (cartItems.length === 0) {
            cartList.innerHTML = "<li>No items in cart</li>";
        }
    }
});
