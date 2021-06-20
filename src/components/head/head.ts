import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Head extends Vue {
    showPopImg = false;

    imgMouseEnter() {
        this.showPopImg = true;
    }

    imgMouseLeave() {
        this.showPopImg = false;
    }
}
