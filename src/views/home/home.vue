<script>
  // This is a useful scatter + vue reference:
  // https://hackernoon.com/how-to-integrate-scatter-with-your-eos-front-end-696a27df12a1
  import { mapState } from "vuex";

  import ScatterJS from "@scatterjs/core";
  import ScatterEOS from "@scatterjs/eosjs2";

  ScatterJS.plugins( new ScatterEOS() );

  const network = {
    blockchain: "eos",
    protocol: "https",
    host: "testnet.eos.miami",
    port: 443,
    chainId: "e17615decaecd202a365f4c029f206eee98511979de8a5756317e2469f2289e3"
  };

  export default {
    name: "home",
    computed: {
      ...mapState({
        loggedIn: state => state.scatter.loggedIn,
        identity: state => state.scatter.identity,
      }),
    },
    methods: {
      login() {
        ScatterJS.scatter.connect("Honor", { network }).then(connected => {
          if(!connected) return false;

          const scatter = ScatterJS.scatter;

          console.log("ScatterJS.scatter");
          console.log(ScatterJS.scatter);

          console.log("window.ScatterJS");
          console.log(window.ScatterJS);

          scatter.getIdentity({ accounts: [network] }).then(() => {
            console.log("scatter.identity.accounts.find(a => a.blockchain === \"eos\")");
            console.log(scatter.identity.accounts.find(a => a.blockchain === "eos"));

            this.$store.dispatch("login", {
              identity: scatter.identity.accounts.find(a => a.blockchain === "eos")
            });
          });
        });
      },
    },
  };
</script>

<template>
  <div class="home">
    <h1>
      Welcome to Podium
    </h1>
    <h2 v-if="loggedIn">
      Logged in
    </h2>
    <h2 v-else>
      Logged out
    </h2>
    <pre>
      {{ identity }}
    </pre>
    <button @click="login">
      <template v-if="loggedIn">
        {{ identity.name }}
      </template>
      <template v-else>
        Login with Scatter
      </template>
    </button>
  </div>
</template>

<style src="./home.scss" lang="scss"></style>
