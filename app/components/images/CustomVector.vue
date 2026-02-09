<template>
  <svg
    class="w-full h-full"
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- =====================
         BACK PLATE
         ===================== -->
    <rect
      x="80"
      y="80"
      width="380"
      height="380"
      rx="36"
      class="stroke-current opacity-20"
      stroke-width="2.5"
    />

    <!-- =====================
         MODULE BLOCKS
         ===================== -->
    <g
      class="stroke-current opacity-55"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect x="200" y="180" width="120" height="120" rx="24" />
      <rect x="320" y="300" width="120" height="120" rx="24" />
      <rect x="140" y="300" width="100" height="100" rx="20" />
    </g>

    <!-- =====================
         FLEXIBLE CONNECTIONS
         ===================== -->
    <g
      class="stroke-current opacity-45"
      stroke-width="4"
      stroke-linecap="round"
    >
      <path d="M260 240 C300 260 320 280 340 300" />
      <path d="M200 330 C240 350 280 350 320 340" />
    </g>

    <!-- =====================
         CUSTOM OUTPUT NODE
         ===================== -->
    <circle cx="300" cy="460" r="10" fill="currentColor" opacity="0.6" />
  </svg>
</template>
