<style lang="less" scoped>
    .category-wrap {
        height: 100%;
        background: white;
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
</style>
<template>
    <div class="category-wrap">
        <div v-for="item in detail">
            <h2 class="category-title">{{ item.name }}</h2>
            <ul class="category-detail">
                <li v-for="i in item.list">
                    <a href="">
                        <img :src="i.pic" alt="">
                        <span>{{ i.name }}</span>
                    </a>
                </li>
            </ul>
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
            $.get("/src/json/menu-detail-8141.json", function(data) {
                that.detail = data.data.mainBlock.models;
            })
        }
    }
</script>