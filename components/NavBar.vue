<template>
    <div class="w-full px-5 text-white bg-gray-900 relative">
        <div class="container mx-auto flex justify-between items-center">
            <div class="rightNav flex justify-center items-center p-5">
                <span class="title text-2xl font-semibold text-gray-200">
                    LeeVenT
                </span>
            </div>
            <div class="leftNav w-auto lg:w-full">
                <Transition name="mainMenu">
                    <div :class="{ 'hidden': !openMenu, 'fixed': openMenu } " v-show="openMenu"
                        class="routelinks w-full left-0 top-16 bg-gray-900 text-gray-200 transition duration-700 ease-in-out">
                        <div class="lg:hidden">
                            <TransitionGroup name="extraMenu" class="links flex justify-center flex-col px-8 py-10 pt-5"
                                tag="ul">
                                <li v-for="(link, index) in links" :key="index"
                                    class="px-2 py-3 bg-inherit hover:bg-gradient-to-r from-gray-700 to-gray-900 transition duration-700 ease-in-out rounded-lg flex items-end border border-white justify-start gap-x-3 "
                                    v-show="openMenu">
                                    <span v-html="link.icone"></span>

                                    <span>{{ link.name }}</span>
                                </li>
                            </TransitionGroup>
                        </div>
                        <div class="extraMenu hidden px-2 pt-2 pb-4 rounded-md shadow-lg border bg-inherit">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <a class=" flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    href="#">
                                    <div class="bg-teal-500 text-white rounded-lg p-3">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                                            class="md:h-6 md:w-6 h-4 w-4">
                                            <path
                                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="ml-3">
                                        <p class="font-semibold">Appearance</p>
                                        <p class="text-sm">Easy customization</p>
                                    </div>
                                </a>

                                <a class="flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    href="#">
                                    <div class="bg-teal-500 text-white rounded-lg p-3">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                                            class="md:h-6 md:w-6 h-4 w-4">
                                            <path
                                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="ml-3">
                                        <p class="font-semibold">Comments</p>
                                        <p class="text-sm">Check your latest comments</p>
                                    </div>
                                </a>

                                <a class="flex flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    href="#">
                                    <div class="bg-teal-500 text-white rounded-lg p-3">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                                            class="md:h-6 md:w-6 h-4 w-4">
                                            <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                            <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                        </svg>
                                    </div>
                                    <div class="ml-3">
                                        <p class="font-semibold">Analytics</p>
                                        <p class="text-sm">Take a look at your statistics</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </Transition>
                <!-- larger screen -->
                <Transition name="navlinks">
                    <div
                        class="routelinks hidden lg:block w-full left-0 top-0 bg-gray-900 text-gray-200 transition duration-700 ease-in-out">
                        <TransitionGroup name="extraMenu"
                            class="links flex justify-center items-center flex-row p-1 gap-x-6" tag="ul">
                            <li v-for="(link, index) in links" :key="index"
                                class="px-6 flex items-center justify-start gap-x-2 py-3 bg-inherit hover:bg-gradient-to-b from-gray-700 to-gray-900 transition duration-700 ease-in-out rounded-lg">
                                <span v-html="link.icone"></span>

                                <span>{{link.name}}</span>
                            </li>

                        </TransitionGroup>
                    </div>
                </Transition>
                <div class="toggelButton lg:hidden top-1/2 transition ">
                    <span class="open focus:rotate-90 transition-all duration-700 text-white right-0">
                        <!-- open -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6" @click=toggel()>
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                        <!-- close -->
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" @click=toggel() v-if="openMenu">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg> -->
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { name: "Home", icone: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>` },
                { name: "Blog", icone: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" /></svg>` },
                { name: "News", icone: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" /></svg>` },
                { name: "About", icone: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
</svg>` },

                // "Blog","News", "Podcast", "About"
            ],
            openMenu: false,
            open: false
        }
    },
    methods: {
        toggel() {
            this.openMenu = !this.openMenu;
        }
    }
}
</script>
<style lang="css" scoped>
.extraMenu-enter-active,
.extraMenu-leave-active {
  transition: all 1s ease-in-out;
}
.extraMenu-enter-from,
.extraMenu-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/****************** */

.fade-inter,
.fade-leave-active {
    top:120%;
    transition: all 1s ease-in-out;
}