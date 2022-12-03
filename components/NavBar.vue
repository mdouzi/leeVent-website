<template>
    <div class="w-full p-2 px-4 flex justify-between items-center text-white bg-gray-900 relative">
        <div class="rightNav flex justify-center items-center p-5">
            <span class="title text-2xl font-semibold text-gray-200">
                LeeEvent
            </span>
        </div>
        <div class="leftNav">
            <div class="routelinks absolute w-full left-0 top-20 bg-gray-900 text-gray-200 transition duration-700 ease-in-out" @focusout="(openMenu = !openMenu)" :class="[openMenu? 'block' : 'hidden']">
                <ul class="links flex justify-center flex-col px-8 py-10 pt-5">
                    <li v-for="(link, index) in links" :key="index" class="px-2 py-3 bg-inherit hover:bg-gradient-to-r from-gray-700 to-gray-900 transition duration-700 ease-in-out rounded-lg ">
                        {{link}}
                    </li>
                </ul>
            </div>
            <div class="toggelButton">
                <span class="open focus:rotate-90 transition-all duration-700 text-white" @click="(openMenu = !openMenu)" :class="[openMenu? 'hidden' : 'block']">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                </span>
                <span class="close focus:-rotate-90 transition-all duration-700 text-white" @click="(openMenu = !openMenu)" :class="[openMenu? 'block' : 'hidden']">
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
                openMenu:false
        }
    }
}
</script>
<style lang="css" scoped>

</style>