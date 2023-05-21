import { EmbedBuilder } from 'discord.js'

const color = 0xff0000
const title = 'Error occured'

export const getErrorEmbed = () => {
  const exampleEmbed = new EmbedBuilder()
    .setColor(color)
    .setTitle(title)
    .setFooter({
      text: 'www.buywalletdat.com',
    })
  return { embeds: [exampleEmbed] }
}
