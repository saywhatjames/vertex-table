var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { EditCellDefault } from './edit-cell-default';
var DefaultEditComponent = (function (_super) {
    __extends(DefaultEditComponent, _super);
    function DefaultEditComponent() {
        return _super.call(this) || this;
    }
    DefaultEditComponent.prototype.getEditorType = function () {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    };
    return DefaultEditComponent;
}(EditCellDefault));
DefaultEditComponent = __decorate([
    Component({
        selector: 'table-cell-default-editor',
        template: "<div [ngSwitch]=\"getEditorType()\"><select-editor *ngSwitchCase=\"'list'\" [cell]=\"cell\" [inputClass]=\"inputClass\" (onClick)=\"onClick($event)\" (onEdited)=\"onEdited($event)\" (onStopEditing)=\"onStopEditing()\"></select-editor><textarea-editor *ngSwitchCase=\"'textarea'\" [cell]=\"cell\" [inputClass]=\"inputClass\" (onClick)=\"onClick($event)\" (onEdited)=\"onEdited($event)\" (onStopEditing)=\"onStopEditing()\"></textarea-editor><checkbox-editor *ngSwitchCase=\"'checkbox'\" [cell]=\"cell\" [inputClass]=\"inputClass\" (onClick)=\"onClick($event)\"></checkbox-editor><completer-editor *ngSwitchCase=\"'completer'\" [cell]=\"cell\"></completer-editor><input-editor *ngSwitchDefault [cell]=\"cell\" [inputClass]=\"inputClass\" (onClick)=\"onClick($event)\" (onEdited)=\"onEdited($event)\" (onStopEditing)=\"onStopEditing()\"></input-editor></div>",
    }),
    __metadata("design:paramtypes", [])
], DefaultEditComponent);
export { DefaultEditComponent };
//# sourceMappingURL=default-edit.component.js.map