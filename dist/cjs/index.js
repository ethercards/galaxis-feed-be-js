"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buy = buy;
exports.feed = feed;
exports.upload = upload;
const bee_plus_1 = __importDefault(require("./bee-plus"));
const green = '\x1b[32m%s\x1b[0m';
const orange = '\x1b[33m%s\x1b[0m';
function buy(amount, depth) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('buy postage batch with', amount, depth);
        const beePlus = bee_plus_1.default.create();
        const result = yield beePlus.createPostageBatch(amount, depth);
        console.log(green, 'Postage batch created:', result);
        return result;
    });
}
function feed(file, topic) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('feed', file, topic);
        const beePlus = bee_plus_1.default.create();
        return beePlus.writeFeed(file, topic);
    });
}
function upload(file) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('uploading file', file);
        const beePlus = bee_plus_1.default.create();
        const result = yield beePlus.upload(file);
        console.log(green, 'Upload file result:', result);
        return result;
    });
}
module.exports = {
    buy,
    feed,
    upload,
    BeePlus: bee_plus_1.default
};