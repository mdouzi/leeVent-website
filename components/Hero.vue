<template>
    <div>
        <span class="border-4 border-red-600">
            Hello Woeld
        </span>
        <!-- <div class="loading">
            <svg width="2227.5" height="288.75" viewBox="0 0 2227.5 288.75" xmlns="http://www.w3.org/2000/svg"><g id="leevntLoading" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#ffffff" stroke-width="1.25mm" fill="#ffffff" style="stroke:#ffffff;stroke-width:1.25mm;fill:#ffffff"><path d="M 1113.75 288.75 L 1072.5 288.75 L 1072.5 247.5 L 1031.25 247.5 L 1031.25 206.25 L 990 206.25 L 990 165 L 948.75 165 L 948.75 0 L 1031.25 0 L 1031.25 123.75 L 1072.5 123.75 L 1072.5 165 L 1113.75 165 L 1113.75 123.75 L 1155 123.75 L 1155 0 L 1237.5 0 L 1237.5 165 L 1196.25 165 L 1196.25 206.25 L 1155 206.25 L 1155 247.5 L 1113.75 247.5 L 1113.75 288.75 Z M 536.25 288.75 L 330 288.75 L 330 247.5 L 288.75 247.5 L 288.75 123.75 L 330 123.75 L 330 82.5 L 536.25 82.5 L 536.25 123.75 L 577.5 123.75 L 577.5 206.25 L 371.25 206.25 L 371.25 247.5 L 536.25 247.5 L 536.25 288.75 Z M 866.25 288.75 L 660 288.75 L 660 247.5 L 618.75 247.5 L 618.75 123.75 L 660 123.75 L 660 82.5 L 866.25 82.5 L 866.25 123.75 L 907.5 123.75 L 907.5 206.25 L 701.25 206.25 L 701.25 247.5 L 866.25 247.5 L 866.25 288.75 Z M 1526.25 288.75 L 1320 288.75 L 1320 247.5 L 1278.75 247.5 L 1278.75 123.75 L 1320 123.75 L 1320 82.5 L 1526.25 82.5 L 1526.25 123.75 L 1567.5 123.75 L 1567.5 206.25 L 1361.25 206.25 L 1361.25 247.5 L 1526.25 247.5 L 1526.25 288.75 Z M 1691.25 288.75 L 1608.75 288.75 L 1608.75 82.5 L 1856.25 82.5 L 1856.25 123.75 L 1897.5 123.75 L 1897.5 288.75 L 1815 288.75 L 1815 123.75 L 1691.25 123.75 L 1691.25 288.75 Z M 247.5 288.75 L 0 288.75 L 0 0 L 82.5 0 L 82.5 247.5 L 247.5 247.5 L 247.5 288.75 Z M 2145 288.75 L 2062.5 288.75 L 2062.5 41.25 L 1980 41.25 L 1980 0 L 2227.5 0 L 2227.5 41.25 L 2145 41.25 L 2145 288.75 Z M 371.25 123.75 L 371.25 165 L 495 165 L 495 123.75 L 371.25 123.75 Z M 701.25 123.75 L 701.25 165 L 825 165 L 825 123.75 L 701.25 123.75 Z M 1361.25 123.75 L 1361.25 165 L 1485 165 L 1485 123.75 L 1361.25 123.75 Z" vector-effect="non-scaling-stroke"/></g></svg>
        </div> -->
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