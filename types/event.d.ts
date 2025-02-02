import type { Dayjs } from 'dayjs'

export type Event = {
    category: string
    start: Dayjs
    end: Dayjs
    title: string
    description: string | null
    location: string | null
    image: string | null
    icsFile: string | null
}

export interface EventConfig extends Event {
    timezone: string
    start: string
    end: string
    repeat?: {
        generateAmount: number
        generateFunction: any
    }
}