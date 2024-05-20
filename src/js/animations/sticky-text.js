export default class StickyText {
    constructor() {
      this.getDom()

      if(!this.dom.heading) return

      this.createPin()
    }

    getDom() {
        this.dom = {
          heading: document.querySelector('.sticky-text')
        }
    }
  
    createPin() {
      
    }
  
  }
  