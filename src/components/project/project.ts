import { Vue, Component } from 'vue-property-decorator';
import IDialog from '@/components/i-dialog/i-dialog.vue';

@Component({
    components: {
        IDialog
    }
})
export default class Project extends Vue {
    show = false;
    linkDatas: any = {
        vue: [
            { name: 'github地址', url: 'https://github.com/owlet-xu/qiqi-project/tree/master/qiqi-client' },
            { name: '码云地址', url: 'https://gitee.com/owlet-xu/qiqi-project/tree/master/qiqi-client' },
            { name: '个人阿里云服务器部署地址', url: 'http://121.196.145.103:31101/#/login' },
        ],
        game: [
            { name: 'github地址', url: 'https://github.com/owlet-xu/game-advertising' },
            { name: '码云地址', url: 'https://gitee.com/owlet-xu/game-advertising' },
            { name: '个人阿里云服务器部署地址', url: 'http://121.196.145.103:31102' },
        ],
        qiqiServer: [
            { name: 'github地址', url: 'https://github.com/owlet-xu/qiqi-project/tree/master/qiqi-service' },
            { name: '码云地址', url: 'https://gitee.com/owlet-xu/qiqi-project' }
        ],
        browser: [
            { name: 'github地址', url: 'https://github.com/owlet-xu/i-browser' },
            { name: '码云地址', url: 'https://gitee.com/owlet-xu/i-browser' }
        ],
        lottery: [
            { name: 'github地址', url: 'https://github.com/owlet-xu/MyWinform/tree/develop/SSQ' },
            { name: '码云地址', url: 'https://gitee.com/owlet-xu/MyWinform/tree/develop/SSQ' }
        ],
        videoLook:  [
            { name: 'github地址', url: 'https://github.com/owlet-xu/video-look' },
            { name: '码云地址', url: 'https://gitee.com/owlet-xu/video-look' }
        ],
        resume:  [
            { name: 'github地址', url: 'https://github.com/owlet-xu/i-resume' },
            { name: '码云地址', url: 'https://gitee.com/owlet-xu/i-resume' }
        ]
    };
    items = [{ name: 'a', url: 'https://' }, { name: 'a', url: 'https://' }];

    showLinkSelect(type: string) {
        this.show = !this.show;
        this.items = this.linkDatas[type];
    }

    toLink(data: any) {
        window.open(data.url, '_blank'); // 新窗口打开外链接
    }
}
