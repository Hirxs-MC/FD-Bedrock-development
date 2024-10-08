import { world, BlockPermutation, ItemStack } from '@minecraft/server'

world.beforeEvents.worldInitialize.subscribe(initEvent => {
  initEvent.itemComponentRegistry.registerCustomComponent('test:changer_tool', {
    onUseOn: e => {
      const { block, player } = e;
      if (block.hasTag('changeable')) {
        const updates = e.block.permutation.getState("p:changer")
        block.setPermutation(block.permutation.withState("p:changer", updates + 1));
        block.dimension.playSound("block.lantern.break", block.center());
        block.dimension.spawnParticle("foxes:texture", block.center());
      }
    }
  })
});

world.beforeEvents.worldInitialize.subscribe(initEvent => {
  initEvent.itemComponentRegistry.registerCustomComponent('fbd:banjo_sound', {
    onUseOn: e => {
      const { block, player } = e;
      e.source.playSound("note.bass");
    }
  })
});

world.beforeEvents.worldInitialize.subscribe(initEvent => {
  initEvent.itemComponentRegistry.registerCustomComponent('fbd:guitar_sound', {
    onUseOn: e => {
      const { block, player } = e;
      e.source.playSound("note.guitar");
    }
  })
});

world.beforeEvents.worldInitialize.subscribe(initEvent => {
  initEvent.itemComponentRegistry.registerCustomComponent('fbd:flashlight_on', {
    onUseOn: e => {
      const { block, player } = e;
      e.source.playSound("flashlight.click");
      e.source.runCommand("replaceitem entity @s slot.weapon.mainhand 0 fb: flashlight")
    }
  })
});

world.beforeEvents.worldInitialize.subscribe(initEvent => {
  initEvent.itemComponentRegistry.registerCustomComponent('fbd:flashlight_off', {
    onUseOn: e => {
      const { block, player } = e;
      e.source.playSound("flashlight.click");
      e.source.runCommand("replaceitem entity @s slot.weapon.mainhand 0 fb: flashlight_off")
      return;
    }
  })
});

// ITEMS

// world.beforeEvents.worldInitialize.subscribe(initEvent => {
//  initEvent.itemComponentRegistry.registerCustomComponent('fbd:stars_change', {
//    onUseOn: e => {
//      const { block, player } = e;
//      const stars_change_1 = block.permutation.withState("fb:box", 3);
//      if (block.hasTag('stars') && block.permutation.getState("fb:box") < 2) {
//        block.setPermutation(stars_change_1);
//        return;
//      }
//    }
//  });
//})