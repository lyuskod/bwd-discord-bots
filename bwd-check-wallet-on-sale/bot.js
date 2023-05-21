import { default as axios } from 'axios'
import { Client, Embed, GatewayIntentBits } from 'discord.js'
import { getErrorEmbed } from './error-embed.js'
import { getInvalidAddressValueErrorEmbed } from './invalid-address-value.js'
import { getWalletFoundEmbed } from './wallet-found-embed.js'
import { getWalletNotFoundEmbed } from './wallet-not-found-embed.js'

const token =
  'MTEwOTY0MjU0NzQyMjMxODY1Mg.GSBsAn.OnYCd-WlSLHvWg6o31gU_j4Ch0Yyj4zRh2Lah4'
const url = 'https://api.buywalletdat.com/api/getWalletByAddress/'

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
})

client.on('messageCreate', async (message) => {
  const matched = message.content.match(/!wallet\s\w+/g)
  try {
    if (message.content.startsWith('!wallet')) {
      const wallet = matched[0].split(' ')[1]
      if (wallet.length < 26)
        return message.reply(getInvalidAddressValueErrorEmbed(wallet))

      const data = (await axios.get(`${url}/${wallet}`)).data
      if (data.length) {
        const walletData = data[0]
        message.reply(getWalletFoundEmbed(walletData))
        return
      }
      message.reply(getWalletNotFoundEmbed(wallet))
    }
  } catch (e) {
    console.log(e)
    message.reply(getErrorEmbed())
  }
})

client.login(token)
