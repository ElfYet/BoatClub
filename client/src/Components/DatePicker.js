import React from 'react';
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker'

function DatePicker() {
    const [value, setValue] = useState(new Date())
    return (
        <div className='p-4 mx-auto d-block'>
            <DateTimePicker onChange={setValue} value={value} />
        </div>
    )
}

export default DatePicker