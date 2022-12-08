<template>
    <section class="container mx-auto w-full flex lg:flex-row flex-wrap  justify-center items-center gap-24">
        <div class="h-56 w-52 border border-white border-opacity-10 drop-shadow-my rounded-lg bg-gradient-bl from-teal-700 to-cyan-500 overflow-hidden group transition-all ease-in-out duration-700"
            v-for="(card, index) in cards" :key="index">
            <figure class="w-full h-full relative backdrop-blur-sm bg-gray-900">
                <img :src="card.image" :alt="card.title"
                    class="w-full h-full object-cover z-10 transform group-hover:scale-105 duration-500 ease-in-out group-hover:rotate-2 blur-sm contrast-50 group-hover:filter-none">
                <p
                    class="absolute text-3xl capitalize  font-extrabold font-mono text-white z-50 transform top-3/4 left-10">
                    <span class="relative w-full inline-block before:block before:absolute before:-skew-y-6 before:bg-slate-800 p-1 before:transition-all before:ease-in-out before:duration-500 before:w-full  group-hover:before:-inset-0">
                        <span class="relative">
                            {{ card.title }}
                        </span>
                        
                    </span>
                    
                </p>
            </figure>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        cards: {
            type: Array,
            default: {}
        },
    },
}
</script>

<style lang="scss" scoped>

</style>