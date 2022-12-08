<template>
    <div class="hero w-full h-1/2  flex justify-center items-center bg-bgHero bg-cover relative">
            <div class="content w-full flex justify-between items-center h-full container mx-auto">
               <div class="content w-full lg:w-1/2 h-full flex  justify-center items-center gap-y-5">
                    <div class="font-mono">
                        <LoadingAnimation/>
                        <!-- <h1 class="title text-9xl fontf-inheret ">LeeVnT</h1>
                        <p class="description text-gray-900 text-lg ">LeeVnT is a community initiative, to discuss, highlight and share the latest IT topics in Moroccan Darija.</p>
                        <button class="bg-purple-500 text-white fontf p-4 rounded-full">
                            Start Browsing
                        </button> -->
                    </div>
               </div>
               <div class="mediaborder lg:w-1/2  w-full h-full border-green-600 hidden lg:flex justify-center items-center z-50">
                   <img src="~/assets/audio_conversation.svg" alt="" srcset="">
               </div>
            </div>

            <!-- wave svg -->
            <div class="">
                <svg class="absolute inset-x-0 -bottom-1 text-white" viewBox="0 0 1160 163"><path fill="currentColor" d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"></path></svg>
            </div>
   </div>
</template>
<script>
export default{
    data() {
        return {
            paths:[]
        }
    },
    computed:{
    
    },
    methods: {

    },
    created() {
    },
}
</script>

<style lang="css" scoped>
   
</style>