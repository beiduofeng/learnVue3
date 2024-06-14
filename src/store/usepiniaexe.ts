import { defineStore } from 'pinia'

export const usePiniaStore = defineStore('lizi', {
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
})