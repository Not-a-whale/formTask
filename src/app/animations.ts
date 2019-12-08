import { trigger, style, transition, animate } from "@angular/animations";

export const showStateTrigger = trigger('showState', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(2000, style({
            opacity: 1
        }))
    ]),
    transition(':leave', [
        style ({
            opacity: 1
        }), animate(400, style({
            opacity: 0
        }))
    ])
]);