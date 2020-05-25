<template>
  <div>
    <header class="md:flex md:items-centers md:justify-around p-4 shadow-lg md:pb-4">
      <nav class="flex flex-wrap item-center justify-around text-primary font-bold">
        <div>
          <ul class="list-reset md:flex md:items-center">
            <li class="md:ml-4">
              <g-link class="nav__link block no-underline py-2 hover:text-darkgray md:border-none md:p-0" to="/">Home</g-link>
            </li>
            <li class="md:ml-4">
              <g-link class="nav__link  block no-underline hover:text-darkgray py-2 text-grey-darkest md:border-none md:p-0" to="/about/">About</g-link>
            <li class="md:ml-4 inline-block leading-none invisible hover:text-darkgray lg:visible sm:invisible">
              <a class="nav_link hover:text-2xl" href=""> <font-awesome :icon="['fab', 'github']"/> </a>
            </li>
            <li class="md:ml-4 inline-block leading-none invisible hover:text-darkgray lg:visible sm:invisible">
              <a class="nav_link hover:text-2xl" href=""> <font-awesome :icon="['fab', 'twitter']"/> </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  <!-- END NAVIGATION -->
  <slot/>

  <footer class="mt-20 font-light text-gray w-full text-center p-4 text-primary">
    <p class="text-sm">
      Copyright YOUR NAME 2020
    </p>
    <div>
      <p class="text-sm font-light">
        Developed using Gridsome, Tailwindcss, and Contentful
      </p>
    </div>
  </footer>

</div>
  
 

  


</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>


