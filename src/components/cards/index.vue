<template>
  <div class="waterfull-container">
    <div v-masonry horizontalOrder="true">
      <div class="masonry-item card-box" 
        v-for="item of noteItems" v-masonry-tile :class="`demo-${item.id}`" :key="item.id"
        @click="showDetails(item)"
      >
        <img class="card-img" :src="item.imgUrl">
        <div class="card-info">
          <a class="card-intro">
            <span>{{item.intro}}</span>
          </a>
          <div class="author">
            <a>{{item.author}}</a>
            <span>
              <svg t="1717491328949" class="icon reds-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1461" width="16" height="16"><path d="M518.4 149.290667c112.597333-80.789333 267.882667-69.397333 368.128 32 53.866667 54.528 84.138667 128.853333 84.138667 206.378666 0 77.525333-30.293333 151.850667-84.096 206.336l-294.421334 299.52a110.976 110.976 0 0 1-80.213333 34.474667 110.72 110.72 0 0 1-79.914667-34.176L137.322667 593.770667C83.562667 539.242667 53.333333 464.981333 53.333333 387.541333s30.229333-151.722667 84.010667-206.272c100.224-101.376 255.530667-112.768 368.128-31.978666l6.442667 4.778666 6.485333-4.778666z m322.602667 76.970666c-84.629333-85.589333-219.157333-88.64-307.328-6.954666l-21.76 20.138666-21.717334-20.138666c-88.192-81.685333-222.72-78.634667-307.306666 6.933333-41.92 42.496-65.557333 100.608-65.557334 161.28 0 60.693333 23.637333 118.805333 65.6 161.344l295.04 300.416c9.045333 9.450667 21.269333 14.72 33.962667 14.72 12.693333 0 24.917333-5.269333 34.261333-15.04L840.96 549.077333c42.005333-42.496 65.685333-100.650667 65.685333-161.408 0-60.736-23.68-118.912-65.664-161.408z" fill="#111111" p-id="1462"></path></svg>
              <span class=count>{{item.like}}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modal -->
    <div class="note-details-mask" id="exampleModal" style="display: none;" @click="closeModal">
      <div class="note-container" @click="event.stopPropagation()">
        <!-- 作者 -->
        <div class="author" style="display: none;">
          <div class="author-wrapper">
            <div class="info">
              <a href="/user/profile/620fd97d000000001000d7e2?channel_type=web_explore_feed" class="" target="_blank">
                <img class="avatar-item" crossorigin="anonymous" src="https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo31337r7okhk005ogfr5uk1lv27b6rrf8?imageView2/2/w/120/format/webp|imageMogr2/strip" style="width: 40px; height: 40px;"></a>
              <a href="/user/profile/620fd97d000000001000d7e2?channel_type=explore_feed&amp;parent_page_channel_type=web_profile_board" class="name" target="_blank">
                <span class="username">H😺</span>
              </a>
            </div>
            <div class="note-detail-follow-btn">
              <button class="reds-button-new follow-button large primary follow-button">
                <span class="reds-button-new-box">
                  <span class="reds-button-new-text">关注</span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <!--  图片 -->
        <div class="media-container" style="width: 50%; height: calc(133.333vw);">
          <div class="slider-container">
          </div>
        </div>
        <!-- 文本 -->
        <div class="interaction-container">
          文本区域
        </div>
      </div>
      
      <!-- 关闭按钮 -->
      <div class="close-circle" @click="closeModal">
        <div class="close close-mask-dark">
          <svg t="1718870733164" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1690" width="20" height="20"><path d="M0 0h1024v1024H0z" fill="#ffffff" fill-opacity="0" p-id="1691"></path><path d="M240.448 168l2.346667 2.154667 289.92 289.941333 279.253333-279.253333a42.666667 42.666667 0 0 1 62.506667 58.026666l-2.133334 2.346667-279.296 279.210667 279.274667 279.253333a42.666667 42.666667 0 0 1-58.005333 62.528l-2.346667-2.176-279.253333-279.253333-289.92 289.962666a42.666667 42.666667 0 0 1-62.506667-58.005333l2.154667-2.346667 289.941333-289.962666-289.92-289.92a42.666667 42.666667 0 0 1 57.984-62.506667z" fill="#ffffff" p-id="1692"></path></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { NoteItem } from '@/models/explore/explore-models';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { VueMasonryPlugin } from 'vue-masonry';

@Options({
    components: { VueMasonryPlugin },
})
export default class NoteItemsView extends Vue {
  @Prop()
  noteItems!: NoteItem[];

  currentShow: NoteItem | null = null

  mounted() {
    this.currentShow = this.noteItems[3]
  }

  // 打开弹窗
  showDetails(data: NoteItem) {
    const modal = document.getElementById('exampleModal')
    if (modal) {
      modal.style.display = 'block'
    }
  }

