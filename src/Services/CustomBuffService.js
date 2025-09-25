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
exports.WTTCustomBuffService = void 0;
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
const customBuffs = __importStar(require("../../db/globals/customBuffs.json"));
class WTTCustomBuffService {
    Instance;
    preSptLoad(Instance) {
        this.Instance = Instance;
    }
    postDBLoad() {
        this.addBuffsToDb();
    }
    addBuffsToDb() {
        const databaseTables = this.Instance.database;
        const buffs = databaseTables.globals.config.Health.Effects.Stimulator.Buffs;
        const myBuffs = customBuffs.Buffs;
        for (const buff in myBuffs)
            try {
                buffs[buff] = myBuffs[buff];
                this.Instance.logger.log(`Successfully added new buff: ${buff}`, LogTextColor_1.LogTextColor.GREEN);
            }
            catch (err) {
                this.Instance.logger.log(err, LogTextColor_1.LogTextColor.RED);
            }
    }
}
exports.WTTCustomBuffService = WTTCustomBuffService;
//# sourceMappingURL=CustomBuffService.js.map