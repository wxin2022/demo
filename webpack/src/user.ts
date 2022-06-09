import * as $ from 'jquery' // 必须通过as命名

class User {
    name: string
    constructor(s: string, age: number) {
        console.log(`名字是：${s}, age=${age}`)
        this.name = s
    }
    say() {
        
        console.log('说话', this.name, $.trim('  222 '))
    }
}

const user = new User('周星星',22)

export default user