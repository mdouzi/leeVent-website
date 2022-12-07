<template>
    <div class="w-full bg-white p-8">
        <Card :cards="cardData"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cardData:
                [
                    {
                        "image" : "https://cdn.pixabay.com/photo/2014/02/13/07/28/wordpress-265132_1280.jpg",
                        "title" : "blog",
                    },
                    {
                        "image" : "https://cdn.pixabay.com/photo/2014/05/05/19/49/microphone-338481_1280.jpg",
                        "title" : "podcast",
                    },
                    {
                        "image" : "https://media.istockphoto.com/id/957428304/photo/media-in-the-uk.jpg?s=612x612&w=is&k=20&c=fLoShPSGeErx1oPmIBCMiBlFkYcVXT2Qf-dZTSyMSe8=",
                        "title" : "news",
                    },
                    {
                        "image" : "https://cdn.pixabay.com/photo/2017/10/12/18/12/cart-2845274_1280.png",
                        "title" : "shop",
                    },
                    
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>