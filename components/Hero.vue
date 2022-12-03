<template>
    <div>
        <span class="border-4 border-red-600">
            Hello Woeld
        </span>
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
        grabPaths: function()
        {
            return (document.querySelectorAll('#leevntLoading path'));
        }
    },
    methods: {
        stroks()
        {
            const paths = this.grabPaths();
            paths.forEach(element=>{
                let style = element.style;
                let delay = Math.floor(Math.random()*3);
                style.strokeDasharray=`${element.getTotalLength()}`
                style.strokeDashoffset=`${element.getTotalLength()}`
                style.animation=`SVG-anim 8s ease forwards ${delay}s`;
            });
            //return paths;
        }
    },
    created() {
        //console.log(this.grabPaths());
    },
}
</script>