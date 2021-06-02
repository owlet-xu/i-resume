import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { AppModule } from '@/store/modules/app';
// componets
import Head from '@/components/head/head.vue';
import Content from '@/components/content/content.vue';
import Practice from '@/components/practice/practice.vue';
import Project from '@/components/project/project.vue';
import Skill from '@/components/skill/skill.vue';

import ResizeMixin from '@/common/mixin/resize-mixin';

@Component({
  components: {
    Content,
    Head,
    Practice,
    Project,
    Skill
  }
})
export default class Layout extends mixins(ResizeMixin) {

  get deviceType() {
    return AppModule.deviceType;
  }
}
