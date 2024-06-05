export default class GridOverlay {
  constructor() {
    this.addEvents();
    this.gridActive = false;
  }

  addEvents() {
    document.addEventListener("keydown", (e) => {
      if (e.code == "KeyG" && e.ctrlKey) {
        this.gridActive ? this.destroyGrid() : this.createGrid();
      }
    });
  }

  createGrid() {
    const html = `
      <div class="grid-overlay container fixed inset-0 w-full h-full pointer-events-none" style="z-index: 99">
        <div class="row flex h-full">
          <div class="hidden lg:flex column w-1/12 ">
            <div class="w-full" style="background-color: #ff464647"></div>
          </div>
          <div class="hidden lg:flex column w-1/12 ">
            <div class="w-full" style="background-color: #ff464647"></div>
          </div>
          <div class="hidden lg:flex column w-1/12 ">
            <div class="w-full" style="background-color: #ff464647"></div>
          </div>
          <div class="hidden lg:flex column w-1/12">
            <div class="w-full" style="background-color: #ff464647"></div>
          </div>
          <div class="hidden lg:flex column w-1/12">
            <div class="w-full" style="background-color: #ff464647"></div>
          </div>
          <div class="hidden lg:flex column w-1/12 ">
            <div class="w-full" style="background-color: #ff464647"></div>
          </div>
          <div class="column w-2/12 lg:w-1/12 flex">
            <div class="w-full" style="background-color: #ff464647"></div>
          </div>
          <div class="column w-2/12 lg:w-1/12 flex">
            <div class="w-full" style="background-color: #ff464647"></div>
          </div>
          <div class="column w-2/12 lg:w-1/12 flex">
            <div class="w-full" style="background-color: #ff464647"></div>
          </div>
          <div class="column w-2/12 lg:w-1/12 flex">
            <div class="w-full" style="background-color: #ff464647"></div>
          </div>
          <div class="column w-2/12 lg:w-1/12 flex">
            <div class="w-full" style="background-color: #ff464647"></div>
          </div>
          <div class="column w-2/12 lg:w-1/12 flex">
            <div class="w-full" style="background-color: #ff464647"></div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("afterbegin", html);
    this.gridActive = true;
  }

  destroyGrid() {
    document.querySelector(".grid-overlay").remove();
    this.gridActive = false;
  }
}
