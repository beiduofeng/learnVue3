import { defineStore } from 'pinia'

export const usePiniaStore = defineStore('lizi', {
    actions: {
        changeone(value) {
            return this.useList[0].msg = "震惊，楼价再次暴跌！"
        }
    },

    //存放数据的地方
    state() {
        return {
            useList: [
                { id: '001', msg: '新闻1' },
                { id: '002', msg: '新闻2' },
                { id: '003', msg: '新闻3' }
            ]
        }
    },
    getters: {
        changemsg(state) {
            this.useList[0].msg = "1111111"
        }
    }
})