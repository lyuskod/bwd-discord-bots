import { EmbedBuilder } from 'discord.js'

const color = 0x0099ff
const title = 'Our platform does not have this wallet'

export const getWalletNotFoundEmbed = (value) => {
  const exampleEmbed = new EmbedBuilder()
    .setColor(color)
    .setTitle(title)
    .addFields({ name: '\u200B', value })
    .setFooter({
      text: 'www.buywalletdat.com',
    })
  return { embeds: [exampleEmbed] }
}
