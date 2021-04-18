export const actions = {
  async getAllNodes({ commit, dispatch }, nodeList) {
    for(const el of nodeList) {
      await commit('checkNodeStatusStart', el);

      try {
        const res = await fetch(`${el.url}/api/v1/status`);
        const response = await res.json();
        const params = {
          el,
          name: response.node_name
        };
        await commit('checkNodeStatusSuccess', params);
        await dispatch('getBlocks', el)
      }
      catch (e) {
        await commit('checkNodeStatusFailure', el);
      }
    }
  },
  async getBlocks({ commit }, node) {
    try {
      const res = await fetch(`${node.url}/api/v1/blocks`)
      const response = await res.json()
      commit('setBlockList', {
        el: node,
        data: response.data
      })
      // console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}