// @ts-ignore
import dayjsRecur from 'dayjs-recur'
import dayjs from 'dayjs'
import type { EventConfig } from '~~/types/event'

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
            generateFunction: () => dayjs().add(-1, 'day').recur().every('Tuesday').daysOfWeek().every([1]).except('2025-09-09').weeksOfMonthByDay(),
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
        start: '2025-09-09 18:00',
        end: '2025-09-09 22:00',
        title: 'Die QueerCrew Stockbrot Party',
        description:
            'Auch in diesem Monat wollen wir euch wieder zu einem Special Event einladen: am Dienstag, den 08.09. ab 18:00 werden wir auf dem Kirchplatz vor dem Emma einen Feuerkorb haben. Wir werden Stockbrot machen und Marshmallows grillen, und gemeinsam das Feuer genießen (alles wie immer kostenlos). Und auch das Emma ist wie gewohnt geöffnet.<br><br>'+
            'Also übt schon mal eure Lagerfeuer-Lieder; wir sehen uns am Dienstag!<br>'+
            'Euer QC Team ❤️',
        location: 'Onkel Emma, Echternstraße 9',
        image: '/images/events/2025_09_09_stockbrot.png',
        icsFile: null,
    },
] as EventConfig[]