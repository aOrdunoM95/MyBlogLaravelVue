<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">My lil Blog</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>

        <div class="bg-white">
            <router-view class="mt-3" name="Home"></router-view>
            <router-view class="mt-3" name="Show"> </router-view>
            <!-- <router-view class="mb-3" name="Create"> </router-view> -->
        </div>
    </main>
</template>
