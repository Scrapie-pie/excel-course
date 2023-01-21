import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
    static className = 'excel__toolbar'
    static htmlData = 'asdasdasd'

    toHTML() {
        return '<h1>toolbar</h1>'
    }
}
