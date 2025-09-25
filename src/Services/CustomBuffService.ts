/* eslint-disable @typescript-eslint/naming-convention */
import type { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import type { WTTInstanceManager } from "../WTTInstanceManager";
import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";
import * as customBuffs from "../../db/globals/customBuffs.json";

export class WTTCustomBuffService 
{
    private Instance: WTTInstanceManager;
    public preSptLoad(Instance: WTTInstanceManager): void 
    {
        this.Instance = Instance;
    }
    public postDBLoad(): void 
    {
        this.addBuffsToDb();
    }
    private addBuffsToDb() 
    {
        const databaseTables: IDatabaseTables = this.Instance.database;

        const buffs = databaseTables.globals.config.Health.Effects.Stimulator.Buffs;
        const myBuffs = customBuffs.Buffs;
        for (const buff in myBuffs)
            try 
            {
                buffs[buff] = myBuffs[buff];
                this.Instance.logger.log(`Successfully added new buff: ${buff}`, LogTextColor.GREEN);
            }
            catch (err) 
            {
                this.Instance.logger.log(err, LogTextColor.RED);
            }
    }
}