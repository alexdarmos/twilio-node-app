function ListController() {

}


angular.module("SmsApp")
.component("listComponent", {
    controller: ListController,
    template: `
    <div style="display:flex;">
        <p>Alex</p>
        <button>Send Text</button>
    </div>
    `
})