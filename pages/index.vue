<template>
    <div>
        <ul>
            <li>aaa</li>
            <li>bbb</li>
            <li>ccc</li>
        </ul>
        <button @click="handleClick">click me</button>
    </div>
</template>

<script setup lang="ts">
const handleClick = () => {
    console.log('clicked')
}
</script>
