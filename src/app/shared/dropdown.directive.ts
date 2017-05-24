import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[dropdownHandler]'
})

export class DropwdownToggle {
    @HostBinding('class.open') opened: boolean = false;
    @HostListener('click') onclick(eventData: Event) {
        this.opened = !this.opened;
    }

}