export default ({ app }, inject) => {
  inject('capitalize', value => {
    let arr = value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase()+word.slice(1).toLowerCase());

      return arr.join(' ');
  })
}
