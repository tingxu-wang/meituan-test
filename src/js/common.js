/*
 * 公用类
*/

/* Dom控制类 */
export class DomControl{
  constructor(){}

  getDataValue (element){
    return element.dataset.value.trim()
  }

  getValue (element){
    return element.value.trim()
  }

  getInnerHtml (element){
    return element.innerHTML.trim()
  }

  setDataValue (element,val){
    String(val)
    element.dataset.value=val
  }

  setInnerHtml(element,val){
    String(val)
    element.innerHTML=val
  }

  setInputValue (element,val){
    String(val)
    element.value=val
  }

  addEvent (element,eventType,callback,type=false){
    element.addEventListener(eventType,callback,type)
  }

  setCssAttr (element,attr,value){
    element['style'][attr]=value
  }

  addClass (element,classNames){
    let currentClass=element.className,
        reg=new RegExp(classNames,'g'),
        resultClassNames=''

    if(reg.test(currentClass)){
      resultClassNames=currentClass
    }else{
      resultClassNames=currentClass+' '+classNames
    }

    element.className=resultClassNames
  }

  removeClass (element,className){
    let currentClass=element.className,
        reg=new RegExp('\(\\s+\|\^\)'+className,'g'),
        resultClassNames=currentClass

    if(reg.test(currentClass)){
      resultClassNames=resultClassNames.replace(reg,'')
    }

    element.className=resultClassNames
  }

  toggleClass (element,className){
    let currentClass=element.className,
        reg=new RegExp('\(\\s+\|\^\)'+className,'g'),
        resultClassNames=currentClass

    if(reg.test(currentClass)){
      resultClassNames=resultClassNames.replace(reg,'')
    }else{
      resultClassNames+=' '+className
    }

    element.className=resultClassNames
  }
}
