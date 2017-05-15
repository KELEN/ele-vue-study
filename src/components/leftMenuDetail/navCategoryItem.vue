<style lang="less" scoped>
    .channel-btn {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }
    .channel-btn button {
        width: 100%;
        background: #DD2727;
        height: 40px;
        box-sizing: border-box;
        outline: none;
        border: none;
        color: white;
    }
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
    .cate-container {
        &:after {
            content: "";
            display: block;
            clear: both;
            height: 0;
        }
    }
    .sort-list {
        li {
            width: 33%;
            float: left;
            margin: 10px 0;
            text-align: center;
            img {
                width: 70%;
            }
            span {
                font-size: 14px;
                display: inline-block;
            }
        }
    }
</style>
<template>
    <div class="category-wrap">
        <div v-for="item in detail">
            <div class="channel-btn" v-if="item.type == 'channel'"><button>{{ item.list[0].name }}</button></div>
            <div v-else class="cate-container">
                <h2 class="category-title">{{ item.name }}</h2>
                <ul class="sort-list">
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
        props: [
            'jsonpUrl'
        ],
        data () {
            return {
                detail: {}
            }
        },
        mounted () {
            var that = this;
            $.get("/src/json/" + this.jsonpUrl + ".json", function(data) {
                that.detail = data.data.mainBlock.models;
            })
        },
        watch: {
            jsonpUrl: function() {
                var that = this;
                $.get("/src/json/" + this.jsonpUrl + ".json", function(data) {
                    that.detail = data.data.mainBlock.models;
                })
            }
        }
    }
</script>