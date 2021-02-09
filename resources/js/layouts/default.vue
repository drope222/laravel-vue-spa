<template>
  <section class="min-h-screen bg-gray-50 dark:bg-gray-1000" x-data="{ sideBarToggle: false }">
    
    <sidebar :sidebar-toggle="sideBarToggle" @sidebar-toggle="sideBarToggle = !sideBarToggle" />
    <navbar @sidebar-toggle="sideBarToggle = !sideBarToggle" />

    <!-- body -->
     <div class="ml-0 transition md:ml-64 ">
     <div class="p-4">
        <!-- Add content here, remove div below -->
        <div class="h-96 dark:border-gray-700">
          <child/>
        </div>
        
      </div>
     </div>

 
  </section>
</template>

<script>
import Navbar from "~/components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Child from '../components/Child.vue';

export default {
  name: "MainLayout",

  components: {
    Navbar,
    Sidebar
  },

  data:()=>{
    return {
    sideBarToggle: true
    }

  }
 
   
};
</script>
