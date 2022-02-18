
// git包
const downLoad = require('download-git-repo')
// 动画
const ora = require('ora')
const options = require('./options')
var url = ''
let clone = false
let downGit = (name) => {
        // 填选项
    options().then(answer=>{
        let {type}=answer
        switch (type) {
            case 'koa':
                url='wypzw/koa_demo'
                break;
            case 'vue-h5':
                url='wypzw/h5-template'
                break;
            case 'multipleProject':
                url='wypzw/multipleProject'
                break;
            case 'vue-admin':
                url='PanJiaChen/vue-element-admin'
                break;
            default:
                break;
        }
        const spinner = ora('正在加载模板...')
        spinner.start()
        downLoad(url, name, {
            clone
        }, err => {
            spinner.stop()
            console.log(err?err:"项目创建成功\n cd "+name+"")
            process.exit(1)
        })
    })

}
module.exports = downGit