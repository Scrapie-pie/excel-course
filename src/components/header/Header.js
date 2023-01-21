import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
    static className = 'excel__header'
    static htmlData = 'asdasdasd'

    toHTML() {
        return '<h1>header</h1>'
    }
}
