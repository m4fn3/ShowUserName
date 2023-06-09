import {Plugin, registerPlugin} from 'enmity/managers/plugins'
import {React} from 'enmity/metro/common'
import {create} from 'enmity/patcher'
// @ts-ignore
import manifest, {name as plugin_name} from '../manifest.json'
import Settings from "./components/Settings"
import {getByProps} from "enmity/modules"
import {get} from "enmity/api/settings"
import {hookAllEvents} from "../../hook";
import {getByKeyword} from "enmity/metro";

const Patcher = create('ShowUserName')
const ReactNative = getByProps("View")
const UserStore = getByProps("getUser")
const {DCDChatManager} = ReactNative.NativeModules

const ShowUserName: Plugin = {
    ...manifest,
    onStart() {
        function parseMessage(message) {
            let user = UserStore.getUser(message.authorId)
            if (!user) return message
            let username = user.discriminator === "0" ? user.username : user.tag
            if (user.globalName && get(plugin_name, "display", true)) username += ` - ${user.globalName}`
            get(plugin_name, "replace", false) ? message.username = username : message.username += ` (${username})`
            return message
        }

        Patcher.before(DCDChatManager, "updateRows", (_, args, __) => {
            const rows = JSON.parse(args[1])
            for (const row of rows) {
                if (row.type !== 1 || !row.message?.authorId || !row.message?.username) continue
                row.message = parseMessage(row.message)
                if (row.message.referencedMessage?.message) {
                    row.message.referencedMessage.message = parseMessage(row.message.referencedMessage.message)
                }
            }
            args[1] = JSON.stringify(rows)
        })
    },
    onStop() {
        Patcher.unpatchAll()
    }
    ,
    getSettingsPanel({settings}) {
        return <Settings settings={settings}/>
    }
}

registerPlugin(ShowUserName)
