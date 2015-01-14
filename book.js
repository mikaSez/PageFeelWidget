"use strict"

true && function () {

    

    var $ = function(id){
        if(typeof id === "string"){
            if(id.indexOf("#") === 0){
                return document.getElementById(id.substring(1)) || {};
            }
            if(id.indexOf(".") === 0){
                return document.getElementsByClassName(id.substring(1)) || {};
            }
            return document.getElementsByTagName(id) || {};

        }
        return {};
    };


    


    var getSize = function(node){
        var size = 0,
            innerNode;
        if(!!node.children){
            for(var i = 0; i<node.length;++i){
                var k = getSize(node[i]) || 0;
                size += k;
            }
        } 
        return node.clientHeight || 0; //la taille de l'élément + les éléments qui le composent, peut être faux. 
    };


    /** OUTSIDE WORLD**/
    window.book = {};
    window.book.name ="text";
    window.book.calculateSize = function(id){
        var elements = $(id);
        var size = 0;
        for(var i = 0; i<elements.length;++i){
                var k = getSize(elements[i]) || 0;
                console.log(k);
                size += k;
            }
        return size;
        };
}();