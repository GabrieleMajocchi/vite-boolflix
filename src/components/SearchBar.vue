<script>
    export default {
        data() {
            return {
                searchText: '',
            }
        },
    }
</script>

<template>
    <nav class="navbar bg-light">
        <div class="container-fluid">
                <input class="form-control me-2" type="search" placeholder="Titolo del film" aria-label="Search" v-model="searchText" @keyup.enter="$emit('seachMovie', searchText)">
                <button class="btn btn-outline-success" type="send" @click="$emit('seachMovie', searchText), searchText=''" >Cerca</button>
        </div>
    </nav>
</template>

<style lang="scss" scoped>

</style>