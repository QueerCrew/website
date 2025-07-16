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
            generateFunction: () => dayjs().add(-1, 'day').recur().every('Tuesday').daysOfWeek().every([1]).except('2025-07-08').weeksOfMonthByDay(),
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
        start: '2025-08-09 12:00',
        end: '2025-08-09 18:30',
        title: 'Der QC auf dem CSD Braunschweig',
        description:
            '<b>Wir sind wieder auf dem CSD Braunschweig!</b><br>'+
            'Wie letztes Jahr sind wir wieder auf dem CSD Braunschweig und haben cute Buttons für euch in Gepäck.<br>'+
            'Für gerade einmal <b>1€</b> könnt ihr euch einen Button aus den 24 handgezeichneten Designs aussuchen.<br>'+
            'Und für einen Euro mehr gibt\'s gleich 3 Buttons eurer Wahl!<br>'+
            'Auch könnt ihr euch für 50ct wieder Buttons selbst gestalten.<br>'+
            'Oben drauf gibt es für jeden Kauf kostenlos eine QC Button und QC Sticker dazu.<br><br>'+
            '<b>Es lohnt sich also, bei uns vorbei zu kommen!</b><br><br>'+
            'Wir freuen uns auf euch!<br>' +
            'Euer QC Team ❤️',
        location: 'Schlossplatz, neben dem VSE Stand',
        image: '/images/events/2025_08_09_csd.png',
        icsFile: null,
    },
] as EventConfig[]