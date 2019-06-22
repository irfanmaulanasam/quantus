<template>
  <div class="row justify-content-center">
    <div class="col-4">
      <div class="card mb-4">
        <div class="card-header text-center">Register</div>
        <div class="card-body">
          <form v-on:submit.prevent="register">
            <div class="form-group">
              <label for="username">username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                aria-describedby="emailHelp"
                placeholder="Enter username"
                v-model="username"
              >
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                v-model="email"
              >
              <small
                id="emailHelp"
                class="form-text text-muted"
              >We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="fullname">Full Name</label>
              <input
                type="text"
                class="form-control"
                id="fullname"
                aria-describedby="emailHelp"
                placeholder="Enter full name"
                v-model="fullname"
              >
            </div>
            <div class="form-group">
              <label for="City">City</label>
              <input
                type="text"
                class="form-control"
                id="city"
                aria-describedby="emailHelp"
                placeholder="Enter city"
                v-model="city"
              >
            </div>
            <div class="form-group">
              <select v-model="status">
                <option disabled value="">Please select one</option>
                <option>married</option>
                <option>single</option>
                <option>unmarried</option>
              </select>
              <br>
              <span v-if="status">status: {{ status }}</span>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username:"",
      fullname:"",
      city:"",
      status:"",
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
        console.log('masuk ke register')
      this.$emit("register", {
        username: this.username,
        fullname: this.fullname,
        city: this.city,
        status: this.status,
        email: this.email,
        password: this.password 
      });
    }
  }
};
</script>

