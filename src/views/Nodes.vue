<template>
  <div class="d-flex flex-column blocks-wrapper">
    <h1 class="main-title">Nodes</h1>
    <v-row justify="center" class="accordion">
      <v-expansion-panels accordion
        v-for="(item,i) in getNodes" :key="i">
          <node :key="i" :node="{
            name: item.name,
            online: item.online,
            url: item.url,
            loading: item.loading,
            blocks: item.blocks
          }"
          />
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
import Node from '../components/Node';
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Nodes',
  components: {
    Node,
  },
  data: () => ({
    data: []
  }),
  computed: {
    ...mapGetters(['getNodes']),
  },
  methods: {
    ...mapActions(['getAllNodes']),
  },
  async mounted() {
    await this.getAllNodes(this.getNodes);
  },
}
</script>

<style scoped>
  .blocks-wrapper {
    margin: 0 auto;
    width: 47.8%;
  }
  .main-title {
    color: #000000;
    font-style: normal;
    font-size: 34px;
    font-weight: bold;
    line-height: 40px;
    letter-spacing: .25px;
    margin-top: 60px;
    margin-bottom: 16px;
  }
  .accordion {
    align-self: center;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    .blocks-wrapper {
      width: auto;
    }

    .main-title {
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
    }
  }
</style>


<style>
  /* Accordion styles */
  .v-expansion-panels--accordion {
    padding-top: 12px
  }

  .v-expansion-panels {
    border-radius: 3px;
  }

  .v-expansion-panel {
    filter: drop-shadow(0px 4px 8px rgba(84, 110, 122, 0.24));
    min-height: 72px;
  }

  .v-expansion-panel-header {
    padding-left: 20px;
    padding-top: 14px;
  }

  @media only screen and (max-width: 768px) {
    .v-expansion-panel {
      min-height: auto;
    }  
  }
</style>