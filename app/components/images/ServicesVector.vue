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
         MESSAGE FLOW NODES
         ===================== -->
    <g
      class="stroke-current opacity-55"
      stroke-width="4"
      stroke-linecap="round"
    >
      <circle cx="220" cy="240" r="24" />
      <circle cx="340" cy="300" r="24" />
    </g>

    <!-- =====================
         RESPONSE PATH
         ===================== -->
    <g
      class="stroke-current opacity-45"
      stroke-width="4"
      stroke-linecap="round"
    >
      <path d="M244 248 C280 260 300 280 316 292" />
    </g>

    <!-- =====================
         SERVICES QUEUE / SLA
         ===================== -->
    <g
      class="stroke-current opacity-35"
      stroke-width="5"
      stroke-linecap="round"
    >
      <path d="M200 360 H400" />
      <path d="M230 400 H370" />
    </g>

    <!-- =====================
         RESOLUTION DOT
         ===================== -->
    <circle cx="300" cy="440" r="10" fill="currentColor" opacity="0.6" />
  </svg>
</template>
