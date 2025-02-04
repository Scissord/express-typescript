"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.softDelete = exports.update = exports.get = exports.create = void 0;
const User = __importStar(require("@/models/user"));
const create = async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
};
exports.create = create;
const get = async (req, res) => {
    const users = await User.getActive();
    res.status(200).json(users);
};
exports.get = get;
const update = async (req, res) => {
    const user = await User.update(+req.params.id, req.body);
    res.status(200).json(user);
};
exports.update = update;
const softDelete = async (req, res) => {
    const user = await User.softDelete(+req.params.id);
    res.status(200).json(user);
};
exports.softDelete = softDelete;
//# sourceMappingURL=user.js.map