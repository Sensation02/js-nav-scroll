class Nav {
  static #HOME_PAGE = 'https://www.google.com'

  // далі йдуть методи які пов'язані зі сторінкою, кожен метод це по суті ID кнопки
  // ID використовується для прив'язки методу до кнопки (ID = назва методу)
  static #back() {
    return history.back()
  }

  static #forward = () => {
    return history.forward()
  }

  static #refresh = () => {
    return location.reload()
  }

  static #changePage = (href) => {
    return location.assign(href)
  }

  static #go = () => {
    try {
      const url = new URL(window.input.value)
      return this.#changePage(url.href)
    } catch (error) {
      console.log(error)
      alert('Некоректна адреса')
    }
  }

  static #home = () => {
    window.location = Nav.#HOME_PAGE
  }

  static init = () => {
    window.back.onclick = this.#back.bind(this) // прив'язуємо контекст якщо у класі метод, не функція
    window.forward.onclick = this.#forward
    window.refresh.onclick = this.#refresh
    window.home.onclick = this.#home
    window.go.onclick = this.#go

    window.input.value = window.location.href
  }
}

Nav.init()
window.Nav = Nav
