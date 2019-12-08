import { trigger, style, transition, animate, state } from "@angular/animations";


export const componentChangedState = trigger('componentChanged', [
    state('default', style({
        top: 0
    })),
    state('loginedUser', style({
        top: '25%'
    })),
    transition('default <=> loginedUser', 
        animate(500)
    )
])