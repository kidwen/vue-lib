<template>
    <div>
        <el-tree draggable node-key="id" default-expend-all :allow-drop="allowDrop" :allow-drag="allowDrag" :data="data" :props="defaultProps" @node-drag-start="handleDragStart" @node-drag-enter="handleDragEnter" @node-drag-leave="handleDragLeave" @node-drag-over="handleDragOver" @node-drag-end="handleDragEnd" @node-drop="handleDrop"></el-tree>
    </div>
</template>

<script>

export default {
    name: 'DragableTree',
    data() {
        return {
            data: [
                {
                    id: 1,
                    label: '一级 1',
                    children: [
                        {
                            id: 4,
                            label: '二级 1-1',
                            children: [
                                { id: 9, label: '三级 1-1-1' },
                                { id: 10, label: '三级 1-1-2' }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    label: '一级 2',
                    children: [
                        { id: 5, label: '二级 2-1' },
                        { id: 6, label: '二级 2-2' }
                    ]
                },
                {
                    id: 3,
                    label: '一级 3',
                    children: [
                        { id: 7, label: '二级 3-1' },
                        {
                            id: 8,
                            label: '二级 3-2',
                            children: [
                                { id: 11, label: '三级 3-2-1' },
                                { id: 12, label: '三级 3-2-2' },
                                { id: 13, label: '三级 3-2-3' }
                            ]
                        }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    methods: {
        handleDragStart(node, ev) {
            console.log('drag start', node, ev);
        },
        handleDragEnter(draggingNode, dropNode, ev) {
            console.log('tree drag enter: ', dropNode.label, ev);
        },
        handleDragLeave(draggingNode, dropNode, ev) {
            console.log('tree drag leave: ', dropNode.label, ev);
        },
        handleDragOver(draggingNode, dropNode, ev) {
            console.log('tree drag over: ', dropNode.label, ev);
        },
        handleDragEnd(draggingNode, dropNode, dropType, ev) {
            console.log('tree drag end: ', dropNode && dropNode.label, dropType, ev);
        },
        handleDrop(draggingNode, dropNode, dropType, ev) {
            console.log('tree drop: ', dropNode.label, dropType, ev, this.data);
        },
        allowDrop(draggingNode, dropNode, type) {
            // 禁止拖放到最外最上层
            if (dropNode.data.id === 1 && type === 'prev') {
                return false
            }
            console.error(draggingNode, dropNode, type);
            if (dropNode.data.label === '二级 3-1') {
                return type !== 'inner';
            } else {
                return true;
            }
        },
        allowDrag(draggingNode) {
            return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
        },
    }
}
</script>

<style>
</style>
