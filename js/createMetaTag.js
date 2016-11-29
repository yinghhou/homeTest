/**
 *      @ Author:Bates Wang
 *      @ Time: 2016/6/23.
 */
(function(){
    var
        phoneScreenWidth = window.screen.width,
        createMeta = document.createElement("meta"),
        initScale = phoneScreenWidth/750;
    var metaAttr = {
        "name":"viewport",
        "content":"initial-scale="+ initScale +", maximum-scale=1, user-scalable=no, width=750"
    };
    for(var key in metaAttr){
        createMeta[key] = metaAttr[key];
    }
    document.getElementsByTagName("head")[0].appendChild(createMeta);
})();