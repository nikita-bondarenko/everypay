<template>
  <HeaderSect />
  <main>
    <OrderSect />
    <HowSect />
    <AutoSect />
    <BanksSect></BanksSect>
    <ForWhomSect></ForWhomSect>
    <CaseSect></CaseSect>
    <RateSect></RateSect>
    <SoonSect></SoonSect>
    <SecureSect></SecureSect>
    <ConnectSect></ConnectSect>
  </main>
</template>

<script lang="ts" setup>
import AutoSect from './components/AutoSect.vue'
import BanksSect from './components/BanksSect.vue'
import CaseSect from './components/CaseSect.vue'
import ConnectSect from './components/ConnectSect.vue'
import ForWhomSect from './components/ForWhomSect.vue'
import HeaderSect from './components/HeaderSect.vue'
import HowSect from './components/HowSect.vue'
import OrderSect from './components/OrderSect.vue'
import RateSect from './components/RateSect.vue'
import SecureSect from './components/SecureSect.vue'
import SoonSect from './components/SoonSect.vue'
import { store } from '@/store'
store.getGajetWidth()

window.addEventListener('resize', () => {
  store.getGajetWidth()
})
</script>

<style lang="scss">
@import '@/styles/fonts.scss';
@import '@/styles/common/common.scss';
@import '@/styles/common/common-tablet.scss';
@import '@/styles/common/common-mobile.scss';
</style>
