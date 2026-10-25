ServerEvents.recipes(event => {
    event.remove({ output: 'mekanism:jetpack' })
    event.remove({ output: 'industrialforegoing:ore_laser_base' })
    event.remove({ output: 'mekanism:mekasuit_helmet' })
    event.remove({ output: 'mekanism:mekasuit_bodyarmor' })
    event.remove({ output: 'mekanism:mekasuit_pants' })
    event.remove({ output: 'mekanism:mekasuit_boots' })
    event.remove({ output: 'mekanism:meka_tool' })
    console.log('NERFED!')
    // mekasuit and automatic ores became too overpowered so the best way to deal with them was just removing the recipe
})