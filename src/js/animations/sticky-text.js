import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

export default class StickyText {
    constructor() {
      this.getDom()

      if(!this.dom.heading) return

      this.createPin()
    }

    getDom() {
        this.dom = {
          body: document.querySelector('.index'),
          heading: document.querySelector('.sticky-text')
        }
    }
  
    createPin() {
        ScrollTrigger.create({
            pin: this.dom.heading,
            trigger: this.dom.body,
            start: 'top top',
            end: "bottom bottom",
            pinSpacing: false,
            markers: true
          })
    }
  
  }
