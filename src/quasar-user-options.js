import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'

import '@quasar/extras/mdi-v5/mdi-v5.css'
import '@quasar/extras/eva-icons/eva-icons.css'

import 'quasar/dist/quasar.css'

import {Notify} from "quasar";

export default {
    config: {
        notify: {}
    },
    plugins: {
        Notify
    }
}