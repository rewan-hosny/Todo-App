"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ConfirmDeleteComponent = /** @class */ (function () {
    function ConfirmDeleteComponent() {
        this.show = false;
        this["delete"] = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input()
    ], ConfirmDeleteComponent.prototype, "show");
    __decorate([
        core_1.Output()
    ], ConfirmDeleteComponent.prototype, "delete");
    ConfirmDeleteComponent = __decorate([
        core_1.Component({
            selector: 'app-confirm-delete',
            template: "\n    <div class=\"modal fade\" id=\"confirmDeleteModal\" tabindex=\"-1\" aria-labelledby=\"confirmDeleteModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"confirmDeleteModalLabel\">Confirm Deletion</h5>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this item?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete.emit()\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n  "
        })
    ], ConfirmDeleteComponent);
    return ConfirmDeleteComponent;
}());
exports.ConfirmDeleteComponent = ConfirmDeleteComponent;

//# sourceMappingURL=confirmDelete.js.map
