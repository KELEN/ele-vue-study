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
    .category-list {
        li {
            width: 33%;
            float: left;
            margin: 5px 0;
            text-align: center;
            img {
                width: 70%;
            }
            span {
                display: inline-block;
            }
        }
        &:after {
            content: '';
            display: block;
            clear: both;
            height: 0;
            visibility: hidden;
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
            <div v-else>
                <h2 class="category-title">{{ item.name }}</h2>
                <ul class="category-list">
                    <li v-for="i in item.list">
                        <a href="">
                            <img :src="i.pic" alt="">
                            <span>{{ i.name }}</span>
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