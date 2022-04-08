<template>
     <div class="container mt-4">
        <div class="row d-flex justify-content-center">
            <div class="col-md-8">

                <h4>Add your comment</h4>

                <div class="card p-3">
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

                            <div class="col-12 mt-3">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>

                        </form>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"create-comment",
    data() {
        return {
            comment: {
                us_name:"",
                content:""
            }
        }
    },
    methods:{
        async create() {
            await this.axios.post('/api/comment', this.comment)
                    .then(response => {
                        this.$router.push({name:showComments})
                    })
                    .catch(error=> {
                        console.log(error)
                    })
        }
    }
}
</script>
