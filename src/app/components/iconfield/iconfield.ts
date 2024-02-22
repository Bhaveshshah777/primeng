import { CommonModule } from '@angular/common';
import {
    Component,
    Input,
    NgModule,
} from '@angular/core';

import { SharedModule } from 'primeng/api';


/**
 * IconField wraps an input and an icon.
 * @group Components
 */
@Component({
    selector: 'p-iconField',
    template: ` <span class="p-input-icon-left"><ng-content></ng-content> </span>`,

    host: {
        class: 'p-element'
    }
})
export class IconField {
    @Input() iconPosition: string | undefined;
}

@NgModule({
    imports: [CommonModule],
    exports: [IconField, SharedModule],
    declarations: [IconField]
})
export class IconFieldModule {}
