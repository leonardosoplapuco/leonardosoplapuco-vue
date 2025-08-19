<template>
    <div class="dark-button-wrapper">
        <div role="switch" :aria-checked="enabled.toString()" tabindex="0"
        @click="toggle"
        @keydown.space.prevent="toggle"
        @keydown.enter.prevent="toggle"
        class="dark-button" :class="{ active: enabled }">
            <span class="knob"></span>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import './DarkButton.css';

    const enabled = ref(false)

    onMounted(() => {
        const saved = localStorage.getItem('darkMode')
        if (saved === 'true') {
            enabled.value = true
            document.body.classList.add('dark-mode')
        } else {
            enabled.value = false
            document.body.classList.remove('dark-mode')
        }
    })

    function toggle(){
        enabled.value = !enabled.value

        if (enabled.value) {
            document.body.classList.add('dark-mode')
            localStorage.setItem('darkMode', 'true')
        } else {
            document.body.classList.remove('dark-mode')
            localStorage.setItem('darkMode', 'false')
        }
    }
</script>
