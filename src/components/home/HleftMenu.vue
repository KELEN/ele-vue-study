<style>
    .more-category {
        width: 100%;
    }
</style>
<template>
    <div>
        <mt-button @click.native="openCategories()">打3开</mt-button>
        <mt-popup
                class="more-category"
                v-model="categoiesVisible"
                popup-transition="popup-fade"
                :visible.sync="categoiesVisible"
                position="left">
            <div class="categories-container">
                <div>
                    全部分类
                </div>
                <div class="categories-content">
                    <mt-tab-container :active.sync="active">
                        <mt-tab-container-item id="tab-container1">
                            <mt-cell v-for="n in 10" :title="'tab-container1 ' + $index"></mt-cell>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="tab-container2">
                            <mt-cell v-for="n in 5" :title="'tab-container2 ' + $index"></mt-cell>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="tab-container3">
                            <mt-cell v-for="n in 7" :title="'tab-container3 ' + $index"></mt-cell>
                        </mt-tab-container-item>
                    </mt-tab-container>
                </div>
            </div>
        </mt-popup>
    </div>
</template>
<script>
    import { Popup, TabContainer, TabContainerItem } from 'mint-ui';
    export default {
        data: function () {
            return {
                categoiesVisible: true
            }
        },
        methods: {
            openCategories: function () {
                this.categoiesVisible = !this.categoiesVisible;
            }
        },
        component: {
            Popup, TabContainerItem, TabContainer
        }
    }
</script>