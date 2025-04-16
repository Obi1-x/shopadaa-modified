<template>
 <div>
    <header class="navbar">
      <div class="logo">SHOP ADA</div>
      <ul class="nav-links">
       Search
       <NuxtLink to="/">Home</NuxtLink>
       <NuxtLink to="/shop">Shop</NuxtLink>
       <NuxtLink to="/categories">Categories</NuxtLink>
       <NuxtLink to="/about">Blog</NuxtLink>
       <NuxtLink to="/account">Account</NuxtLink>
       <NuxtLink to="/cart">Cart</NuxtLink>
      </ul>
    </header>
    <slot/>
    <footer class="footer">
    <p>&copy; 2025 SHOP ADA. All rights reserved.</p>
    </footer>
 </div>
</template>

