import Loader from './loader.js'
import Vue from 'vue'
/**
 * @author 董景 on 2021-11-27
 * @param {Object} config
 */
function defineConfig({ request, global, components, uniPlus ,wxAuthorization}) {
    new Loader({ ctx: Vue, request, global, components, uniPlus ,wxAuthorization})
}

export { defineConfig }
