<template>
    <div class="test">
        <svg width="100" height="100">
            <defs>
                <symbol id="more" viewBox="0 0 100 100">
                    <circle r="5" cx="20" cy="25" fill="currentColor"/>
                    <circle r="5" cx="20" cy="50" fill="currentColor"/>
                    <circle r="5" cx="20" cy="75" fill="currentColor"/>
                    <line x1="40" y1="25" x2="90" y2="25" stroke-width="8" stroke="currentColor"/>
                    <line x1="40" y1="50" x2="90" y2="50" stroke-width="8" stroke="currentColor"/>
                    <line x1="40" y1="75" x2="90" y2="75" stroke-width="8" stroke="currentColor"/>
                </symbol>
                <symbol id="filledArrowRight" viewBox="0 0 100 100">
                    <polyline points="20 10,80 50,20 90" fill="currentColor"/>
                </symbol>
                <symbol id="arrowRight" viewBox="0 0 100 100">
                    <polyline points="30 20,70 50,30 80" fill="transparent" stroke="currentColor" stroke-width="3px"/>
                </symbol>
                <symbol id="baojingxiangmu" viewBox="0 0 1024 1024">
                    <path fill="currentColor" d="M559.104 311.296v268.288c0 24.576-20.48 47.104-47.104 47.104s-47.104-20.48-47.104-47.104V311.296c0-24.576 20.48-47.104 47.104-47.104 12.288 0 24.576 6.144 32.768 14.336 8.192 8.192 14.336 20.48 14.336 32.768zM559.104 712.704c0 24.576-20.48 47.104-47.104 47.104s-47.104-20.48-47.104-47.104c0-24.576 20.48-47.104 47.104-47.104s47.104 20.48 47.104 47.104z"
                          p-id="960"/>
                    <path fill="red" d="M512 909.312C292.864 909.312 114.688 731.136 114.688 512S292.864 114.688 512 114.688 909.312 292.864 909.312 512 731.136 909.312 512 909.312z m0-735.232C325.632 174.08 174.08 325.632 174.08 512S325.632 849.92 512 849.92 849.92 698.368 849.92 512 698.368 174.08 512 174.08z"
                          p-id="961"/>
                </symbol>
            </defs>
        </svg>
    </div>
</template>

<script>
    // 编译之后由外部script标签引入, 不用担心找不到
    import {computed, ref} from 'vue';

    export default {
        // 组件名称，用于引用<xxx />
        name: 'TestComponent',
        setup() {
            const message = 'hello world';
            const count = ref(1);
            const doubleCount = computed(() => count.value * 2);
            return {
                message,
                doubleCount
            }
        }
    }
</script>

<style scoped>
    .test {
        color: red;
    }
</style>
