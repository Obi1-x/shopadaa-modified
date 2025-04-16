<template>
  <div>
    <section class="cart">
    <h2>Your Shopping Cart</h2>
    <div class="cart-items">
      <div class="cart-item">
        <div class="item-name">Product Name</div>
        <div class="item-controls">
          <span>Qty: <input type="number" value="1" min="1"></span>
          <span class="item-price">$49.99</span>
        </div>
      </div>
      <div class="cart-item">
        <div class="item-name">Another Product</div>
        <div class="item-controls">
          <span>Qty: <input type="number" value="2" min="1"></span>
          <span class="item-price">$89.99</span>
        </div>
      </div>
    </div>

    <div class="order-summary">
      <p>Total: <strong>$139.98</strong></p>
      <a href="checkout.html" class="explore-button">Checkout</a>
    </div>
  </section>
  </div>
</template>

<script setup>
useHead({
  title: 'SHOP ADA | CART'
});
</script>