<template>
  <div class="my-auto">
    <h1 class="main-name text-uppercase mb-5">
      <span class="sub2-color">Work Experience 🔨 &nbsp;</span>
    </h1>
    <div id="timeline_1">
      <timeline>
        <div
          v-for="({ time, company, company_link, position, tasks, tools },
          index) in workExperiences"
          :key="`work-experience-${index}`"
        >
          <timeline-title
            bg-color="#3b833b"
            class="main-color sub-name"
            style="font-size: 18pt"
            >{{ time }}</timeline-title
          >
          <timeline-item class="sub-color" bg-color="transparent">
            <span slot="others">
              🏢
              <md-tooltip md-direction="left">Company</md-tooltip>
            </span>
            <a :href="company_link" target="_blank" class="sub-color">
              <span style="font-size: 12pt; font-weight: 700">{{
                company
              }}</span>
            </a>
          </timeline-item>
          <timeline-item class="sub-color" bg-color="transparent">
            <span slot="others">
              👨‍💼
              <md-tooltip md-direction="left">Position</md-tooltip>
            </span>
            <span style="font-size: 12pt">{{ position }}</span>
          </timeline-item>
          <timeline-item class="sub-color" bg-color="transparent">
            <span slot="others">
              📖
              <md-tooltip md-direction="left">Tasks</md-tooltip>
            </span>
            <div style="font-size: 12pt; line-height: 1.5">
              <div v-for="(task, index) in tasks" :key="`task-${index}`">
                <span v-html="`● ${task}`"></span>
              </div>
            </div>
          </timeline-item>
          <timeline-item class="sub-color" bg-color="transparent">
            <span slot="others">
              🔧
              <md-tooltip md-direction="left">Tools</md-tooltip>
            </span>
            <div style="font-size: 12pt; line-height: 1.5">
              <div v-for="(tool, index) in tools" :key="`tool-${index}`">
                <span v-html="`● ${tool}`"></span>
              </div>
            </div>
          </timeline-item>
          <!-- Continue Timeline -->
        </div>
      </timeline>
    </div>
  </div>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from "vue-cute-timeline";
import workExperiences from "../javascript/data/work-experience";
export default {
  data() {
    return {
      workExperiences
    };
  },
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  }
};
</script>

<style>
strong {
  font-weight: 700;
}
</style>
