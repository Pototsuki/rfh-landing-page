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
         INBOUND SIGNALS
         ===================== -->
    <g
      class="stroke-current opacity-45"
      stroke-width="4"
      stroke-linecap="round"
    >
      <line x1="240" y1="120" x2="260" y2="180" />
      <line x1="300" y1="110" x2="300" y2="180" />
      <line x1="360" y1="120" x2="340" y2="180" />
    </g>

    <!-- =====================
         FUNNEL (CONVERSION)
         ===================== -->
    <g
      class="stroke-current opacity-55"
      stroke-width="5"
      stroke-linejoin="round"
    >
      <path d="M180 200 H420 L330 330 H270 Z" />
    </g>

    <!-- =====================
         CONVERSION PATH
         ===================== -->
    <g
      class="stroke-current opacity-45"
      stroke-width="4"
      stroke-linecap="round"
    >
      <path d="M300 330 V400" />
    </g>

    <!-- =====================
         QUALIFIED LEAD
         ===================== -->
    <circle cx="300" cy="430" r="10" fill="currentColor" opacity="0.6" />
  </svg>
</template>