  // 关闭弹窗
  closeModal() {
    const modal = document.getElementById('exampleModal')
    if (modal) {
      modal.style.display = 'none'
    }
  }
}
</script>

<style lang="scss">
.waterfull-container {
  text-align: left;

  .masonry-item.card-box {
    display: inline-block;
    padding-right: 10px;
    
    .card-img {
      border-radius: 15px;
    }

    .card-info {
      padding: 12px;
      
      .card-intro {
        text-align: left;
        margin-bottom: 8px;
        word-break: break-all;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        color: #333;
      }

      .author {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 20px;
        color: var(--color-secondary-label);
        font-size: 12px;
        transition: color 1s;

        .reds-icon {
          display: inline-block;
          vertical-align: middle;
          fill: currentColor;
        }
        .count {
          margin-left: 2px;
        }
      }
    }
  }
  #exampleModal {
    .modal-dialog {
      border-radius: 10px;
      max-width: 80vw !important;
    }

    .btn-close {
      position: fixed;
      top: 30px;
      left: 30px;
      background-color: white;
    }
    .modal-content {
      width: 99vw;
      background-color: unset;
    }
    .modal-body {
      padding: 0;
      border: 0;
    }
    .modal-left {
      height: 90vh;
      max-width: calc(100vw - 176px - var(--interaction-width));

      img {
        height: 100%;
        width: auto;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
    }
    .modal-right {
      width: auto;
      background-color: white;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }

  .note-details-mask {
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    overflow: auto;
    transition: background-color 0.4s ease 0s;
    background: rgba(0,0,0,0.25);

    .note-container {
      display: flex;
      box-shadow: var(--elevation-note-shadow);
      border-radius: 20px;
      overflow: hidden;
      background: var(--elevation-note-background);
      transform-origin: left top;
      transition: transform 0.4s, width 0.4s;
      transform: translate(88px, 24px) scale(1);
      width: 80%;

      .media-container {
        position: relative;
        background: var(--color-active-background);
        flex-shrink: 0;
        flex-grow: 0;
        -webkit-user-select: none;
        user-select: none;
        overflow: hidden;
        border-radius: 20px 0 0 20px;
        transform: translateZ(0);
        height: 100%;
        object-fit: contain;
        width: auto;
        min-width: var(--interaction-width);
        background-color: aquamarine;
      }

      .interaction-container {
        flex-shrink: 0;
        border-radius: 0 20px 20px 0;
        position: relative;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        height: 100%;
        background-color: var(--elevation-note-background);
        overflow: visible;
        border-left: 1px solid var(--color-border);
        width: var(--interaction-width);
        background-color: aqua;
      }
    }

    .close-circle {
      position: fixed;
      display: flex;
      z-index: 100;
      cursor: pointer;

      .close {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        background: var(--color-background);
        color: var(--color-secondary-label);
        width: 40px;
        height: 40px;
        border-radius: 40px;
        cursor: pointer;
        transition: all .3s;
      }

      .close-mask-dark {
        color: white;
        background: rgba(64,64,64,0.25);
        -webkit-backdrop-filter: var(--material-filter);
        backdrop-filter: saturate(150%) blur(10px);
      }
    }
  }
}
// 帖子排序
@media screen and (max-width: 695px) {
  .masonry-item.card-box {
    width: 50%;
  }
}
@media screen and (min-width: 696px) and (max-width: 1189px) {
  .masonry-item.card-box {
    width: 33%;
  }
}
@media screen and (min-width: 1190px) and (max-width: 1419px) {
  .masonry-item.card-box {
    width: 25%;
  }
}
@media screen and (min-width: 1420px) {
  // .waterfull-container {
  //   column-count: 5;
  //   column-gap: 10px;
  //   column-fill: balance;
  // }
  .masonry-item.card-box {
    width: 20%;
  }
}
// 弹框-小屏幕
@media screen and (max-width: 959px) {
  .note-container {
    width: 100%;
  }
}
// 弹窗-大屏幕
@media screen and (min-width: 960px) and (max-width: 1191px) {
  :root {
    --vertical: 12;
    --horizontal: 24;
    --interaction-width: 360px;
    --horizontalGapPx: 24px;
    --verticalGapPx: 12px;
    --feeds-width: calc(75vw - 42px);
    --feeds-columns: 3;
    --columnWidth: calc(25vw - 30px);
    --note-card-corner-radius: 16px;
    --modal-width: 360px;
  }
  .note-container {
    height: calc(100% - 48px);
  }
  .close-circle {
    left: 24px;
    top: 24px;
  }
}
@media screen and (min-width: 1192px) and (max-width: 1423px) {
  .note-container {
    height: calc(100% - 48px);
  }
}
@media screen and (min-width: 1424px) and (max-width: 1727px) {
  .note-container {
    height: calc(100% - 64px);
  }
  .close-circle {
    left: 32px;
    top: 32px;
  }
}

</style>