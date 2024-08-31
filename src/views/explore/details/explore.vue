<template>
    <div class="explore-details-view">
        <div class="feeds-page">
            <ul class="nav-sorts mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-recommend-tab" data-bs-toggle="pill" data-bs-target="#pills-recommend" type="button" role="tab" aria-controls="pills-recommend" aria-selected="true">推荐</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-cate-tab" data-bs-toggle="pill" data-bs-target="#pills-cate" type="button" role="tab" aria-controls="pills-cate" aria-selected="false">美食</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-pet-tab" data-bs-toggle="pill" data-bs-target="#pills-pet" type="button" role="tab" aria-controls="pills-pet" aria-selected="false">宠物</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-fashion-tab" data-bs-toggle="pill" data-bs-target="#pills-fashion" type="button" role="tab" aria-controls="pills-fashion" aria-selected="false">穿搭</button>
                </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-recommend" role="tabpanel" aria-labelledby="pills-recommend-tab" tabindex="0">
                    <NoteItemsView v-if="noteItems && noteItems.length > 0" :noteItems="noteItems">
                    </NoteItemsView>
                </div>
                <div class="tab-pane fade" id="pills-cate" role="tabpanel" aria-labelledby="pills-cate-tab" tabindex="0">
                    美食
                </div>
                <div class="tab-pane fade" id="pills-pet" role="tabpanel" aria-labelledby="pills-pet-tab" tabindex="0">
                    宠物
                </div>
                <div class="tab-pane fade" id="pills-fashion" role="tabpanel" aria-labelledby="pills-fashion-tab" tabindex="0">
                    穿搭
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NoteItemsView from '@/components/cards/index.vue';
import { NoteItem } from '@/models/explore/explore-models';

@Options({
    components: { NoteItemsView },
})
export default class ExploreDetailsView extends Vue {

    noteItems: NoteItem[] = []

    mounted() {
        this.getData()
    }

    async getData() {
        this.noteItems.push(
            {
                id: 1,
                imgUrl: 'https://gd-hbimg.huaban.com/7187bdcd251a629c58956cdb1cac989b9bf7610660732-JcU1cX_fw240webp',
                author: '青蛙王子',
                intro: '小猫咪1',
                like: 99,
            }
        )
        this.noteItems.push(
            {
                id: 2,
                imgUrl: 'https://gd-hbimg.huaban.com/7187bdcd251a629c58956cdb1cac989b9bf7610660732-JcU1cX_fw240webp',
                author: '青蛙王子',
                intro: '小猫咪',
                like: 99,
            }
        )
        this.noteItems.push(
            {
                id: 3,
                imgUrl: 'https://gd-hbimg.huaban.com/1fe44d1a006483ffbf9722f4bd97d412f00015cd6f13b-Zqjqfc_fw658webp',
                author: '青蛙王子',
                intro: '大jiojio',
                like: 999,
            }
        )
        this.noteItems.push(
            {
                id: 4,
                imgUrl: 'https://gd-hbimg.huaban.com/1fe44d1a006483ffbf9722f4bd97d412f00015cd6f13b-Zqjqfc_fw658webp',
                author: '青蛙王子',
                intro: '大jiojio',
                like: 999,
            }
        )
        this.noteItems.push(
            {
                id: 5,
                imgUrl: 'https://gd-hbimg.huaban.com/7187bdcd251a629c58956cdb1cac989b9bf7610660732-JcU1cX_fw240webp',
                author: '青蛙王子',
                intro: '小猫咪',
                like: 99,
            }
        )
        this.noteItems.push(
            {
                id: 6,
                imgUrl: 'https://gd-hbimg.huaban.com/1fe44d1a006483ffbf9722f4bd97d412f00015cd6f13b-Zqjqfc_fw658webp',
                author: '青蛙王子',
                intro: '大jiojio',
                like: 999,
            }
        )
        this.noteItems.push(
            {
                id: 7,
                imgUrl: 'https://gd-hbimg.huaban.com/7187bdcd251a629c58956cdb1cac989b9bf7610660732-JcU1cX_fw240webp',
                author: '青蛙王子',
                intro: '小猫咪',
                like: 99,
            }
        )
        this.noteItems.push(
            {
                id: 8,
                imgUrl: 'https://gd-hbimg.huaban.com/1fe44d1a006483ffbf9722f4bd97d412f00015cd6f13b-Zqjqfc_fw658webp',
                author: '青蛙王子',
                intro: '大jiojio',
                like: 999,
            }
        )
    }
}
</script>

<style lang="scss">
.explore-details-view {
    padding-top: 88px;

    .feeds-page {
        margin-top: 2px;
        margin-left: 32px;
        margin-right: 32px;

        ul {
            margin: 0;
            padding: 0;
        }
    }
}
</style>