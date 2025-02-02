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
            generateAmount: 3,
            // @ts-ignore
            generateFunction: () => dayjs().add(-1, 'day').recur().every('Tuesday').daysOfWeek().every([1,3]).weeksOfMonthByDay(),
        },
    },
    {
        category: 'misc',
        timezone: 'Europe/Berlin',
        start: '2025-02-15 11:55',
        end: '2025-02-15 13:00',
        title: 'Wähl Liebe – Demo Event',
        description:
            'Am 15. Februar um 11:55 Uhr demonstrieren wir auf dem Schlossplatz in Braunschweig für Vielfalt,'+
            'Demokratie und die Rechte queerer Menschen! Seid dabei und zeigt eure Solidarität!'+
            'Gemeinsam gehen wir für eine inklusive Zukunft auf die Straße.<br>'+
            'Weitere Infos gibt\'s hier: <a href="http://www.csd-bs.de" target="_blank" >www.csd-bs.de</a>',
        location: 'Schlossplatz, Braunschweig',
        image: '/images/events/2025_02_15_waehl_liebe.png',
        icsFile: null,
    },
] as EventConfig[]