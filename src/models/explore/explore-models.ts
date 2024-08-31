// models/explore/explore-models.ts
export class NoteItem {
    // 笔记id
    id: number
    // 图片路径
    imgUrl: string
    // 喜欢数量
    like: number
    // 帖子简介
    intro: string
    // 作者名字
    author: string

    constructor(id: number, imgUrl: string, like: number, intro: string, author: string) {
        this.id = id;
        this.imgUrl = imgUrl;
        this.like = like;
        this.intro = intro;
        this.author = author;
    }
}