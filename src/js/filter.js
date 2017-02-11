import {DomControl} from './common'

/* filter组件的静态变量及方法 */
class FilterSource extends DomControl{
  constructor(){
    super()

    this.selectOptions=document.querySelectorAll('.js-select-option')
    this.deleteBtn=document.querySelectorAll('.js-delete-btn')[0]
    this.filterInput=document.querySelectorAll('.js-filter-input')[0]
    this.optionContainer=document.querySelectorAll('.js-select-option-container')[0]
    this.arrow=document.querySelectorAll('.js-show-options-btn')[0]
  }

  // 绑定source上的data-value以及内部文本到target中
  bindModule (target,source){
    const dataValue=this.getDataValue(source),
          innerText=this.getInnerHtml(source)

    this.setDataValue(target,dataValue)
    this.setInputValue(target,innerText)
  }

  // 隐藏options弹层
  hideOptions (){
    this.removeClass(this.optionContainer,'display-block')
  }

  // 显示options弹层
  showOptions (){
    this.addClass(this.optionContainer,'display-block')
  }

  //toggle options弹层
  toggleOptions (){
    this.toggleClass(this.optionContainer,'display-block')
  }
}

/* 根据文本筛选options */
class textFilter extends FilterSource{
  constructor (){
    super()

  }

  // 隐藏单个option
  hideOption (option){
    this.addClass(option,'display-none')
  }

  // 显示单个option
  showOption (option){
    this.removeClass(option,'display-none')
  }

  //根据传入的text匹配每一个option的文本决定是否隐藏
  setOptionsDisplay (text){
    this.selectOptions.forEach((option)=>{
      let reg=new RegExp('^'+text,'g'),
          optionText=this.getInnerHtml(option),
          result=reg.test(optionText)

      if(result){
        this.showOption(option)
      }else{
        this.hideOption(option)
      }
    })
  }

  // 主方法,注册事件
  filterOptions (){
    this.addEvent(this.filterInput,'keyup',(e)=>{
      let text=this.getValue(this.filterInput).replace(/\\/g,'\\\\')//input的文本内容

      this.setOptionsDisplay(text)
    })
  }
}

/* 为filter组件注册事件 */
class Filter extends textFilter{
  constructor (){
    super()
  }

  // 绑定数据到input上
  bindToInputEvent (){
    this.addEvent(this.optionContainer,'click',(e)=>{
      this.bindModule(this.filterInput,e.target)
      this.hideOptions()
    })
  }

  // 点击delete按钮删除input的value以及data-value
  bindDeleteBtnEvent (){
    this.addEvent(this.deleteBtn,'click',(e)=>{
      this.setInputValue(this.filterInput,'')
      this.setDataValue(this.filterInput,'')
      //this.hideOptions()
      this.setOptionsDisplay('')//重置options样式
    })
  }

  // 点击箭头按钮toggle下拉列表
  bindOptionsEvent (){
    this.addEvent(this.arrow,'click',(e)=>{
      this.toggleOptions()
    })
  }

  // input获取、失去焦点时options的显示控制
  bindInputFocus (){
    this.addEvent(this.filterInput,'focus',(e)=>{
      this.showOptions()
    })
  }

  // 初始化方法
  init (){
    this.bindToInputEvent()
    this.bindDeleteBtnEvent()
    this.bindOptionsEvent()
    this.bindInputFocus()
    this.filterOptions()
  }
}

let filter=new Filter().init()

export default filter
