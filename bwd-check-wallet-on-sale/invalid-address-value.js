import { EmbedBuilder } from 'discord.js'

const color = 0xff0000
const title = 'Invalid address value'

export const getInvalidAddressValueErrorEmbed = (value) => {
  const exampleEmbed = new EmbedBuilder()
    .setColor(color)
    .setTitle(title)
    .addFields({ name: '\u200B', value })
    .setFooter({
      text: 'www.buywalletdat.com',
    })
  return { embeds: [exampleEmbed] }
}
