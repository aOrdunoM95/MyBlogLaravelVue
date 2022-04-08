<template>
    <main>
        <div class="container mt-5">
            <div class="d-flex justify-content-center row">
                <div class="col-md-8">
                    <div class="d-flex flex-column comment-section" v-for="comment in comments" :key="comment.id">
                        <div class="bg-white p-2">
                            <div class="d-flex flex-row user-info">
                                    <img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40">
                                <div class="d-flex flex-column justify-content-start ml-2">
                                    <span class="d-block font-weight-bold name">{{ comment.us_name }}</span>
                                    <span class="date text-black-50">Shared - Jan 2020</span>
                                </div>
                            </div>
                            <div class="mt-2">
                                <p class="comment-text">{{ comment.content }}</p>
                            </div>
                        </div>
                        <div class="bg-white">
                            <div class="d-flex flex-row fs-12">
                                <div class="like p-2 cursor"><i class="fa fa-comment" aria-hidden="true"></i><span class="ml-1">Comment</span></div>
                            </div>
                            <hr>
                        </div>
                    </div>

                    <form @submit.prevent="create">
                        <div class="bg-light p-2">
                            <div class="d-flex flex-row align-items-start">
                                <img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40">
                                    <div class="card-body">
                                        <form @submit.prevent="create">

                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control" id="floatingInput" v-model="comment.us_name">
                                                <label for="floatingInput">User Name</label>
                                            </div>
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingPassword" v-model="comment.content">
                                                <label for="floatingPassword">Comment</label>
                                            </div>
                                        </form>
                                    </div>

                            </div>
                            <div class="mt-2 text-right">
                                <button class="btn btn-primary btn-sm shadow-none" type="submit">Post comment</button>
                                <button class="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    </main>
</template>

<script>
export default {
    data() {
        return {
            comments: [],
            comment: {
                us_name: "",
                content: ""
            }

        }
    },
    mounted() {
        this.axios.get('/api/comment')
            .then(response => {
                console.log(response.data)
                this.comments = response.data
            })
            .catch(error => {
                this.comment = []
            })
    },
    methods: {
        async create() {
            await this.axios.post('/api/comment', this.comment)
                .then(response => {
                    this.comments.unshift(response.data.blog)
                    this.cancel()
                    console.log(this.comments)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        cancel() {
            this.comment.content = ''
            this.comment.us_name = ''
        }
    }
}
</script>

<style>
body {
    background: #eee
}

.date {
    font-size: 11px
}

.comment-text {
    font-size: 12px
}

.fs-12 {
    font-size: 12px
}

.shadow-none {
    box-shadow: none
}

.name {
    color: #007bff
}

.cursor:hover {
    color: blue
}

.cursor {
    cursor: pointer
}

.textarea {
    resize: none
}
</style>
