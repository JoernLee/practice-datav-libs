<template>
    <div>
        <div class="container">
            <svg width="500" height="200" viewBox="0 0 500 200">
                <!--
                    matrix分为两组
                    [2,-1,50] => 2*_x + (-1)*y + 50 = x 通过旧X轴坐标计算得到新的X轴坐标
                    [1,2,0] => 1*_x + 2*_y + 0 = y 通过旧Y轴坐标计算得到新的Y轴坐标
                    顶点坐标 =通过上述矩阵变换 => 新的坐标点
                    [0,0] => [50,0]
                    [100,0] => [250,100]
                    [100,50] => [200, 200]
                    [0,50] => [0, 100]

                    transform="matrix(2 1 -1 2 50 0)"

                -->
                <rect x="5"
                      y="5"
                      width="100"
                      height="50"
                      fill="none"
                      stroke="blue"
                      stroke-width="5"
                      class="rect"
                />
            </svg>
        </div>
        <div class="container">
            <svg width="440" height="440">
                <circle r="200"
                        cx="220"
                        cy="220"
                        stroke-width="20"
                        stroke="#d1d3d7"
                        fill="none"
                />
                <!--  计算周长 2*Π*180 = 1257  -->
                <circle r="200"
                        cx="220"
                        cy="220"
                        stroke-width="20"
                        stroke="#00a5e0"
                        fill="none"
                        class="circle"
                        transform="matrix(0 -1 1 0 0 440)"
                />
            </svg>
        </div>
        <div class="container">
            <svg viewBox="0 0 1024 1024" width="200" height="200">
                <path class="logo"
                      d="M786.731708 648C807.42218 648 824.195121 603.109084 824.195121 547.733333 824.195121 492.357583 807.42218 447.466667 786.731708 447.466667 766.041235 447.466667 749.268292 492.357583 749.268292 547.733333 749.268292 603.109084 766.041235 648 786.731708 648ZM462.048781 698.133333C482.739253 698.133333 499.512194 658.853781 499.512194 610.4 499.512194 561.946217 482.739253 522.666667 462.048781 522.666667 441.358308 522.666667 424.585365 561.946217 424.585365 610.4 424.585365 658.853781 441.358308 698.133333 462.048781 698.133333ZM0 572.8C0 822.813926 229.933961 1024 512 1024 794.066039 1024 1024 822.813926 1024 572.8 1024 322.786074 794.066039 121.599999 512 121.599999 515.649685 121.599999 516.946722 122.183253 516.866057 122.124053 514.736119 120.560928 512.302005 118.428984 505.789668 112.472612 487.675081 95.904489 476.340222 86.603485 458.812092 75.393661 404.94781 40.945655 334.29571 21.333333 237.268292 21.333333 223.474645 21.333333 212.292683 32.556062 212.292683 46.4 212.292683 60.243938 223.474645 71.466667 237.268292 71.466667 325.013274 71.466667 386.336418 88.489363 431.969129 117.673005 444.078925 125.417623 494.717728 171.733333 512 171.733333 767.886246 171.733333 974.048781 352.120043 974.048781 572.8 974.048781 793.479955 767.886246 973.866667 512 973.866667 256.113754 973.866667 49.951219 793.479955 49.951219 572.8 49.951219 427.029845 140.536466 294.462295 284.745583 223.557118 297.132651 217.466607 302.254953 202.450961 296.186566 190.018733 290.11818 177.586505 275.157079 172.445527 262.770012 178.536038 102.138268 257.515945 0 406.990833 0 572.8Z"
                      p-id="3508"></path>
            </svg>
        </div>
        <div class="container">
            <svg class="line-container" viewbox="0 0 400 400" width="400" height="400">
                <line class="line" x1="0" y1="50" x2="400" y2="50"
                      fill="none" stroke-width="20" stroke="red"></line>
            </svg>
        </div>
        <div class="container">
            <svg width="200" height="200">
                <rect x="0" y="0" fill="red" width="100" height="50">
                    <!--smil标签是添加在标签里面的，作用于自己父容器-->
                    <!--对x属性进行to 10的变化 - 位移 1s之后生效 -->
                    <set attributeName="x" attributeTypes="XML" to="10" begin="1s"></set>
                    <set attributeName="x" attributeTypes="XML" to="20" begin="2s"></set>
                    <set attributeName="fill" attributeTypes="XML" to="blue" begin="3s"></set>
                </rect>
            </svg>
        </div>
        <div class="container">
            <svg width="200" height="200">
                <circle r="30" cx="0" cy="0" fill="blue" stroke="black" stroke-width="1">
                    <!--attributeType指定你要监听的是XML中属性还是CSS属性-->
                    <!--fill是表示结束的时候状态，freeze表示以动画结束时为最终状态-->
                    <animate attributeName="cx" attributeType="XML"
                             from="0" to="100" dur="3s" repeatCount="1" fill="freeze"></animate>
                    <animate attributeName="cy" attributeType="XML"
                             from="0" to="100" dur="3s" repeatCount="1" fill="freeze"></animate>
                    <animateTransform attributeName="transform" attributeType="XML"
                                      begin="0" dur="3s" type="scale" from="1" to="2"
                                      repeatCount="1" fill="freeze"
                    ></animateTransform>
                </circle>
            </svg>
        </div>
        <div class="container">
            <svg width="200" height="200">
                <polygon points="30 30 70 30 90 70 10 70" fill="#fcc" stroke="black">
                    <animate attributeName="points" attributeType="XML" begin="1s" to="50 30 70 50 50 90 30 50" dur="3s"
                             fill="freeze" repeatCount="1"></animate>
                </polygon>
            </svg>
        </div>
        <div class="container">
            <svg width="200" height="200">
                <rect x="0" y="0" fill="red" width="10" height="10">
                    <!--rotate控制转弯时的动画-->
                    <animateMotion
                            path="M10 10 L110 10 L110 110 L10 110 Z"
                            dur="5s"
                            rotate="0"
                            fill="freeze"
                            repeatCount="2"
                    />
                </rect>
                <!--这里只是把path单独拿出来看下，起点是10 10，然后有多条L线段，Z代表最后会闭合(画了个矩形边框) -->
                <path d="M10 10 L110 10 L110 110 L10 110 Z" fill="none"
                      stroke="green"></path>
            </svg>
        </div>
        <div class="container">
            <svg width="200" height="200">
                <rect x="0" y="0" fill="red" width="10" height="10">
                    <!--通过定义多个motion，配合begin(可以设置动态量)和新的path来实现原路返回效果-->
                    <!--begin也可以配置多个值，表示下一次开始时间 -->
                    <animateMotion
                            id="forward-rect"
                            path="M10 10 L110 10 L110 110 L10 110"
                            dur="2s"
                            rotate="0"
                            fill="freeze"
                            begin="0; backward-rect.end + 0.5s"
                    />
                    <animateMotion
                            id="backward-rect"
                            path="M10 110 L110 110 L110 10 L10 10"
                            dur="2s"
                            rotate="0"
                            fill="freeze"
                            begin="forward-rect.end + 0.5s"
                    />
                    <animate
                            id="red-to-blue"
                            attributeName="fill"
                            attributeType="XML"
                            from="red"
                            to="blue"
                            dur="2s"
                            fill="freeze"
                            begin="0; blue-to-red.end + 0.5s"
                    />
                    <animate
                            id="blue-to-red"
                            attributeName="fill"
                            attributeType="XML"
                            from="blue"
                            to="red"
                            dur="2s"
                            fill="freeze"
                            begin="red-to-blue.end + 0.5s"
                    />
                </rect>
                <!--这里只是把path单独拿出来看下，起点是10 10，然后有多条L线段，Z代表最后会闭合(画了个矩形边框) -->
                <path d="M10 10 L110 10 L110 110 L10 110" fill="none"
                      stroke="green"></path>
            </svg>
        </div>
        <div class="container bg-grey" >
            <svg width="400" height="400">
                <defs>
                    <mask id="test-mask">
                        <rect x="5" y="5" width="390" height="390" fill="purple"/>
                        <circle r="50" cx="150" cy="150" />
                    </mask>
                    <!-- 线性渐变-->
                    <linearGradient id="test-linear-gradient">
                        <stop offset="0%" stop-color="red"/>
                        <stop offset="50%" stop-color="green"/>
                        <stop offset="100%" stop-color="blue" stop-opacity="0.5"/>
                    </linearGradient>
                    <!-- 径向渐变 fx和fy会改变起始的投射点,cx和cy会改变投射区域位置-->
                    <!-- 尤其适合模拟一些光影效果 -->
                    <radialGradient
                            id="test-radial-gradient"
                            cx="50%"
                            cy="50%"
                            fx="50%"
                            fy="50%"
                            r="50%"
                    >
                        <stop offset="0%" stop-color="white" stop-opacity="1"/>
                        <stop offset="100%" stop-color="white" stop-opacity="0"/>
                    </radialGradient>
                </defs>
