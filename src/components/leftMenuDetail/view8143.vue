<style lang="less" scoped>
    .category-wrap {
        background: white;
        margin-bottom: 200px;
        a {
            color: black;
        }
    }
    .category-title {
        font-size: 14px;
        padding: 15px;
        line-height: 14px;
        color: #9B9B9B;
        font-weight: 600;
    }
    .category-detail {
        li {
            box-sizing: border-box;
            width: 33.333%;
            float: left;
            margin: 5px 0;
            height: 120px;
            text-align: center;
            img {
                max-width: 100%;
            }
            .good-name {
                font-size: 14px;
            }
        }
    }
    .cate-container {
        &:after {
            content: "";
            display: block;
            clear: both;
            height: 0;
        }
    }
    .channel-btn {
        width: 90%;
        margin: 0 auto;
    }
</style>
<template>
    <div class="category-wrap">
        <div v-for="item in detail">
            <button class="channel-btn" v-if="item.type == 'channel'">{{ item.list[0].name }}</button>
            <div v-else class="cate-container">
                <h2 class="category-title">{{ item.name }}</h2>
                <ul class="category-detail">
                    <li v-for="i in item.list">
                        <a href="">
                            <img :src="i.pic" alt="">
                            <span class="good-name">{{ i.name }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                detail: {}
            }
        },
        mounted () {
            var that = this;
            $.get("/src/json/menu-detail-8143.json", function(data) {
                that.detail = data.data.mainBlock.models;
            })
        }
    }
</script>