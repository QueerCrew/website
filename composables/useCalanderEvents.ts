import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import eventConfig from '~/event.config'
import type { Event, EventConfig } from '~/types/event'

dayjs.extend(timezone)



function generateSingleEvent(eventConfig: EventConfig): Event {
    return {
        ...eventConfig,
        start: dayjs(eventConfig.start, 'YYYY-MM-DD HH:mm'),
        end: dayjs(eventConfig.end, 'YYYY-MM-DD HH:mm'),
    }
}

function generateRepeatingEvent(eventConfig: EventConfig): Event[] {
    const dates = eventConfig.repeat?.generateFunction().next(eventConfig.repeat?.generateAmount || 1)
    const start = dayjs(eventConfig.start, 'YYYY-MM-DD HH:mm')
    const end = dayjs(eventConfig.end, 'YYYY-MM-DD HH:mm')

    return dates.map((date: any) => {
        return {
            ...eventConfig,
            start: date.tz(eventConfig.timezone).hour(start.hour()).minute(start.minute()),
            end: date.tz(eventConfig.timezone).hour(end.hour()).minute(end.minute()),
        }
    })
}

export function useCalanderEvents(filterPastEvents: boolean = true): Event[] {
    let events: Event[] = []

    // Generate events
    for (const event of eventConfig) {
        if (!event.repeat) events.push(generateSingleEvent(event))
        if (event.repeat) events.push(...generateRepeatingEvent(event))
    }

    // Sort by date
    events.sort((a: any, b: any) => a.start - b.start)

    // Filter past events
    if (filterPastEvents) events = events.filter((date) => date.end.isAfter(dayjs()))

    // Return events
    return events
}