// TicketView.vue

<template>
    <div class="container">
        <h1>Users</h1>
        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Email ID</td>
                <td>Description</td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.user_id">
                    <td>{{ user.user_id }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.user_id }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    // import config from "../../config.js"
    import config from "../../config"

    export default {
        data(){
            return{
                users: []
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
                // axios.defaults.headers = {
                //     // 'Content-Type': 'application/json',
                //     // Authorization: 'myspecialpassword',
                //     'Token' : 'macbook',
                //     'token' : 'macbook',
                // }

                // const auth = {
                //     headers: {token : 'macbook',Token : 'macbook',} 
                // }
                
                // console.log(process.env);
                // console.log(config.API_URL);
                //   let uri = 'http://liquid.grevialabs.com/api/v1/user/get_list?token=macbook';
                let uri = config.API_URL + 'user/get_list?token=macbook';
                let listdata;
                this.axios.get(uri).then((response) => {
                    // console.log(response.data);
                    listdata = response.data;
                    this.users = listdata.data;
                });
            }
        }
    }
</script>