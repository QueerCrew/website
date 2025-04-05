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
        title: 'QC_IRL – Hangout & Chill',
        description: 'Entspannte Spiele, nette Gespräche und ein paar Drinks. Komm zu unseren qc_irl Treffen jeden 2. und 4. Dienstag im Monat!<br><br>Wir freuen uns auf euch!<br>Euer QC Team ❤️',
        location: 'Onkel Emma, Echternstraße 9',
        image: '/images/events/qc_irl_hangout_and_chill.png',
        icsFile: '/downloads/qc-irl-events.ics',
        repeat: {
            generateAmount: 4,
            // @ts-ignore
            generateFunction: () => dayjs().add(-1, 'day').recur().every('Tuesday').daysOfWeek().every([1,3]).except('2025-04-08').weeksOfMonthByDay(),
        },
    },
    {
        category: 'qc_irl',
        timezone: 'Europe/Berlin',
        start: '2025-04-08 18:00',
        end: '2025-04-08 22:00',
        title: 'QC_IRL – PowerPoint Karaoke',
        description:
            'Wir laden euch ein, beim kommenden QC_IRL am <b>Dienstag, den 08.04.</b> mit uns Powerpoint-Karaoke zu spielen! '+
            'Lass dich überraschen, welche fremde Powerpoint-Präsentation du vorstellen könntest.<br><br>'+
            'Wir freuen uns auf euch!<br>' +
            'Euer QC Team ❤️',
        location: 'Onkel Emma, Echternstraße 9',
        image: '/images/events/2025_04_08_powerpoint_karaoke.png',
        icsFile: null,
    },
] as EventConfig[]