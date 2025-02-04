<template>
  <v-toolbar flat style="position: fixed; opacity: 1; height: 50px; z-index: 999">
    <FileTool :addTextField="addTextField" :addEllipse="addEllipse"
      :addRectangle="addRectangle" :onImportClick="onImportClick" :textR="textR"
      :textL="textL" :textC="textC" />
    <MainTools :removeItem="removeItem" />
    <!-- <v-spacer></v-spacer> -->

    <v-toolbar-title :style="toolbarTitleStyle">{{
      boardName
    }}</v-toolbar-title>

    <v-toolbar-items class="border-left">
      <MagnifierComponent :zoomIn="zoomIn" :zoomOut="zoomOut" :zoomTo="zoomTo"
        :setTransfrom="setTransfrom" />
    </v-toolbar-items>
    <v-toolbar-items class="border-left">
      <GridView />
    </v-toolbar-items>
    <v-toolbar-items class="border-left">
      <SettingModal />
      <CheckModal />
      <ExportModal :export="exportSVG" />
    </v-toolbar-items>
  </v-toolbar>
</template>

<script setup>
import { computed, ref, defineProps } from "vue";
import MagnifierComponent from "./utils/MagnifierView.vue";
import { useBoardStore } from "../../../stores/svgStore";

import SettingModal from "./utils/SettingModal.vue";
import CheckModal from "./utils/CheckModal.vue";
import ExportModal from "./utils/ExportModal.vue";
import MainTools from "./tools/MainTools.vue";
import FileTool from "./tools/FileTool.vue";
import GridView from "./utils/GridView.vue";

import { usePlanStore } from "@/stores/plan";
const planStore = usePlanStore();
const boardStore = useBoardStore();
const boardName = ref(computed(() => planStore.plan.name));

const exportSVG = () => props.downloadSVG();

const props = defineProps({
  downloadSVG: Function,
  removeItem: Function,
  addTextField: Function,
  addEllipse: Function,
  addRectangle: Function,
  onImportClick: Function,
  setTransfrom: Function,
  textR: Function,
  textL: Function,
  textC: Function,
  zoomIn: Function,
  zoomOut: Function,
  zoomTo: Function,
});

const toolbarTitleStyle = computed(() => {
  return {
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "1.2",
    height: boardName.value.length < 50 ? "20px" : "38.4px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    whiteSpace: "normal",
  };
});
</script>

<style>
.app-toolbar {
  background-color: #eee;
  padding: 10px;
  display: flex;
  gap: 10px;
}

.v-toolbar__content {
  height: 50px !important;
}

.border-both {
  border-right: 2px solid rgba(255, 255, 255, 0.5);
  border-left: 2px solid rgb(255, 255, 255, 0.5);
}

.border-left {
  border-left: 2px solid rgb(255, 255, 255, 0.5);
}

.v-toolbar-title__placeholder {
  font-size: 16px;
  font-weight: bold;
  line-height: 1.2;
  height: 38.4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
}
</style>
