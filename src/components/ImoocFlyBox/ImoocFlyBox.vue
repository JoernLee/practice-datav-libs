<template>
    <div class="imooc-fly-box" ref="imoocFlyBox">
        <!-- viewbox不需要额外写，默认就是0 0 width height-->
        <svg :width="width" :height="height">

            <defs>
                <!--生成矩形边框并复用-->
                <path
                        :id="pathId"
                        :d="path"
                        fill="none"
                />
                <!--给外层rect添加一个mask来实现流星效果-->
                <mask :id="maskId">
                    <circle :r="starLength" cx="0" cy="0" :fill="`url(#${radialGradientId})`">
                        <animateMotion
                                :dur="`${duration}s`"
                                :path="path"
                                rotate="auto"
                                repeatCount="indefinite"
                        />
                    </circle>
                </mask>
                <radialGradient
                        :id="radialGradientId"
                        cx="50%"
                        cy="50%"
                        fx="100%"
                        fy="50%"
                        r="50%"
                >
                    <stop offset="0%" stop-color="white" stop-opacity="1"/>
                    <stop offset="100%" stop-color="white" stop-opacity="0"/>
                </radialGradient>
            </defs>
            <use
                    :href="`#${pathId}`"
                    stroke-width="1"
                    :stroke="lineColor"
            />
            <use
                    :href="`#${pathId}`"
                    stroke-width="3"
                    :stroke="starColor"
                    :mask="`url(#${maskId})`"
            />

        </svg>
        <div class="imooc-fly-box-content">
            <!--容器组件，让用户可以往里面加内容-->
            <slot>

            </slot>
        </div>
    </div>
</template>

<script>
    import {computed, ref, onMounted, getCurrentInstance} from 'vue';
    import {v4 as uuidv4} from 'uuid';

    export default {
        name: 'ImoocFlyBox',
        props: {
            lineColor: {
                type: String,
                default: '#235fa7'
            },
            starColor:{
                type: String,
                default: '#4fd2dd'
            },
            starLength: {
                type: [String, Number],
                default: 50
            },
            duration: {
                type: [String, Number],
                default: 3
            }
        },
        setup(ctx) {
            // 直接使用就可以生成唯一键
            const uuid = uuidv4();
            const width = ref(0);
            const height = ref(0);
            const refName = 'imoocFlyBox';
            const pathId = `${refName}-${uuid}`;
            const radialGradientId = `${refName}-gradient-${uuid}`;
            const maskId = `${refName}-mask-${uuid}`;
            const path = computed(() => {
                // 根据宽高来计算的属性
                `M5 5 L${width.value - 5} 5 ${width.value - 5} ${height.value - 5} L5 ${height.value - 5} Z`
            });

            const init = () => {
                // 获取组件容器宽高 - 需要根据父容器
                // 需要通过新的api拿到运行时状态,ctx不行，他是setup状态
                const instance = getCurrentInstance();
                // 拿到父容器dom与实际宽高
                const dom = instance.ctx.$refs[refName];
                width.value = dom.clientWidth;
                height.value = dom.clientHeight;
            };

            onMounted(() => {
                init()
            });

            return {
                width,
                height,
                path,
                refName,
                pathId,
                radialGradientId,
                maskId
            }
        }
    }
</script>

<style lang="scss" scoped>
    .imooc-fly-box {
        position: relative;
        width: 100%;
        height: 100%;

        svg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .imooc-fly-box-content {
            width: 100%;
            height: 100%;
            padding: 5px;
            box-sizing: border-box;
        }
    }
</style>
