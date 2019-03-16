function hello(item) {
  console.log("本函数的参数：" + item + "。子模板中的参数：" + this.inputSearch);
}
export { //很关键
  hello
}