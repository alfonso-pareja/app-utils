"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai = __importStar(require("chai"));
var index = __importStar(require("../lib/index"));
var expect = chai.expect;
describe('getPlural function test', function () {
    it('should return Boys', function () {
        var result = index.getPlural('Boy');
        expect(result).to.equal('Boys');
    });
    it('should return Girls', function () {
        var result = index.getPlural('Girl');
        expect(result).to.equal('Girls');
    });
    it('should return Geese', function () {
        var result = index.getPlural('Goose');
        expect(result).to.equal('Geese');
    });
    it('should return Toys', function () {
        var result = index.getPlural('Toy');
        expect(result).to.equal('Toys');
    });
    it('should return Men', function () {
        var result = index.getPlural('Man');
        expect(result).to.equal('Men');
    });
});
