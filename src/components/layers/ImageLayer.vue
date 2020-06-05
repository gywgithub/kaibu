<!-- taken from https://vuejsexamples.com/responsive-image-content-comparison-slider-built-with-vue/ -->
<template>
  <div class="image-layer">
    <section>
      <b-field label="opacity">
        <b-slider
          v-model="config.opacity"
          :min="0"
          :max="1.0"
          :step="0.1"
        ></b-slider>
      </b-field>
      <b-field v-if="config.climit" label="contrast limit">
        <b-slider v-model="config.climit" :min="1" :max="255" :step="0.5" ticks>
        </b-slider>
      </b-field>
    </section>
  </div>
</template>

<script>
import { Map } from "ol";
import Static from "ol/source/ImageStatic";
import ImageLayer from "ol/layer/Image";
import Projection from "ol/proj/Projection";
export default {
  name: "image-layer",
  props: {
    map: {
      type: Map,
      default: null
    },
    config: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      layer: null
    };
  },
  mounted() {
    this.config.climit = [4, 50];
    this.config.opacity = 1.0;
    this.config.sliders = [
      {
        name: "Z",
        min: 0,
        max: 1000,
        step: 1,
        value: 3,
        changed() {
          console.log("z slider changed.");
        }
      },
      {
        name: "T",
        min: 0,
        max: 100,
        step: 1,
        value: 3,
        changed() {
          console.log("t slider changed.");
        }
      }
    ];
    this.layer = this.getLayer();
    this.map.addLayer(this.layer);
    this.$forceUpdate();
  },
  beforeDestroy() {
    if (this.layer) {
      this.map.removeLayer(this.layer);
    }
  },
  created() {},
  methods: {
    selectLayer() {},
    getLayer() {
      const extent = [0, 0, 1024, 968];
      const projection = new Projection({
        code: "xkcd-image",
        units: "pixels",
        extent: extent
      });
      const image_source = new Static({
        attributions: '© <a href="http://xkcd.com/license.html">xkcd</a>',
        url: "https://imgs.xkcd.com/comics/online_communities.png",
        projection: projection,
        imageExtent: extent
      });
      const image_layer = new ImageLayer({
        source: image_source
      });
      return image_layer;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>