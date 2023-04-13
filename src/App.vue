<template>
  <div class="container">
    <SidebarMenu/>
    <div class="wrapper-body">
      <HeaderMenu/>

      <HeaderLedger
        :showBookingModal="showBookingModal"
        @changeTableByType="(type) => showTableByType = type"
        @changeTableByHours="(type) => showTableByHours = type"
        @openBookingModal="(status) => showBookingModal = status"/>

      <HorizontalTable v-if="showTableByType === 'horizontal'"/>
      <VerticalTable v-else-if="showTableByType === 'vertical'"/>
      <ListTable v-else/>
      
      <Transition name="slide-fade">
        <NewBookingModal
          :showBookingModal="showBookingModal" 
          @closeBookingModal="(status) => showBookingModal = status"/>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import HeaderMenu from "./components/HeaderMenu.vue";
import SidebarMenu from "./components/SidebarMenu.vue";
import HeaderLedger from "./components/HeaderLedger.vue";
import HorizontalTable from "./components/HorizontalTable.vue";
import VerticalTable from "./components/VerticalTable.vue";
import ListTable from './components/ListTable.vue';
import NewBookingModal from './components/NewBookingModal.vue';

const showTableByType = ref('horizontal');
const showTableByHours = ref('all');
const showBookingModal = ref(false);

// const show = ref(true)

</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.wrapper-body {
  margin-left: 120px;
  min-height: 100vh;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100vw);
}
</style>