<!--                <rect x="5" y="5" width="390" height="390" fill="url(#test-radial-gradient)"/>-->
                <circle r="150" cx="150" cy="150" fill="url(#test-radial-gradient)" />
                <!--<rect x="5" y="5" width="390" height="390" fill="blue"
                      mask="url(#test-mask)"
                />-->
            </svg>
        </div>
    </div>

</template>

<script>

    import {onMounted} from 'vue'

    export default {
        name: 'SvgAnimation',
        setup() {
            onMounted(() => {
                // 获取svg图标的path长度，用于设置offset
                const logo = document.getElementsByClassName('logo')[0];
                console.log(logo.getTotalLength())
            })
        }
    }
</script>
<style scoped lang="scss">
    .container {
        svg {
            border: 1px solid #000;
        }
    }

    .rect {
        stroke-dasharray: 10;
    }

    .circle {
        animation: circle 5s linear infinite;
    }

    /*帧动画，我们规定start和end状态，css帮我们补充中间动画*/
    @keyframes circle {
        from {
            stroke-dasharray: 0, 1257;
        }

        to {
            stroke-dasharray: 1257, 0;
        }

    }

    .logo {
        fill: none;
        stroke: #333;
        stroke-width: 5;
        /*forwards保证logo停留在动画结束后的style，不会回到初始*/
        animation: logo 10s linear 1 forwards;
    }

    /*配置offset的两个状态来实现描边动画，但是具体value需要获取到svg图标的path长度*/
    @keyframes logo {
        from {
            stroke-dasharray: 6885;
            stroke-dashoffset: 6885;
        }

        to {
            stroke-dasharray: 6885;
            stroke-dashoffset: 0;
        }
    }

    @keyframes logo {
        0% {
            fill: white;
            stroke-dasharray: 6885;
            stroke-dashoffset: 6885;
        }

        50% {
            fill: white;
            stroke-dasharray: 6885;
            stroke-dashoffset: 0;
        }

        75% {
            fill: red;
        }

        100% {
            fill: blue;
        }
    }

    .line {
        stroke-dasharray: 400;
        /*移动dash，从右往左*/
        stroke-dashoffset: 400;
        transition: stroke-dashoffset .5s ease-out;
    }

    .line-container {
        &:hover {
            .line {
                stroke-dashoffset: 0;
            }
        }
    }

    .bg-grey {
        background: #333;
    }


</style>
