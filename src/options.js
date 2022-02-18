
const inquirer = require('inquirer')
let optionsArr = [{
        type:"list",
        message:"请选择一个模板：",
        name:"type",
        default:"vue-admin",
        prefix:"☆☆☆☆",
        suffix:"☆☆☆☆",
        choices:[
            "vue-admin",
            "vue-h5",
            "multipleProject",
            "koa-demo"
        ]
    }
]

module.exports = () => {
    return inquirer
        .prompt(optionsArr)
}