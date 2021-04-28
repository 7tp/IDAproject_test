export default ({ app }, inject) => {
  inject('toggleHtmlOverflow', style => {
    let html = document.querySelector('html')
    let body = document.querySelector('body')
    html.style.overflowY = style
    body.style.overflowY = style
  })
}
