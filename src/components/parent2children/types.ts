//定义一个接口，用于限制person对象的具体属性 export暴露出去供使用
export interface personInter {
    id: string,
    name: string,
    age: number
}
//自定义类型两种写法
//export type persons=Array<personInter>
export type persons = personInter[]