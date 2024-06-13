import { atom, selector } from "recoil";
import axios from 'axios';

//Async DAta Queries

export const notifications=atom({
    key:"NetworkAtom",
    default:selector({
        key:"NetworkAtomSelector",
        get: async ()=>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data

        }
    })
})

export const TotalNotificationSelector=selector({
    key:"TotalNotoficationSelector",
    get:({get})=>{
        const allNotifications=get(notifications);
        return (allNotifications.jobs+allNotifications.network+allNotifications.messaging+allNotifications.notifications)
    }
})