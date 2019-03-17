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
            //   let uri = 'http://localhost:4000/tickets';
            //   let uri = 'http://liquid.grevialabs.com/api/v1/user/get_list?token=macbook';
              let uri = 'http://localhost/liquid/api/v1/user/get_list?token=macbook';
              let listdata;
              this.axios.get(uri).then((response) => {
                  console.log(response.data);
                  listdata = response.data;
                  this.users = listdata.data;
              });
            }
        }
    }
</script>