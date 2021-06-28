import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class IDialog extends Vue {
    @Prop({ required: true, default: false })
    show!: boolean;
    @Prop({ default: '标题' })
    title!: string;

    created() {
        console.log('---ddd--');
    }

    close() {
        this.$emit('update:show', false);
    }
}
