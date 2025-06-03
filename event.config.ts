// @ts-ignore
import dayjsRecur from 'dayjs-recur'
import dayjs from 'dayjs'
import type { EventConfig } from '~/types/event'

dayjs.extend(dayjsRecur)



export default [
    {
        category: 'qc_irl',
        timezone: 'Europe/Berlin',
        start: '2025-01-01 18:00',
        end: '2075-01-01 22:00',
        title: 'QC_IRL – Special Event',
        description: 'Komm zu unseren qc_irl Treffen jeden 2. und 4. Dienstag im Monat!<br><br>Wir freuen uns auf euch!<br>Euer QC Team ❤️',
        location: 'Onkel Emma, Echternstraße 9',
        image: '/images/events/general_special_event_2025.png',
        icsFile: '/downloads/qc-irl-events.ics',
        repeat: {
            generateAmount: 4,
            // @ts-ignore
            generateFunction: () => dayjs().add(-1, 'day').recur().every('Tuesday').daysOfWeek().every([1]).except('2025-06-10').weeksOfMonthByDay(),
        },
    },
    {
        category: 'qc_irl',
        timezone: 'Europe/Berlin',
        start: '2025-01-01 18:00',
        end: '2075-01-01 22:00',
        title: 'QC_IRL – Hangout & Chill',
        description: 'Entspannte Spiele, nette Gespräche und ein paar Drinks. Komm zu unseren qc_irl Treffen jeden 2. und 4. Dienstag im Monat!<br><br>Wir freuen uns auf euch!<br>Euer QC Team ❤️',
        location: 'Onkel Emma, Echternstraße 9',
        image: '/images/events/general_chill_event_2025.png',
        icsFile: '/downloads/qc-irl-events.ics',
        repeat: {
            generateAmount: 4,
            // @ts-ignore
            generateFunction: () => dayjs().add(-1, 'day').recur().every('Tuesday').daysOfWeek().every([3]).weeksOfMonthByDay(),
        },
    },
    {
        category: 'qc_irl',
        timezone: 'Europe/Berlin',
        start: '2025-06-10 18:00',
        end: '2025-06-10 22:00',
        title: 'QC_IRL – Smoothie Party',
        description:
            '<b>Lasst uns gemeinsam den Sommer einläuten mit ein paar frischen Smoothies!</b><br><br>'+
            'In gemütlicher Onkel-Emma-Atmosphäre habt ihr die Möglichkeit, '+
            'unsere Rezepte auszuprobieren oder eigene Frucht-Kombinationen zusammenzustellen - natürlich vegan.<br><br>'+
            'Wir freuen uns auf euch!<br>' +
            'Euer QC Team ❤️',
        location: 'Onkel Emma, Echternstraße 9',
        image: '/images/events/2025_06_10_smoothie_party.png',
        icsFile: null,
    },
] as EventConfig[]