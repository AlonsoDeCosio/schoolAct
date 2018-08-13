import React from 'react'
import Reminder from './Reminder/Reminder'

const reminders = (props) => props.reminders.map((reminder, index) => {
    return <Reminder
        key={reminder.id}
        reminder={reminder.reminder} />
});

export default reminders;