"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yaml_1 = __importDefault(require("yaml"));
function loader(input) {
    return "export default ".concat(JSON.stringify(yaml_1.default.parse(input)));
}
exports.default = loader;
