//放封装的方法

function isBlank(str){
    return str ===null || str === undefined || str === ""
}

function isNotBlank(str){
    return !isBlank(str)
}

export{
    isBlank,
    isNotBlank
}