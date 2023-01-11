<template>
    <div>
        <ul>
            <li>aaa</li>
            <li>bbb</li>
            <li>ccc</li>
        </ul>
        <NuxtLink to="/about">about</NuxtLink>
        <button @click="handleClick">click me</button>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

const handleClick = async () => {
    await navigateTo({
        name: 'about',
        query: { ...route.query }
    })
}
onMounted(() => {
    setTimeout(() => {
        handleClick()
    }, 5000)
})
</script>
