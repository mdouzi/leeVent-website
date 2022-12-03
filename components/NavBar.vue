<template>
    <div class="w-full p-2 px-4 flex justify-between items-center text-white bg-gray-900 relative">
        <div class="rightNav flex justify-center items-center p-5">
            <span class="title text-2xl font-semibold text-gray-200">
                LeeEvent
            </span>
        </div>
        <div class="leftNav">
            <Transition name="fade">
                <div class="routelinks absolute w-full left-0 top-20 bg-gray-900 text-gray-200 transition duration-700 ease-in-out" v-show="openMenu" >
                        <ul class="links flex justify-center flex-col px-8 py-10 pt-5" >
                            <TransitionGroup  name="extraMenu" >
                                <li v-for="(link, index) in links" :key="index" class="px-2 py-3 bg-inherit hover:bg-gradient-to-r from-gray-700 to-gray-900 transition duration-700 ease-in-out rounded-lg " v-show="openMenu">
                                    {{link}}
                                </li> 
                                
                            </TransitionGroup>
                            <button role="li" class="rounded-lg border-2 px-5 py-2 border-gray-200 bg-inherit flex items-center" @click="(open = !open)" >
                                    <span> More</span>
                                    <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </ul>
                    <!-- <TransitionGroup v-show="open"  name="extraMenu"  class="absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right" > -->
                        <div class="extraMenu hidden px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <a class=" flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                                <div class="bg-teal-500 text-white rounded-lg p-3">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="md:h-6 md:w-6 h-4 w-4"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                                </div>
                                <div class="ml-3">
                                    <p class="font-semibold">Appearance</p>
                                    <p class="text-sm">Easy customization</p>
                                </div>
                                </a>

                                <a class="flex flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                                <div class="bg-teal-500 text-white rounded-lg p-3">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="md:h-6 md:w-6 h-4 w-4"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                </div>
                                <div class="ml-3">
                                    <p class="font-semibold">Comments</p>
                                    <p class="text-sm">Check your latest comments</p>
                                </div>
                                </a>

                                <a class="flex flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                                <div class="bg-teal-500 text-white rounded-lg p-3">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="md:h-6 md:w-6 h-4 w-4"><path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
                                </div>
                                <div class="ml-3">
                                    <p class="font-semibold">Analytics</p>
                                    <p class="text-sm">Take a look at your statistics</p>
                                </div>
                                </a>
                            </div>
                        </div>
                    <!-- </TransitionGroup> -->
                </div>
            </Transition>
            <div class="toggelButton">
                <span class="open focus:rotate-90 transition-all duration-700 text-white" @click="(openMenu = !openMenu)" v-show="!openMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                </span>
                <span class="close focus:-rotate-90 transition-all duration-700 text-white" @click="(openMenu = !openMenu)" v-show="openMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>

            </div>
        </div>

    </div>
</template>

<script>
export default{
    data(){
        return{
                links:["About","LeeVenT","Contact"],
                openMenu:false,
                open:false
        }
    }
}
</script>
<style lang="css" scoped>
.extraMenu-enter-active,
.extraMenu-leave-active {
  transition: all 1s ease;
}
.extraMenu-enter-from,
.extraMenu-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/****************** */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}