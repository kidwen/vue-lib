<template>
    <div class="popover-menu-content">
        <el-popover v-for="item in menuData" :key="item.id" placement="bottom" trigger="hover" v-model="item.visible" style="margin-right: 20px;">
            <div style="width: 50px;height: 50px;background: blue;" @click="item.visible = false">{{item.id}}</div>
            <ul slot="reference" style="background:red" @mouseenter="menuItemMouseEnter(item)">
                <li>{{item.name}}</li>
            </ul>
        </el-popover>
    </div>
</template>

<script>
export default {
    name: 'PopoverNavMenu',
    data() {
        return {
            menuData: [
                {
                    name: '1',
                    id: 1,
                    children: [
                        {
                            name: '1-1',
                            id: 2,
                            parentId: 1,
                            children: [
                                {
                                    name: '1-1-1',
                                    id: 4
                                },
                                {
                                    name: '1-1-2',
                                    id: 5
                                }
                            ]
                        },
                        {
                            name: '1-2',
                            id: 3,
                            parentId: 1
                        }
                    ]
                },
                {
                    name: '2',
                    id: 6
                }
            ],
        }
    },
    methods: {
        menuItemMouseEnter(item) {
            console.log(item);
            if (!item.visible) {
                this.$set(item, 'visible', true)
            }
            console.log(item.visible);
        }
    }
}
</script>

<style scoped>
.popover-menu-content {
    display: flex;
}

span {
    width: 50%;
}
</style>>

