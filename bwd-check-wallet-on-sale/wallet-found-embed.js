import { EmbedBuilder } from 'discord.js'

const color = 0x00FF00
const title = 'Wallet is found'
const apiUrl = 'https://api.buywalletdat.com/api'
const description = 'Wallet is already on sale on our website'

export const getWalletFoundEmbed = (walletData) => {
  const url = `${apiUrl}/${walletData.Address}`
  const exampleEmbed = new EmbedBuilder()
    .setColor(color)
    .setTitle(title)
    .setURL(url)
    .setDescription(description)
    .addFields(
      { name: 'Address', value: walletData.Address },
      { name: 'Balance', value: `${walletData.Balance} BTC` },
      { name: 'Hints count', value: `${walletData.Hints}` },
      { name: 'Package', value: walletData.Package },
      { name: 'Comments', value: walletData.Comments },
      { name: 'Buy', value: walletData.Satoshi }
    )
    .setImage(walletData.Screenshot)
    .setFooter({
      text: 'www.buywalletdat.com',
    })
  return { embeds: [exampleEmbed] }
}
