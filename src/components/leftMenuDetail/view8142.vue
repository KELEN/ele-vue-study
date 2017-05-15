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
                margin: 10px 0;
            }
            span {
                display: block;
            }
        }
    }
</style>
<template>
    <div class="category-wrap">
        <div v-for="item in detail">
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
            $.get("/src/json/menu-detail-8142.json", function(data) {
                that.detail = data.data.mainBlock.models;
            })
        }
    }
</script>