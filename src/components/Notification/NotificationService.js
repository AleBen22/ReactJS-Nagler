import '../Notification/NotificationService.css'
import { useState, useContext, createContext } from "react"

export const Notification = ({type, text}) => {
    const notificationStyle = {
        backgroundColor: type === 'success' ? 'green' : 'red',
    }

    if(!text) return

    return (
        <div style={notificationStyle} className='Notification'>
            {text}
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState({
        type: 'success',
        text: ''
    })
    
const setNotification = (type, text) => {
    setNotificationData({type, text})
    setTimeout(() => {
        setNotificationData({type: 'success', text: ''})
    }, 2000)
}

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification {...notificationData}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}