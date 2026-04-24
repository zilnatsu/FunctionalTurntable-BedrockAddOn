import { system, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
const turntableUITrigger = {
    onPlayerInteract(event) {
        const player = event.player;
        const block = event.block;
        if (block.typeId === "firezd:turntable") {
            const dimension = player.dimension;
            const blockPos = block.location;
            const ui = new ActionFormData()
                .title("Turntable")
                .body("Choose a song that you want to hear!")
                .button("Burning Desires\nSan-Z, HOYO-MiX", "textures/ui_icons/burningdesires")
                .button("Come Alive Stripped.\nSan-Z, HOYO-MiX", "textures/ui_icons/comealivestripped")
                .button("Tiny Giant\nSan-Z, HOYO-MiX, Ashley Alisha", "textures/ui_icons/tinygiant")
                .button("§c§lStop Playing");
            ui.show(player).then((response) => {
                if (response.selection === 0) {
                    world.getDimension("overworld").runCommand("stopsound @a");
                    player.sendMessage("§b[Turntable] §fPlaying §6Burning Desires §fby §aSan-Z, HOYO-MiX");
                    //dimension.spawnParticle("minecraft:basic_smoke_particle", blockPos)
                    dimension.playSound("record.burning_desires", blockPos, {
                        volume: 0.5,
                        pitch: 1.0
                    });
                }
                else if (response.selection === 1) {
                    world.getDimension("overworld").runCommand("stopsound @a");
                    player.sendMessage("§b[Turntable] §fPlaying §6Come Alive Stripped. §fby §aSan-Z, HOYO-MiX");
                    dimension.playSound("record.come_alive_stripped", blockPos, {
                        volume: 0.5,
                        pitch: 1.0
                    });
                }
                else if (response.selection === 2) {
                    world.getDimension("overworld").runCommand("stopsound @a");
                    player.sendMessage("§b[Turntable] §fPlaying §6Tiny Giant §fby §aSan-Z, HOYO-MiX, Ashley Alisha");
                    dimension.playSound("record.tiny_giant", blockPos, {
                        volume: 0.5,
                        pitch: 1.0
                    });
                }
                else if (response.selection === 3) {
                    world.getDimension("overworld").runCommand("stopsound @a record.come_alive_stripped");
                    world.getDimension("overworld").runCommand("stopsound @a record.burning_desires");
                    world.getDimension("overworld").runCommand("stopsound @a record.tiny_giant");
                    player.sendMessage("The song currently playing has been stopped.");
                }
            });
        }
    }
};
system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent("firezd:turntable_ui", turntableUITrigger);
});
world.afterEvents.playerBreakBlock.subscribe((event) => {
    const block = event.brokenBlockPermutation?.type?.id ?? event.block?.typeId;
    if (block === "firezd:turntable") {
        const dimension = event.player.dimension;
        dimension.runCommand("stopsound @a record.come_alive_stripped");
        dimension.runCommand("stopsound @a record.burning_desires");
        dimension.runCommand("stopsound @a record.tiny_giant");
        event.player.sendMessage("Your Turntable has been interrupted.");
    }
});
/*
world.afterEvents.playerBreakBlock.subscribe((event) => {
    world.getDimension("overworld").runCommand("stopsound @a record.come_alive_stripped");
    world.getDimension("overworld").runCommand("stopsound @a record.lava_chicken");
    event.player.sendMessage("GOkill")
});
*/
/*
import { system, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

system.run(() => {
    const ui = new ActionFormData()
        .title("Custom UI")
        .body("")
        .button("Button 1")
        .button("Button 2");

    world.afterEvents.playerInteractWithBlock.subscribe((event) => {
        const player = event.player;
        const block = event.block;

        if (block.typeId === "firezd:turntable") {
            ui.show(player);
        }
    });
})
*/ 
