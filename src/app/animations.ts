import { trigger, style, transition, animate, state } from "@angular/animations";

export const showStateTrigger = trigger('showState', [

    transition(':enter',[style({
        opacity: 0
    }), animate('500ms ease-in')]),
    transition(':leave', animate('500ms ease-out', style({
        opacity: 0
    })))
]);